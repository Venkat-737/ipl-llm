from flask import Flask, request, jsonify
import pandas as pd
from langchain_core.prompts import PromptTemplate
from langchain.chains.question_answering import load_qa_chain
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from flask_cors import CORS
import os
from langchain_community.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from dotenv import load_dotenv
import logging

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("Google API key not found in environment variables")


# Load and process PDF content
def pdf_content(path):
    pdf_loader = PyPDFLoader(path)
    pages = pdf_loader.load_and_split()
    return pages


def get_chunks(pages):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    context = "\n\n".join(str(p.page_content) for p in pages)
    texts = text_splitter.split_text(context)
    return texts


def create_embeddings(texts):
    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001", google_api_key=GOOGLE_API_KEY
    )
    vector_index = Chroma.from_texts(texts, embeddings).as_retriever(
        search_kwargs={"k": 5}
    )
    return vector_index


def create_qa_chain(vector_index):
    model = ChatGoogleGenerativeAI(
        model="gemini-pro",
        google_api_key=GOOGLE_API_KEY,
        temperature=0.2,
        convert_system_message_to_human=True,
    )
    template = """Use the following pieces of context to answer the question at the end. Always say "thanks for asking!" at the end of the answer.
    {context}
    Question: {question}
    Helpful Answer:"""
    QA_CHAIN_PROMPT = PromptTemplate.from_template(template)
    qa_chain = RetrievalQA.from_chain_type(
        model,
        retriever=vector_index,
        return_source_documents=True,
        chain_type_kwargs={"prompt": QA_CHAIN_PROMPT},
    )
    return qa_chain


pages = pdf_content(r"./2024 Indian Premier League.pdf")
texts = get_chunks(pages)
vector_index = create_embeddings(texts)
qa_chain = create_qa_chain(vector_index)


@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        data = request.json
        query = data.get("query", "")

        if not query:
            return jsonify({"error": "No query provided"}), 400

        result = qa_chain.invoke({"query": query})
        answer = result["result"]

        return jsonify({"answer": answer})
    except Exception as e:
        logging.error(f"Error occurred: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)

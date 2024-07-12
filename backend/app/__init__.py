from flask import Flask
from flask_cors import CORS
from app.routes import init_routes
from database import init_db
import os

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'], supports_credentials=True)
app.secret_key = os.getenv('SECRET_KEY', os.urandom(24))

init_routes(app)
init_db(app)

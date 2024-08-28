
const fs = require('fs').promises;
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const Match = require('../models/Match');

dotenv.config();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

if (!GOOGLE_API_KEY) {
  throw new Error('GOOGLE_API_KEY is not set in the environment variables');
}

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

let commentaryData = [];

async function loadCommentaryData() {
  const data = await fs.readFile('ipl_commentary_embeddings.json', 'utf-8');
  commentaryData = JSON.parse(data);
}

async function initializeQAChain() {
  await loadCommentaryData();
  console.log('Commentary data loaded successfully');
}

function findRelevantCommentary(query) {
  const keywords = query.toLowerCase().split(' ');
  return commentaryData
    .filter(item => item && item.text)
    .map(item => ({
      text: item.text,
      score: keywords.filter(keyword => item.text.toLowerCase().includes(keyword)).length
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.text)
    .join(' ');
}

async function generateAnswer(query, matchDetails) {
  const match = await Match.findById(matchDetails.id)
    .populate('team1')
    .populate('team2')
    .populate('venue')
    .populate('result.winner')
    .populate('result.man_of_the_match');

  if (!match) {
    return "Match details not found.";
  }

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const relevantCommentary = findRelevantCommentary(query);

  const prompt = `You are an expert cricket commentator. Provide an engaging and detailed response to this query about an IPL match: "${query}"

Match details:
Teams: ${match.team1.name} vs ${match.team2.name}
Venue: ${match.venue.name}
Date: ${match.date}
Winner: ${match.result.winner.name}
Margin: ${match.result.margin}
Man of the Match: ${match.result.man_of_the_match.name}

First Innings Score: ${calculateTotalScore(match.first_innings)}/${calculateTotalWickets(match.first_innings)}
Second Innings Score: ${calculateTotalScore(match.second_innings)}/${calculateTotalWickets(match.second_innings)}

Relevant commentary: ${relevantCommentary}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

function calculateTotalScore(innings) {
  return innings.reduce((total, over) => total + over.runs_conceded, 0);
}

function calculateTotalWickets(innings) {
  return innings.reduce((total, over) => total + over.wickets, 0);
}

module.exports = { generateAnswer, initializeQAChain };

/*

const fs = require('fs').promises;
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const Match = require('../models/Match');

dotenv.config();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

if (!GOOGLE_API_KEY) {
  throw new Error('GOOGLE_API_KEY is not set in the environment variables');
}

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

let commentaryData = [];

async function loadCommentaryData() {
  const data = await fs.readFile('ipl_commentary_embeddings.json', 'utf-8');
  commentaryData = JSON.parse(data);
}

async function initializeQAChain() {
  await loadCommentaryData();
  console.log('Commentary data loaded successfully');
}

function findRelevantCommentary(query) {
  const keywords = query.toLowerCase().split(' ');
  return commentaryData
    .filter(item => item && item.text)
    .map(item => ({
      text: item.text,
      score: keywords.filter(keyword => item.text.toLowerCase().includes(keyword)).length
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.text)
    .join(' ');
}

async function generateAnswer(query, matchDetails) {
  const match = await Match.findById(matchDetails.id)
    .populate('team1')
    .populate('team2')
    .populate('venue')
    .populate('result.winner')
    .populate('result.man_of_the_match');

  if (!match) {
    return "Match details not found.";
  }

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const relevantCommentary = findRelevantCommentary(query);

  const prompt = `You are an expert cricket commentator with extensive knowledge of IPL matches. Use your knowledge of cricket and information available on the internet about IPL matches to provide an engaging and detailed response to this query: "${query}"

Match details:
Teams: ${match.team1.name} vs ${match.team2.name}
Venue: ${match.venue.name}
Date: ${match.date}
Winner: ${match.result.winner.name}
Margin: ${match.result.margin}
Man of the Match: ${match.result.man_of_the_match.name}

First Innings Score: ${calculateTotalScore(match.first_innings)}/${calculateTotalWickets(match.first_innings)}
Second Innings Score: ${calculateTotalScore(match.second_innings)}/${calculateTotalWickets(match.second_innings)}

Relevant commentary: ${relevantCommentary}

Based on these details and your knowledge of IPL cricket, provide a comprehensive and accurate answer to the query. Include specific player performances, match highlights, and any other relevant information you know about this match or these teams in the IPL.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}


function getTopBatsmen(innings) {
  const batsmen = {};
  innings.forEach(over => {
    over.batsmen.forEach(batsman => {
      if (!batsmen[batsman.name]) batsmen[batsman.name] = 0;
      batsmen[batsman.name] += batsman.runs;
    });
  });
  return Object.entries(batsmen)
    .map(([name, runs]) => ({ name, runs }))
    .sort((a, b) => b.runs - a.runs)
    .slice(0, 3);
}



function calculateTotalScore(innings) {
  return innings.reduce((total, over) => total + over.runs_conceded, 0);
}

function calculateTotalWickets(innings) {
  return innings.reduce((total, over) => total + over.wickets, 0);
}

module.exports = { generateAnswer, initializeQAChain };
*/
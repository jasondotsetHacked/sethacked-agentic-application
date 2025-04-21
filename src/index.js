import { config } from 'dotenv';
config({ path: './.env' });

import OpenAI from "openai";
if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY in environment variables.");
    process.exit(1);
}
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

import express from 'express';
import dbPromise from './data/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Example usage of the database
(async () => {
    const db = await dbPromise;
    console.log('Database initialized');
})();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
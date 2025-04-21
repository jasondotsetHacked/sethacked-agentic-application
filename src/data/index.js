import sqlite3 from 'sqlite3';

// Open a database connection
const initializeDatabase = () => {
    const db = new sqlite3.Database('./src/data/database.db');

    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS example (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);
    });

    return db;
};

const db = initializeDatabase();

export default db;
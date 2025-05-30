import {createPool} from 'mysql2/promise.js'
import dotenv from 'dotenv'
dotenv.config({path : '.env'})


export const pool = createPool({
    host: process.env.HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    uri:process.env.DATABASE_URL
})
import { Pool } from "@vercel/postgres";

export const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'kwanso123',
    database: 'learn_next_dashboard'
});
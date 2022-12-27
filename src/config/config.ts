import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb://0.0.0.0:27017/chatdb`;

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

export const config = {
    mongo: {
        url: MONGO_URL
    },
   port: PORT
}
/**
 * Imports
 */
import { Configuration, OpenAIApi } from 'openai';
import { config } from 'dotenv';

// Load environment variables.
config();

// Configure the OpenAI API.
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;
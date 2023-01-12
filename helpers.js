/**
 * Imports
 */
import openai from "./openai.js";
import { CHUNK_SIZE, MODEL, LANGUAGE } from "./constants.js";


/**
 * Recursively split the text into an array
 * @param {string} text 
 * @param {number} startingIndex 
 * @param {array} chunks 
 * @returns array
 */
export function splitText( text, startingIndex = 0, chunks = [] ) {
    // Stop case
    if ( startingIndex > text.length ) {
        return chunks;
    }
    // Recurse
    const split = text.substring( startingIndex, startingIndex + CHUNK_SIZE )
    chunks.push( split );
    return splitText( text, startingIndex + CHUNK_SIZE, chunks );
}


/**
 * Translate the text
 * @param {*} text 
 * @returns string
 */
export async function translate( text ) {
    const response = await openai.createCompletion({
        model: MODEL,
        prompt: `Translate this into ${LANGUAGE}\n\n${text}\n\n1.`,
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

      return response.data.choices[0].text;
}
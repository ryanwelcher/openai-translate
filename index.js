/**
 * Imports
 */

import fs from 'fs';
import { translate, splitText } from './helpers.js'


async function translateScript() {
    // Load the text file
    try {
        const data = fs.readFileSync('./source/input.txt', 'utf8');
        // Remove any existing content in the file.
        fs.truncate('./translated/output.txt', 0, async function() {
            console.log('File truncated. Starting translation...');
            // split the text into chunks.
            const sections = splitText( data );
            // run translations
            for( let i = 0; i < sections.length; ++i ) {
                console.log( `Processing chunk ${i+1} of ${sections.length}...` );
                const content = await translate(sections[i]);
                fs.appendFile('./translated/output.txt', content, err => {
                    if (err) {
                        console.error(err);
                    }
                    // done!
                });
            }
        })
        
    } catch (err) {
        console.error(err);
    }
}

translateScript();
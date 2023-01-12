## Translation tool using OpenAI

This is a tool I put together to test translating large amounts of text via OpenAI.


## Setup
1. Rename the `.env-example` file to simply `.env`
2. Create an account at [https://beta.openai.com/](https://beta.openai.com/) and create an API key.
3. Replace the `REPLACE_THIS_WITH_YOUR_KEY` with the API key in `.env`
4. Run `npm install` to install dependencies.
## Usage

1. Put a file called `input.txt` into the source directory containing the text you want to translate.
2. Change the `LANGUAGE` constant in `constants.js` i.e `Spanish`, `German` etc 
3. Run `npm start` to start translating the file
4. Translation will appear in `translated/output.txt`
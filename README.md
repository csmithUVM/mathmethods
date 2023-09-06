# Selecting & Sequencing Activity Web Tool

## Overview

This web tool allows users to enter a unique code provided by their instructor. Upon submission, the tool fetches a corresponding link from a predefined set and displays it to the user. The primary purpose is to ensure that each participant receives a unique set of materials for the activity.

## Structure

- `index.html`: The main HTML file which provides the interface for users to enter their unique code.
  
- `script.js`: The JavaScript file responsible for fetching, parsing the CSV containing the codes and URLs, and managing the display logic.
  
- `codes.csv`: The CSV file storing the unique codes and corresponding URLs.

## How it Works

### Code Lookup and Validation

1. **CSV Data Fetching**: As soon as the web tool is loaded, it fetches the `codes.csv` file. This file contains the unique codes and their corresponding URLs.

2. **Parsing the CSV**: The fetched CSV data is then parsed into a JavaScript object for easy lookup. Each line is read, split by a comma, and stored in an object with the code being the key and the URL being the value.

3. **Form Submission**: Users are prompted to enter their unique code via a form. Upon submission, the tool looks up the entered code in the parsed CSV data.

4. **Code Validation**: If the code exists, the tool fetches the corresponding URL. If the code doesn't exist, an error message is displayed, prompting the user to verify the code and try again.

### Link Generation

Once the code is validated and the corresponding link is fetched:

1. **Displaying the Link**: The link is then embedded in an anchor tag and displayed prominently to the user.

2. **Instructions**: Along with the link, instructions related to the activity are also displayed, guiding the user on the next steps.

## Usage

1. Update the `codes.csv` file with the unique codes and corresponding URLs.
   
2. Deploy the tool on any web server or platform that can serve static files (like GitHub Pages, Netlify, etc.).
   
3. Share the tool's link with participants and distribute the unique codes.

4. Participants enter their unique code and get access to their specific materials for the activity.

## Security Considerations

It's important to note that this tool doesn't implement any form of authentication or security beyond simple code validation. If security is a concern, consider:

- Rate limiting to prevent brute force attempts.
- Implementing some form of authentication.
- Using a backend server to handle lookups without exposing the full list of codes and URLs.

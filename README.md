# Sentiment Analysis Project

## Project Overview

This project demonstrates the use of Natural Language Processing (NLP) to analyze and interpret text content. It leverages external APIs to retrieve sentiment analysis data and displays the results on a web page. Specifically, the project utilizes the MeaningCloud API to analyze articles or blog posts and categorize the sentiment. The project aims to help you practice setting up Webpack, configuring loaders and plugins, working with Sass, and interfacing with external APIs.

### Key Features:
- Setting up Webpack configuration with loaders and plugins
- Implementing Scss styles
- Working with external APIs for sentiment analysis
- Building client-server architecture using Node.js and Express
- Managing environment variables securely

## Getting Started

### Prerequisites
- Node.js
- NPM or Yarn

### Dependencies

#### Development Dependencies
- Webpack
- Webpack Dev Server
- Babel Loader
- HTML Webpack Plugin
- Clean Webpack Plugin
- Copy Webpack Plugin
- Mini CSS Extract Plugin
- CSS Minimizer Webpack Plugin
- Terser Webpack Plugin

#### Runtime Dependencies
- Express
- Axios
- Dotenv
- Form-data (for MeaningCloud API)

### Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/saitamacoder196/evaluate-news-nlp.git
    ```

2. **Change to Project Directory**
    ```bash
    cd evaluate-news-nlp
    ```

3. **Install Dependencies**
    ```bash
    npm install
    ```

### API Setup

1. **Get API Credentials**
    - Sign up for a free API key from [MeaningCloud Sentiment Analysis](https://www.meaningcloud.com/developer/sentiment-analysis).

2. **Setup Environment Variables**
    - Create a `.env` file in the root directory and add your API credentials:
    ```bash
    LICENSE_KEY=your-meaningcloud-api-key
    ```

3. **Ensure `.env` is Ignored**
    - Add `.env` to `.gitignore` to prevent pushing sensitive data to a public repository.

### Running the Application

#### Development Mode
- **Start Webpack Dev Server**
    ```bash
    npm run start
    ```
- **Build Dev Bundle**
    ```bash
    npm run build-dev
    ```

#### Production Mode
- **Build Production Bundle**
    ```bash
    npm run build
    ```

- **Run Express Server**
    ```bash
    npm run build-prod
    ```

## Project Structure
- **src/client**: Contains the client-side code, including JavaScript, styles, and HTML templates.
- **src/server**: Contains the server-side code for handling API requests and serving client content.
- **webpack-dev.js**: Webpack configuration for development mode.
- **webpack-prod.js**: Webpack configuration for production mode.

## Further Development
- **Service Workers**: Implement service workers for offline functionality.
- **Error Handling**: Improve error handling and validation on both the client and server.

## License
MIT License

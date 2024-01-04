# Syllabuilder

Syllabuilder is a web application built using Next.js, NextAuth, Prisma, PostgreSQL, and integrates with the OpenAI API to generate personalized courses for users. This README provides an overview of the project, installation instructions, and other relevant information.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure user authentication and authorization using NextAuth.
- **Database Management:** Utilizes Prisma with PostgreSQL for efficient and reliable data storage.
- **OpenAI API Integration:** Generates personalized courses based on user input using the OpenAI API.
- **Next.js Features:** Takes advantage of server-side rendering, client-side rendering, and other Next.js optimizations.
- **CI/CD with GitHub Actions:** Implements continuous integration and deployment using GitHub Actions.
- **User-Friendly Interface:** Provides a user-friendly input form for generating personalized courses.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [NextAuth](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [OpenAI API](https://beta.openai.com/)
- [DigitalOcean](https://www.digitalocean.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/syllabuilder.git
   cd syllabuilder

Install dependencies:

bash
Copy code
npm install
Configuration
Configure NextAuth:

Follow the NextAuth documentation to set up authentication providers.

Configure Prisma:

Set up your database connection in the schema.prisma file. Replace the connection URL with your PostgreSQL database.

Configure OpenAI API:

Obtain API credentials from OpenAI and set them in your environment variables.

bash
Copy code
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
Usage
Start the development server:

bash
Copy code
npm run dev
The application will be accessible at http://localhost:3000.

Visit the website and use the input form to generate personalized courses.

Deployment
Deploy the application to DigitalOcean or your preferred hosting provider. Make sure to set the production environment variables, including database connection and OpenAI API key.

Configure GitHub Actions for automated CI/CD by updating the workflow file in the .github/workflows directory.

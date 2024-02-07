# Syllabuilder.online

Syllabuilder.online is a web application designed to generate personalized courses for users. It integrates with Next.js, NextAuth, Prisma, PlanateScale (MySQL), and utilizes the OpenAI API for course generation.

## Features

- **User Authentication:** Secure authentication and authorization using NextAuth.
- **Database Management:** Prisma with MySQL for efficient data storage.
- **OpenAI API Integration:** Generates personalized courses based on user input.
- **Next.js Optimization:** Utilizes server-side rendering and client-side rendering for enhanced performance.
- **CI/CD with GitHub Actions:** Implements continuous integration and deployment.
- **User-Friendly Interface:** Provides an intuitive input form for course generation.

## Tech Stack

<div style="display: flex; flex-wrap: wrap;">
  <img src="https://img.shields.io/badge/Next.js-%23000000.svg?style=flat&logo=next.js&logoColor=white" alt="Next.js" style="margin-right: 10px; height: 30px;">
  <img src="https://img.shields.io/badge/NextAuth-%23000000.svg?style=flat&logo=next.js&logoColor=white" alt="NextAuth" style="margin-right: 10px; height: 30px;">
  <img src="https://img.shields.io/badge/Prisma-%2307405e.svg?style=flat&logo=prisma&logoColor=white" alt="Prisma" style="margin-right: 10px; height: 30px;">
  <img src="https://img.shields.io/badge/MySQL-%234479A1.svg?style=flat&logo=mysql&logoColor=white" alt="MySQL" style="margin-right: 10px; height: 30px;">
  <img src="https://img.shields.io/badge/OpenAI-%23555555.svg?style=flat&logo=openai&logoColor=#F88D32" alt="OpenAI API" style="margin-right: 10px; height: 30px;">
  <img src="https://img.shields.io/badge/PlanetScale-%234287F5.svg?style=flat&logo=planetscale&logoColor=white" alt="PlanetScale" style="margin-right: 10px; height: 30px;">
  <img src="https://img.shields.io/badge/Docker-%232496ED.svg?style=flat&logo=docker&logoColor=white" alt="Docker" style="margin-right: 10px; height: 30px;">
  <img src="https://img.shields.io/badge/React%20Query-%23000000.svg?style=flat&logo=react&logoColor=white" alt="React Query" style="height: 30px;">
</div>


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SOUMOJIT-CHAKRABORTY/syllabuilder.online.git
   cd syllabuilder.online
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

- **NextAuth:** Follow the NextAuth documentation to set up authentication providers.
  
- **Prisma:** Set up your database connection in the `schema.prisma` file. Replace the connection URL with your MySQL database.

- **OpenAI API:** Obtain API credentials from OpenAI and set them in your environment variables.

   ```bash
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be accessible at http://localhost:3000.

2. **Visit the website and use the input form to generate personalized courses.**

## Running with Docker Compose

1. **Install Docker and Docker Compose if you haven't already.**

2. **Build and run the Docker containers:**

   ```bash
   docker-compose up --build
   ```
   
   This command will build the Docker images and start the containers.


### **Access the application:**

Once the containers are running, you can access the application at [http://localhost:3000](http://localhost:3000).
   
## Deployment

- Deploy the application to DigitalOcean or your preferred hosting provider.
  
- Set the production environment variables, including database connection and OpenAI API key.
  
- Configure GitHub Actions for automated CI/CD by updating the workflow file in the `.github/workflows` directory.

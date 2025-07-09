# Patient Portal UI

A single-page React application for patients to request appointments and view pending requests. Styled with Tailwind CSS, backed by a mock API (JSON Server), and deployed via Netlify with an automated GitHub Actions CI/CD pipeline.

## Live Demo

🔗 [View the live Patient Portal](https://patient-portalsite.netlify.app/)

## Features

* Responsive React UI built with Vite and Tailwind CSS
* Controlled form for submitting appointment requests
* Request cards displaying submitted appointments
* Mock REST API using JSON Server for data persistence
* Automated deployments via GitHub Actions to Netlify on every push to `main`

## Prerequisites

* Node.js (v16 or higher)
* npm (v8 or higher)
* Git

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nikhil-AI-Dev/patient-portal
   cd patient-portal/patient-portal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `db.json`**

   ```json
   {
     "requests": []
   }
   ```

4. **Run JSON Server**

   ```bash
   npx json-server db.json --port 5000
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open the app**
   Navigate to `http://localhost:5173` to view the Patient Portal.

## Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## CI/CD Pipeline

On every push to the `main` branch, GitHub Actions will:

1. Install dependencies (`npm ci`)
2. Build the project (`npm run build`)
3. Deploy to Netlify using Netlify CLI with secrets:

   * `NETLIFY_AUTH_TOKEN`
   * `NETLIFY_SITE_ID`

Make sure these secrets are configured in your GitHub repository settings.

## License

MIT © Nikhil Ganji

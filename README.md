# WhatsApp AI Daily News Agent

A simple landing page for the WhatsApp AI Daily News Agent, which provides news updates via WhatsApp using n8n, Twilio, and NewsAPI.

## Features

- Overview of the system architecture
- Step-by-step setup instructions
- List of supported commands
- Responsive design

## Prerequisites

- Node.js 14+ and npm
- A Twilio account with WhatsApp Sandbox access
- n8n Cloud account (for workflow automation)

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel Deployment

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account
3. Click "New Project" and select your repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

### n8n Cloud Setup

1. Sign up for [n8n Cloud](https://n8n.io/cloud/)
2. Create a new workflow with Twilio and NewsAPI nodes
3. Set up the WhatsApp webhook in Twilio to point to your n8n webhook URL

## Usage

1. Add the Twilio sandbox number to your WhatsApp contacts
2. Send `join <code>` to the sandbox number
3. Try these commands:
   - `digest on` - Enable daily news digest
   - `digest off` - Disable daily news digest
   - `sport news` - Get latest sports news
   - `tech news` - Get latest tech news
   - `help` - Show all available commands

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Vercel (Hosting)
- n8n Cloud (Automation)
- Twilio (WhatsApp Integration)
- NewsAPI (News Content)

## License

MIT

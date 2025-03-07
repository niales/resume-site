# Resume Site

This is an interactive resume website built with React and Tailwind CSS, featuring a sleek dark theme.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/resume-site.git
   cd resume-site
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To create a production build, run:
```
npm run build
```

The build files will be created in the `build` directory.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Manual Deployment

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/resume-site"
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

### Automated Deployment with GitHub Actions

This repository includes a GitHub Actions workflow that automatically deploys the site to GitHub Pages when you push to the main branch.

To set it up:

1. Make sure your repository is public or you have GitHub Pro (for private repositories)
2. Go to your repository settings → Pages
3. Set the source to "GitHub Actions"
4. Push to the main branch to trigger the deployment

## Customization

To customize this resume for your own use:

1. Edit the `resumeData` object in `src/App.js` with your personal information
2. Modify the color scheme in `tailwind.config.js` if desired
3. Add your own favicon and logo images in the `public` directory

## Technologies Used

- React
- Tailwind CSS
- Create React App
- GitHub Pages 
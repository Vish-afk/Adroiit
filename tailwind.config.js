// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Add your file extensions here
  ],
  theme: {
    extend: {
      fontFamily: {
        telegraf: ['Telegraf', 'sans-serif'],  // Use for headings, bold statements, or titles
        inter: ['Inter', 'Arial', 'sans-serif'],  // Use for body text, paragraphs, or long reads
        poppins: ['Poppins', 'sans-serif'],  // Use for subheadings, emphasis, or button text
        montserrat: ['Montserrat', 'sans-serif'],  // Use for section titles or callouts
      },
      colors: {
        deepPurple: '#43169c',  // Use for main branding color, call-to-action buttons, or highlights
        lightPurple: '#8a4ef7',  // Use for secondary buttons, hover effects, or accents
        softOffWhite: '#f7f7f7',  // Use for background color or light sections
        neonPink: '#f17eb6',  // Use for emphasis, links, or special highlights
        softBlue: '#4ab8ff',  // Use for links, buttons, or icons
        darkCharcoal: '#2e2e2e',  // Use for text, footer background, or dark elements
        brightYellow: '#ffdf23',  // Use for highlights, alert messages, or attention-grabbing accents
      },
    },
  },
  plugins: [],
};

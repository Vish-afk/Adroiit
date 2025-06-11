// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Add your file extensions here
  ],
  theme: {
    extend: {
      // You can define other extensions here, like custom fonts
      // If you're using 'Telegraf' or 'Inter' from local files or CDN,
      // you might want to define them here for better Tailwind integration.
      // For example:
      // fontFamily: {
      //   telegraf: ['Telegraf', 'sans-serif'],
      //   inter: ['Inter', 'sans-serif'],
      // },
      boxShadow: {
        // Define your custom shadows with their full CSS values
        'custom-hero-glow': '0 0 50px rgba(74, 139, 199, 0.25), 0 0 100px rgba(0, 229, 255, 0.2), inset 0 0 30px rgba(0, 229, 255, 0.1)',
        'custom-panel-glow': '0 15px 45px rgba(18, 28, 43, 0.4), inset 0 0 25px rgba(0, 229, 255, 0.05)',
        'custom-card-glow': '0 5px 20px rgba(74, 139, 199, 0.2), inset 0 0 10px rgba(74, 139, 199, 0.1)',
        'active-card-glow': '0 15px 50px rgba(18, 28, 43, 0.4), 0 0 30px rgba(0, 229, 255, 0.5)',
        'hover-social-glow': '0 0 15px rgba(255, 140, 0, 0.5)',
        'footer-separator-glow': '0 -5px 15px rgba(0, 229, 255, 0.05)',
        'navbar-link-hover': '0 8px 25px rgba(74, 139, 199, 0.2), 0 0 15px rgba(0, 229, 255, 0.3)',
        'btn-hover': '0 8px 30px rgba(18, 28, 43, 0.4), 0 0 20px #00E5FF', // Directly using hex for simplicity here
      },
    },
  },
  plugins: [],
};
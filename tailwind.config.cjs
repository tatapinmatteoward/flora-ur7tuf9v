/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b35',
        accent: '#1e90ff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

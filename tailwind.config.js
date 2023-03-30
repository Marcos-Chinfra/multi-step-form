/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '16': '16px',
      },
      spacing:{
        '228': '57rem',
        '128': '33rem',
        '125': '31.25rem',
        '105': '26.25rem'
      },
      colors:{
        'Marine-blue': 'hsl(213, 80%, 30%)',
        'Purplish-blue': 'hsl(243, 100%, 62%)',
        'Pastel-blue': 'hsl(228, 100%, 84%)',
        'Light-blue': 'hsl(206, 94%, 87%)' ,
        'Strawberry-red': 'hsl(354, 84%, 57%)',
        'Cool-gray':'hsl(231, 11%, 63%)' ,
        'Ligth-gray': 'hsl(229, 24%, 87%)',
        'Magnolia':'hsl(217, 100%, 97%)' ,
        'Alabaster': 'hsl(231, 100%, 99%)',
        'White': 'hsl(0, 0%, 100%)' 
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        'mobile': "url('/public/assets/images/bg-sidebar-mobile.svg')",
        'desktop': "url('/public/assets/images/bg-sidebar-desktop.svg')",
        'arcade': "url('/public/assets/images/icon-arcade.svg')",
        'advanced': "url('/public/assets/images/icon-advanced.svg')",
        'pro': "url('/public/assets/images/icon-pro.svg')",
        "thankU": "url('/public/assets/images/icon-thank-you.svg')",
      }
    },
  },
  plugins: [],
}

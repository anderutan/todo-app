/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'bg-1': 'hsl(0, 0%, 98%)',
        'bg-2': 'hsl(236, 33%, 92%)',
        'task-done': 'hsl(233, 11%, 84%)',
        'light-gray': 'hsl(236, 9%, 61%)',
        inactive: 'hsl(235, 19%, 35%)',
        active: 'hsl(220, 98%, 61%)',
        'bg-1-d': 'hsl(235, 24%, 19%)',
        'bg-2-d': 'hsl(235, 21%, 11%)',
        'b-line': 'hsl(236, 33%, 92%)',
        'b-line-b': 'hsl(237, 14%, 26%)',
        gradient: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.<script src="./node_modules/preline/dist/preline.js" />{js,ts,jsx,tsx}',
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26,93%,50%)',
        hoverPrimary: 'hsl(26,90%,42%)',
        white: 'hsl(0,0%,100%)',
        text: 'hsl(248,1%,45%)',
        deemWhite: 'hsl(0,05,93%)',
        greyDg: 'hsl(0,0%,96)',
        greyText: 'rgb(190,190,190)',
        input: 'hsl(330,12%,97%)',
      },
    },
    plugins: [require('preline/plugin')],
  },
}

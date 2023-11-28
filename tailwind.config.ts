import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        softred: 'hsl(10 79% 65%)',
        softerred: 'hsl(10 100% 76%)',
        cyan: 'hsl(186 34% 60%)',
        softercyan: 'hsl(186 49% 80%)',
        darkbrown: 'hsl(25 47% 15%)',
        mediumbrown: 'hsl(28 10% 53%)',
        cream: 'hsl(27 66% 92%)',
        verypaleorange: 'hsl(33 100% 98%)'
      }
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        primaryColor: "black",
        secondaryColor: "#fff",
        tetiaryColor: "#034732",
        black1: "#00000075",
        borderColor: "#ffffff5e",
        primaryGrey: "rgb(255 255 255 / 12%)"
      }
    },
  },
  plugins: [],
}
export default config

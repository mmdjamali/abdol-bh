import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'emil': 'cubic-bezier(0.32, 0.72, 0, 1)'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("daisyui")
  ],
  /** @satisfies {import('daisyui').Config} */
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        "primary": "#009DE1",
        "secondary": "#37A833"
      }
    }],

  },
}
export default config

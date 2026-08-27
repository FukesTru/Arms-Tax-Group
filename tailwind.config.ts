import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Near-neutral dark scale. The original #10060B carried a heavy
         * maroon tint (H330, S45%) which sat only 17 degrees from the accent
         * hue — red on a red ground reads as mud, which is what made the page
         * look dull. Desaturating the ground lets the accent read as a colour
         * instead of blending into it.
         */
        ink: {
          DEFAULT: '#0D0B0D',
          900: '#0D0B0D',
          800: '#171518',
          700: '#262329',
          600: '#3D3944',
        },
        /**
         * Taken from the client's logo (the crimson in the roof and bars).
         *
         * The intake form specified #FF6536 orange, but that was supplied
         * before the logo and clashes with it — the logo's crimson, the orange,
         * and the maroon-tinted #10060B read as three competing reds. The logo
         * is the fixed point, so the palette follows it.
         */
        /**
         * Two accent tones doing two different jobs:
         *
         *   DEFAULT #D8244D — filled buttons and accent text on light
         *     surfaces. White on it measures 4.91:1, so it clears WCAG AA.
         *   bright  #F03A5F — accent text and highlights on DARK surfaces
         *     only, where it measures 5.11:1. Never put white text on it
         *     (3.84:1) and never use it as small text on white.
         *
         * Both are brighter than the logo's #A81E3C, which at L39% left the
         * page with no luminous value anywhere.
         */
        accent: {
          DEFAULT: '#D8244D',
          bright: '#F03A5F',
          600: '#BC1B40',
          700: '#9E1636',
          100: '#FBDDE4',
          // Lightened so the eyebrow on this tint clears AA (4.66:1);
          // at #FEF2F5 it measured 4.49:1, a hair under.
          50: '#FFF7F9',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 6, 11, 0.04), 0 8px 24px rgba(16, 6, 11, 0.06)',
        'card-hover': '0 2px 4px rgba(16, 6, 11, 0.06), 0 16px 40px rgba(16, 6, 11, 0.12)',
      },
      backgroundImage: {
        'hero-grain':
          'radial-gradient(ellipse 80% 60% at 15% 0%, rgba(216,36,77,0.26), transparent 62%), radial-gradient(ellipse 60% 50% at 95% 20%, rgba(240,58,95,0.14), transparent 62%)',
      },
    },
  },
  plugins: [],
};

export default config;

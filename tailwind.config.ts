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
        ink: {
          DEFAULT: '#10060B',
          900: '#10060B',
          800: '#1A0E13',
          700: '#26161C',
          600: '#3A2830',
        },
        /**
         * Taken from the client's logo (the crimson in the roof and bars).
         *
         * The intake form specified #FF6536 orange, but that was supplied
         * before the logo and clashes with it — the logo's crimson, the orange,
         * and the maroon-tinted #10060B read as three competing reds. The logo
         * is the fixed point, so the palette follows it.
         */
        accent: {
          DEFAULT: '#A81E3C',
          600: '#8E1832',
          700: '#741428',
          100: '#F6DDE3',
          50: '#FCF2F4',
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
          'radial-gradient(ellipse 80% 60% at 15% 0%, rgba(168,30,60,0.16), transparent 60%), radial-gradient(ellipse 60% 50% at 95% 20%, rgba(168,30,60,0.08), transparent 60%)',
      },
    },
  },
  plugins: [],
};

export default config;

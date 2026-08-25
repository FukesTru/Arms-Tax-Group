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
        accent: {
          DEFAULT: '#FF6536',
          600: '#F04E1C',
          700: '#CC3F14',
          100: '#FFE7DF',
          50: '#FFF3EE',
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
          'radial-gradient(ellipse 80% 60% at 15% 0%, rgba(255,101,54,0.16), transparent 60%), radial-gradient(ellipse 60% 50% at 95% 20%, rgba(255,101,54,0.08), transparent 60%)',
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#FFECD1',
        secondary: '#A7A3C8',
        background: '#0F244E',
        'background-alt': '#E0EDE0',
        success: '#A2D4AB'
      },
      animation: {
        'fade': 'fade-in 2s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        }
      }
    }
  }
}

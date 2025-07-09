// postcss.config.js
import tailwindPostcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    // call the plugin functions
    tailwindPostcss(),
    autoprefixer(),
  ],
}

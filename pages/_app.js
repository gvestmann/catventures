// Importing CSS
import '../css/tailwind.css'

// The app takes in each components and the pageCrops (used in index.js)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// And it's exported
export default MyApp
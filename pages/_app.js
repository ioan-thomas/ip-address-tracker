import {GlobalStyle} from '../components/styles/GlobalStyle.styled'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

// import App from "next/app";
import { AppProps /* , AppContext */ } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/globals'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer, Slide } from 'react-toastify'

function MyApp ( { Component, pageProps }: AppProps ) {
  return (
    <>
      <Head>
        <title>My Portifólio</title>
        <meta name="description" content="Meu portifólio pessoal" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer
        className="impct-toast"
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
        transition={Slide}
      />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp

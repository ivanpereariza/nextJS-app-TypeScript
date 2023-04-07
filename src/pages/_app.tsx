import { NextUIProvider } from "@nextui-org/react"
import Layout from "components/Layout/Layout"
import { AppProps } from "next/app"


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp

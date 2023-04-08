import { NextUIProvider, useSSR } from "@nextui-org/react"
import Layout from "components/Layout/Layout"
import { AppProps, NextWebVitalsMetric } from "next/app"


export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

const MyApp = ({ Component, pageProps }: AppProps) => {

  const { isBrowser } = useSSR()

  return (
    <>
      {
        isBrowser &&
        <Layout>
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </Layout>

      }
    </>
  )
}

export default MyApp

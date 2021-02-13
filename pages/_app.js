import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'
import { AuthProvider } from 'stores'
import { Layout } from '@/components/index'

import '../styles/index.scss'

NProgress.configure({ showSpinner: false, parent: 'body' })
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  )
}

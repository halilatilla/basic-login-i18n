import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from '../i18n'

import SEO from '../next-seo.config'
import { LangProvider } from '@/stores/index'
import { Layout } from '@/components/index'

import '../styles/index.scss'

NProgress.configure({ showSpinner: false, parent: 'body' })
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <LangProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LangProvider>
    </>
  )
}

export default appWithTranslation(MyApp)

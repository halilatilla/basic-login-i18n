import React from 'react'
import { NextSeo } from 'next-seo'

import SeoConfig from '../next-seo.config'
import { ContactForm } from '@/components/index'

export default function contact() {
  const SEO = {
    title: `${SeoConfig.title} | Contact`,
  }

  return (
    <>
      <NextSeo {...SEO} />
      <section className="contact">
        <div className="contact__bg" />
        <div className="contact__box container">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

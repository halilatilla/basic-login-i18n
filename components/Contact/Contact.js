import React from 'react'

import { ContactForm } from '@/components/index'

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__bg" />
      <div className="contact__box container">
        <ContactForm />
      </div>
    </section>
  )
}

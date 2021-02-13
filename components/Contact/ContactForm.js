import React from 'react'

import { Input, Textarea, Button } from '@/components/index'

export default function ContactForm() {
  return (
    <div className="contact-form">
      <h3>Mesaj göndermek için:</h3>
      <form className="contact-form__form">
        <Input label="isim soyisim" name="name" type="text" />
        <Input label="e-mail" name="email" type="email" />
        <Input label="telefon" name="phone" type="phone" />
        <Textarea label="mesaj" name="message" placeholder="Mesaj yazınız" />
        <Button isPrimary type="submit">
          Gönder
        </Button>
      </form>
    </div>
  )
}

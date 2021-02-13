import React from 'react'

import { withTranslation } from '../../i18n'
import { Input, Textarea, Button } from '@/components/index'

const ContactForm = ({ t }) => {
  return (
    <div className="contact-form">
      <h3>{t('formTitle')} :</h3>
      <form className="contact-form__form">
        <Input label={t('name')} name="name" type="text" />
        <Input label={t('email')} name="email" type="email" />
        <Input label={t('phone')} name="phone" type="phone" />
        <Textarea
          label={t('message')}
          name="message"
          placeholder="Mesaj yazınız"
        />
        <Button isPrimary type="submit">
          {t('formButton')}
        </Button>
      </form>
    </div>
  )
}

ContactForm.getInitialProps = async () => ({
  namespacesRequired: ['contact'],
})

export default withTranslation('contact')(ContactForm)

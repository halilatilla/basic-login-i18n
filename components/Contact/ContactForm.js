import React from 'react'

import { withTranslation } from '../../i18n'
import { Input, Textarea, Button } from '@/components/index'

const ContactForm = ({ t }) => {
  return (
    <div className="contact-form">
      <h3 className="contact-form__title">{t('contact:formTitle')} :</h3>
      <form className="contact-form__form">
        <Input label={t('form:name')} name="name" type="text" />
        <Input label={t('form:email')} name="email" type="email" />
        <Input label={t('form:phone')} name="phone" type="phone" />
        <Textarea
          label={t('form:message')}
          name="message"
          placeholder="Mesaj yazınız"
        />
        <Button isPrimary type="submit">
          {t('form:submit')}
        </Button>
      </form>
    </div>
  )
}

ContactForm.getInitialProps = async () => ({
  namespacesRequired: ['contact,form'],
})

export default withTranslation('contact')(ContactForm)

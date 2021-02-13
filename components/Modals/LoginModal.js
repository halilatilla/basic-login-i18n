import React from 'react'

import { withTranslation } from '../../i18n'
import { Button, LanguageSwitcher, Modal, Input } from '@/components/index'

const LoginModal = ({ t, isOpen, closeModal }) => {
  return (
    <Modal className="login-modal" isOpen={isOpen} closeModal={closeModal}>
      <form className="login-modal__form">
        <Input label={t('contact:name')} name="name" type="text" />
        <Input label={t('contact:email')} name="email" type="email" />
        <Input label={t('contact:password')} name="password" type="password" />
        <LanguageSwitcher />
        <div className="login-modal__buttons">
          <Button isOutline isPrimary>
            {t('contact:cancel')}
          </Button>

          <Button type="submit" isPrimary>
            {t('contact:formButton')}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

LoginModal.getInitialProps = async () => ({
  namespacesRequired: ['contact'],
})

export default withTranslation('contact')(LoginModal)

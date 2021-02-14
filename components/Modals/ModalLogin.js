import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useUserContext } from '@/stores/index'
import { withTranslation } from '../../i18n'
import { Button, LanguageSwitcher, Modal, Input } from '@/components/index'

const LoginModal = ({ t, isOpen, closeModal }) => {
  const { setUser } = useUserContext()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (value, { resetForm }) => {
      setUser({ name: value.name, email: value.email })
      resetForm()
      closeModal()
    },
  })

  return (
    <Modal className="modal-login" isOpen={isOpen} closeModal={closeModal}>
      <form onSubmit={formik.handleSubmit} className="modal-login__form">
        <Input
          onChange={formik.handleChange}
          value={formik.values.name}
          label={t('name')}
          name="name"
          type="text"
          isRequiredError={formik.errors.name && formik.touched.name}
          isRequiredSign
        />
        <Input
          onChange={formik.handleChange}
          value={formik.values.email}
          label={t('email')}
          name="email"
          type="email"
          isRequiredError={formik.errors.email && formik.touched.email}
          isRequiredSign
        />
        <Input
          onChange={formik.handleChange}
          value={formik.values.password}
          label={t('password')}
          name="password"
          type="password"
          isRequiredError={formik.errors.password && formik.touched.password}
          isRequiredSign
        />
        <LanguageSwitcher />
        <div className="modal-login__buttons">
          <Button isOutline isPrimary onClick={closeModal}>
            {t('cancel')}
          </Button>

          <Button type="submit" isPrimary>
            {t('submit')}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

LoginModal.getInitialProps = async () => ({
  namespacesRequired: ['form'],
})

export default withTranslation('form')(LoginModal)

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { withTranslation } from '../../i18n'
import { useUserContext } from '@/stores/index'
import { Input, Textarea, Button, Select } from '@/components/index'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ContactForm = ({ t }) => {
  const { user } = useUserContext()
  const countryList = [
    { value: 'TR', label: t('form:TR') },
    { value: 'US', label: t('form:US') },
    { value: 'GB', label: t('form:GB') },
    { value: 'DE', label: t('form:DE') },
    { value: 'SE', label: t('form:SE') },
    { value: 'KE', label: t('form:KE') },
    { value: 'BR', label: t('form:BR') },
    { value: 'ZW', label: t('form:ZW') },
  ]

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user.name,
      email: user.email,
      phone: '',
      selectCountry: { value: null, label: null },
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string().matches(phoneRegExp).required(),
      selectCountry: Yup.string(),
      message: Yup.string(),
    }),
    onSubmit: (value, { resetForm }) => {
      alert(
        JSON.stringify(
          {
            name: value.name,
            email: value.email,
            phonenumber: value.phone,
            country_code: value.selectCountry.value,
            text: value.message,
          },
          null,
          4
        )
      )
      console.log({
        name: value.name,
        email: value.email,
        phonenumber: value.phone,
        country_code: value.selectCountry.value,
        text: value.message,
      })
      resetForm()
    },
  })

  const onChangeHandler = option => {
    if (!option) {
      formik.setFieldValue('selectCountry', '')
      return
    }
    formik.setFieldValue('selectCountry', option)
  }

  return (
    <div className="contact-form">
      <h3 className="contact-form__title">{t('contact:formTitle')} :</h3>
      <form onSubmit={formik.handleSubmit} className="contact-form__form">
        <Input
          label={t('form:name')}
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          isRequiredError={formik.errors.name && formik.touched.name}
          isRequiredSign
        />
        <Input
          label={t('form:email')}
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          requiredText={t('form:invalidEmail')}
          isRequiredError={formik.errors.email && formik.touched.email}
          isRequiredSign
        />
        <Input
          label={t('form:phone')}
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phone}
          requiredText={t('form:invalidPhone')}
          isRequiredError={formik.errors.phone && formik.touched.phone}
          isRequiredSign
        />
        <Select
          placeholder={t('form:selectPlaceholder')}
          name="selectCountry"
          label={t('form:selectCountry')}
          options={countryList}
          onChange={onChangeHandler}
          value={
            formik.values.selectCountry.label
              ? formik.values.selectCountry
              : null
          }
        />
        <Textarea
          label={t('form:message')}
          name="message"
          placeholder={t('form:messagePlaceholder')}
          onChange={formik.handleChange}
          value={formik.values.message}
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

import React from 'react';
import { useIntl } from 'react-intl'
import { InputField, InputTextareaField } from '../../../components/forms';
import {validations} from '../../../utils';
import {reduxForm, Field, Form} from 'redux-form';

const maxLength200 = validations.maxLength(200)
const maxLength1000 = validations.maxLength(1000)

const ContactForm = (props) => {

  const { handleSubmit, submitting } = props
  const intl = useIntl()

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row">
        <Field
          name="fullname"
          type="text"
          component={InputField}
          label={intl.formatMessage({ id: "FIELD.FULLNAME"})}
          placeholder={intl.formatMessage({ id :"FIELD.FULLNAME"})}
          validate={[validations.required, maxLength200]}
        />

        <Field
          name="senderEmail"
          type="text"
          component={InputField}
          label={intl.formatMessage({id:"FIELD.EMAIL"})}
          placeholder={intl.formatMessage({id: "FIELD.EMAIL"})}
          validate={[maxLength200, validations.required, validations.email]}
        />

        <Field
          name="subject"
          type="text"
          component={InputField}
          label={intl.formatMessage({id: "FIELD.SUBJECT"})}
          placeholder={intl.formatMessage({id: "FIELD.SUBJECT"})}
          validate={[maxLength200, validations.required]}
        />

        <Field
          name="body"
          type="text"
          cols="30"
          rows="5"
          component={InputTextareaField}
          label={intl.formatMessage({id: "FIELD.BODY"})}
          placeholder={intl.formatMessage({id:"FIELD.BODY"})}
          validate={[maxLength1000, validations.required]}
        />

        <div className="col-lg-12 col-md-12">
          <button type="submit" disabled={submitting} className="default-btn">{ intl.formatMessage({ id: "CONTACT_US.FORM.SUBMIT"}) } </button>
        </div>
      </div>
    </Form>
  );
}

export default reduxForm({
  form: 'contact'  // a unique identifier for this form
})(ContactForm)


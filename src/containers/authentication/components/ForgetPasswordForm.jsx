import React from 'react';
import { useIntl } from 'react-intl'
import { InputField } from '../../../components/forms';
import {validations} from '../../../utils';
import {reduxForm, Field, Form} from 'redux-form';

const maxLength200 = validations.maxLength(200)

const ForgetPasswordForm = (props) => {

  const { handleSubmit, submitting } = props
  const intl = useIntl()

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row">

        <Field
          name="email"
          type="text"
          component={InputField}
          label={intl.formatMessage({id:"FIELD.EMAIL"})}
          placeholder={intl.formatMessage({id: "FIELD.EMAIL"})}
          validate={[maxLength200, validations.required, validations.email]}
        />

        <div className="col-lg-12 col-md-12">
          <button type="submit" disabled={submitting} className="default-btn">{ intl.formatMessage({ id: "FORGET_PASSWORD.FORM.SUBMIT"}) } </button>
        </div>
      </div>
    </Form>
  );
}

export default reduxForm({
  form: 'forget-password'  // a unique identifier for this form
})(ForgetPasswordForm)


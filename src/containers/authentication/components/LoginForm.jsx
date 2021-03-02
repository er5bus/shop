import React from 'react';
import { useIntl } from 'react-intl'
import { InputField } from '../../../components/forms';
import {validations} from '../../../utils';
import {reduxForm, Field, Form} from 'redux-form';

const maxLength200 = validations.maxLength(200)

const LoginForm = (props) => {

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

        <Field
          name="password"
          type="password"
          component={InputField}
          label={intl.formatMessage({id: "FIELD.PASSWORD"})}
          placeholder={intl.formatMessage({id: "FIELD.PASSWORD"})}
          validate={[maxLength200, validations.required]}
        />

        <div className="col-lg-12 col-md-12">
          <button type="submit" disabled={submitting} className="default-btn">{ intl.formatMessage({ id: "LOGIN.FORM.SUBMIT"}) } </button>
        </div>
      </div>
    </Form>
  );
}

export default reduxForm({
  form: 'login'  // a unique identifier for this form
})(LoginForm)


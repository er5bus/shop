import React from 'react';
import { useIntl } from 'react-intl'
import { InputField } from '../../../components/forms';
import {validations} from '../../../utils';
import {reduxForm, Field, Form} from 'redux-form';

const maxLength200 = validations.maxLength(200)
const maxLength10 = validations.maxLength(10)
const maxLength500 = validations.maxLength(500)

const minLength5 = validations.minLength(5)
const minLength8 = validations.minLength(8)
const minLength6 = validations.minLength(6)


const SignUpForm = (props) => {

  const { handleSubmit, submitting } = props
  const intl = useIntl()

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row">
        <Field
          name="user.lastName"
          type="text"
          component={InputField}
          label={intl.formatMessage({ id: "FIELD.LAST_NAME"})}
          placeholder={intl.formatMessage({ id :"FIELD.LAST_NAME"})}
          validate={[validations.required, maxLength200]}
        />

        <Field
          name="user.firstName"
          type="text"
          component={InputField}
          label={intl.formatMessage({ id: "FIELD.FIRST_NAME"})}
          placeholder={intl.formatMessage({ id :"FIELD.FIRST_NAME"})}
          validate={[validations.required, maxLength200]}
        />

        <Field
          name="user.email"
          type="text"
          component={InputField}
          label={intl.formatMessage({id:"FIELD.EMAIL"})}
          placeholder={intl.formatMessage({id: "FIELD.EMAIL"})}
          validate={[maxLength200, validations.required, minLength5, validations.email]}
        />

        <Field
          name="phone"
          type="number"
          component={InputField}
          label={intl.formatMessage({id:"FIELD.PHONE"})}
          placeholder={intl.formatMessage({id: "FIELD.PHONE"})}
          validate={[maxLength10, validations.required, minLength8, validations.phoneNumber]}
        />
        
        <Field
          name="address"
          type="text"
          component={InputField}
          label={intl.formatMessage({id:"FIELD.ADDRESS"})}
          placeholder={intl.formatMessage({id: "FIELD.ADDRESS"})}
          validate={[maxLength500, minLength6, validations.required]}
        />

        <Field
          name="user.password"
          type="password"
          component={InputField}
          label={intl.formatMessage({id: "FIELD.PASSWORD"})}
          placeholder={intl.formatMessage({id: "FIELD.PASSWORD"})}
          validate={[maxLength200, minLength5, validations.required]}
        />

        <div className="col-lg-12 col-md-12">
          <button type="submit" disabled={submitting} className="default-btn">{ intl.formatMessage({ id: "SIGNUP.FORM.SUBMIT"}) } </button>
        </div>
      </div>
    </Form>
  );
}

export default reduxForm({
  form: 'signup'  // a unique identifier for this form
})(SignUpForm)


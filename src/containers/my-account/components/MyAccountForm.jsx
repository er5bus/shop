import React from 'react';
import { useIntl } from 'react-intl'
import { InputField } from '../../../components/forms';
import {validations} from '../../../utils';
import {reduxForm, Field, Form} from 'redux-form';
import {connect} from 'react-redux';

const maxLength200 = validations.maxLength(200)
const maxLength10 = validations.maxLength(10)
const maxLength500 = validations.maxLength(500)

const minLength5 = validations.minLength(5)
const minLength8 = validations.minLength(8)
const minLength6 = validations.minLength(6)


let MyAccountForm = (props) => {

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
          type="text"
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
          name="currentPassword"
          type="password"
          component={InputField}
          label={intl.formatMessage({id:"FIELD.CURRENT_PASSWORD"})}
          placeholder={intl.formatMessage({id: "FIELD.CURRENT_PASSWORD"})}
          validate={[maxLength500, validations.required]}
        />

        <div className="col-lg-12 col-md-12">
          <button type="submit" disabled={submitting} className="default-btn">{ intl.formatMessage({ id: "MY_ACCOUNT.FORM.SUBMIT"}) } </button>
        </div>
      </div>
    </Form>
  );
}

MyAccountForm = reduxForm({
  form: 'my-account'  // a unique identifier for this form
})(MyAccountForm)


const mapStateToProps = (state) => {

  const { user, address, phone } = state.authentication.currentUser
  return ({ initialValues: { address, phone, user: { firstName: user.firstName, lastName: user.lastName, email: user.email } } })
}

export default connect(mapStateToProps, null)(MyAccountForm)

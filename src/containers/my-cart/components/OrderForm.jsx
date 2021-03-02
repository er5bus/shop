import React from 'react';
import { useIntl } from 'react-intl'
import { isEmpty } from 'lodash'

import { InputTextareaField, InputField } from '../../../components/forms';
import {validations} from '../../../utils';
import {reduxForm, Field, Form} from 'redux-form';
import {connect} from 'react-redux';

const maxLength10 = validations.maxLength(10)
const maxLength500 = validations.maxLength(500)

const maxLength200 = validations.maxLength(200)

const minLength6 = validations.minLength(6)
const minLength8 = validations.minLength(8)

let OrderForm = (props) => {

  const { handleSubmit, disabled } = props
  const intl = useIntl()

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row">

        <Field
          name="lastName"
          type="text"
          component={InputField}
          label={intl.formatMessage({ id: "FIELD.LAST_NAME"})}
          placeholder={intl.formatMessage({ id :"FIELD.LAST_NAME"})}
          validate={[validations.required, maxLength200]}
        />

        <Field
          name="firstName"
          type="text"
          component={InputField}
          label={intl.formatMessage({ id: "FIELD.FIRST_NAME"})}
          placeholder={intl.formatMessage({ id :"FIELD.FIRST_NAME"})}
          validate={[validations.required, maxLength200]}
        />

        <Field
          name="email"
          type="text"
          component={InputField}
          label={intl.formatMessage({id:"FIELD.EMAIL"})}
          placeholder={intl.formatMessage({id: "FIELD.EMAIL"})}
          validate={[maxLength200, validations.required, validations.email]}
        />

        <Field
          name="phone"
          type="text"
          disabled={disabled}
          component={InputField}
          label={intl.formatMessage({id:"FIELD.PHONE"})}
          placeholder={intl.formatMessage({id: "FIELD.PHONE"})}
          validate={[maxLength10, validations.required, minLength8, validations.phoneNumber]}
        />

        <Field
          name="address"
          type="text"
          disabled={disabled}
          component={InputTextareaField}
          label={intl.formatMessage({id:"FIELD.ADDRESS"})}
          placeholder={intl.formatMessage({id: "FIELD.ADDRESS"})}
          validate={[maxLength500, minLength6, validations.required]}
        />

        <div className="col">
          <div className="payment-box">
            <div className="payment-method">
              <p>
                <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                <label>{ intl.formatMessage({ id: "ORDER.DIRECT"}) }</label>
                { intl.formatMessage({ id: "ORDER.INFO"}) }
              </p>
            </div>

            <button type="submit" disabled={disabled} className={disabled ? 'default-btn disabled-btn' : 'default-btn'}>
              { intl.formatMessage({ id: "ORDER.FORM.SUBMIT"}) }
            </button>
          </div>
        </div>

      </div>
    </Form>
  );
}

OrderForm =  reduxForm({
  form: 'order'  // a unique identifier for this form
})(OrderForm)

const mapStateToProps = (state) => {
  const { currentUser } = state.authentication
  if (!isEmpty(currentUser) && state.cart.total > 0){
    return ({ initialValues: { phone: currentUser.phone, address: currentUser.address, ...currentUser.user }})
  }
  return {}
}

export default connect(mapStateToProps)(OrderForm)


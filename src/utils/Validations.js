import _ from "lodash"


export const required = value => !_.isEmpty(value) ? undefined : JSON.stringify({
  id: "VALIDATION.ERROR.MIXED.REQUIRED",
  defaultMessage: "this field is a required field",
})

export const maxLength = max => value =>
  value && value.length > max ? JSON.stringify({
    id: "VALIDATION.ERROR.STRING.MAX",
    defaultMessage: "this field must be at most {max} characters",
    values: { max }
  }) : undefined

export const minLength = min => value =>
  value && value.length < min ? JSON.stringify({
    id: "VALIDATION.ERROR.STRING.MIN",
    defaultMessage: "this field must be at least {min} characters",
    values: { min }
  }) : undefined

export const number = value =>
  value && isNaN(Number(value)) ? JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.INTEGER",
    defaultMessage: "this field must be an integer",
  }) : undefined

export const minValue = min => value =>
  value && value < min ? JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.MIN",
    defaultMessage: "this field must be greater than or equal to {min}",
    values: { min }
  }) : undefined

export const maxValue = max => value =>
  value && value > max ? JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.MAX",
    defaultMessage: "this field must be less than or equal to {max}",
    values: { max }
  }) : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? JSON.stringify({
      id: "VALIDATION.ERROR.STRING.ONEOF",
      defaultMessage: "this field must be a valid email",
    })
    : undefined

export const phoneNumber = value =>
  value && !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g.test(value)
    ? JSON.stringify({
      id: "VALIDATION.ERROR.NUMBER.PHONE",
      defaultMessage: "this field must be a valid number",
    })
    : undefined

import { lazy } from 'react'

const Login = lazy(() =>  import('./../../../containers/authentication/Login'))
const SignUp = lazy(() =>  import('./../../../containers/authentication/SignUp'))
const ForgetPassword = lazy(() =>  import('./../../../containers/authentication/ForgetPassword'))


export const loginRoute = {
  path: '/login',
  component: Login
}

export const forgetPasswordRoute = {
  path: '/forget-password',
  component: ForgetPassword
}

export const signupRoute = {
  path: '/signup',
  component: SignUp
}


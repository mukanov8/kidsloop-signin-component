import React, { useState } from 'react'
import ModeToggle from '../components/ModeToggle'
import LocaleSelect from '../components/LocaleSelect'
import useTranslation from '../hooks/useTranslation'
import KidsloopLogo from '../assets/kidsloop_min_logo.svg'
import classnames from 'classnames'

const Signin = () => {
  const { translate } = useTranslation()

  const [formData, setFormData] = useState({
    user: {
      login: '',
      password: '',
      loginError: '',
      // passwordError: '',
    },
  })

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    })
  }

  const validateInput = () => {
    const phoneRegex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/

    //ref: http://stackoverflow.com/questions/7126345/regular-expression-to-require-10-digits-without-considering-spaces
    const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const login = formData.user.login

    if (login.match(phoneRegex) || login.match(mailRegex)) {
      setFormData({
        user: {
          ...formData.user,
          loginError: '',
        },
      })
    } else {
      setFormData({
        user: {
          ...formData.user,
          loginError: translate('invalid_login'),
        },
      })
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validateInput()
    console.log(formData.user)
  }

  return (
    <>
      <div className="h-106 w-100 flex items-center bg-white dark:bg-gray-800 rounded-large border-0 justify-center py-12 px-8 md:px-6 md:shadow-normal">
        <div className="max-w-md w-full h-full -m-4">
          <div className="p-4 text-left">
            <img
              className="h-12.5 w-auto"
              src={KidsloopLogo}
              alt="KidsloopLogo"
            />
          </div>
          <h4 className="p-4 text-left text-3xl font-semibold  text-darkgray dark:text-white">
            {translate('signin')}
          </h4>

          <form
            className="space-y-4 p-4"
            // action="#"
            // method="POST"
            onSubmit={handleFormSubmit}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-3">
                <label htmlFor="email-or-phone" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-or-phone"
                  name="login"
                  type="text"
                  autoComplete="email"
                  maxLength={200}
                  aria-invalid={Boolean(formData.user.loginError)}
                  aria-describedby="email-or-phone-helper-text"
                  required
                  className={classnames(
                    'rounded-large w-full px-3 py-3 border-1 border-gray-400 placeholder-gray-500 text-darkgray focus:outline-none focus:ring-primaryblue focus:border-primaryblue focus:z-10 text-sm md:text-lg font-medium dark:bg-gray-700 dark:border-transparent dark:placeholder-gray-400 dark:text-white',
                    { 'border-red': formData.user.loginError }
                  )}
                  placeholder={`${translate('email_or_phone')} *`}
                  value={formData.user.login}
                  onChange={handleFormDataChange}
                />
                {formData.user.loginError && (
                  <span
                    id="email-or-phone-helper-text"
                    className="font-medium text-red text-sm mt-1 ml-1"
                  >
                    {formData.user.loginError}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  maxLength={200}
                  aria-invalid={!Boolean(formData.user.password)}
                  required
                  className="rounded-large w-full px-3 py-3 border-1 border-gray-400 placeholder-gray-500 text-darkgray focus:outline-none focus:ring-primaryblue focus:border-primaryblue focus:z-10 text-sm md:text-lg font-medium dark:bg-gray-700 dark:border-transparent dark:placeholder-gray-400 dark:text-white"
                  placeholder={`${translate('password')} *`}
                  value={formData.user.password}
                  onChange={handleFormDataChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#passwort-reset"
                className="text-sm font-semibold text-primaryblue hover:underline dark:text-lightblue"
              >
                {translate('forgot_password')}
              </a>
              <button
                type="submit"
                className="py-2 px-7 rounded-large border-0 text-sm font-semibold text-white bg-primaryblue hover:bg-navyblue transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl dark:bg-lightblue dark:hover:bg-primaryblue"
              >
                {translate('signin')}
              </button>
            </div>
            <div className="pt-6">
              <a
                href="#new-account"
                className="text-sm font-semibold text-primaryblue hover:underline dark:text-lightblue"
              >
                {translate('create_account')}
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center md:justify-between items-center py-3 px-8 md:px-0 w-100 flex-wrap">
        <div className="flex">
          <ModeToggle />
          <LocaleSelect />
        </div>
        <div className="space-x-12 mt-4 md:mt-0 md:space-x-6">
          <a
            href="#help"
            className="text-sm font-semibold text-darkgray hover:underline dark:text-white"
          >
            {translate('help')}
          </a>
          <a
            href="#privacy"
            className="text-sm font-semibold text-darkgray hover:underline dark:text-white"
          >
            {translate('privacy')}
          </a>
          <a
            href="#terms"
            className="text-sm font-semibold text-darkgray hover:underline dark:text-white"
          >
            {translate('terms')}
          </a>
        </div>
      </div>
    </>
  )
}

export default Signin

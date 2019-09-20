import React, { Component } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import LoginWrapper from '../../../components/LoginWrapper/LoginWrapper';
import classes from '../styles/Style.module.css';
import Error from '../resources/Error';
import { t } from '../../../i18n';
import ResetPassword from './ResetPassword';

const validationSchema = Yup.object().shape({
  index: Yup.string().required(),
  phone: Yup.string()
    .min(8, t('Auth:phoneError'))
    .max(8, t('Auth:phoneError'))
    .required(t('Auth:phoneNumberRequired')),
  password: Yup.string()
    .min(8, t('Auth:passwordMinCharacters'))
    .max(12, t('Auth:passwordMaxCharacters'))
    .required(t('Auth:passwordRequired')),
});

const options = [
  { value: '', label: '+XYZ' },
  { value: '+223', label: '+223' },
  { value: '+225', label: '+225' },
  { value: '+224', label: '+224' },
  { value: '+227', label: '+227' },
];
const inputClasses = `form-control ${classes.Invalid}`;
const initialVal = {
  device: '1111',
};


class Feature extends Component {
  state = { storedUser: false, showResetPassword: false };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('storedUser'));
    if (user !== null) {
      initialVal.index = user.index;
      initialVal.phone = user.phone;
      initialVal.remember = user.remember;
      this.setState({ storedUser: true });
    }
  }

  _showResetPasswordModal = () => {
    this.setState({ showResetPassword: true });
  };

  _hideResetPasswordModal = () => {
    this.setState({ showResetPassword: false });
  };

  render() {
    return (
      <LoginWrapper text={t('Auth:credentials')}>
        <Formik
          initialValues={initialVal}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const user = {
              index: values.index,
              phone: values.phone,
              remember: values.remember,
            };
            if (values.remember) {
              localStorage.setItem('storedUser', JSON.stringify(user));
            } else {
              localStorage.removeItem('storedUser');
            }
            setSubmitting(true);
            this.props.onAuth(
              values.index + values.phone,
              values.password,
              values.device,
            );
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const phoneClassName =
              errors.phone || errors.index ? inputClasses : 'form-control';
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-tel-txt">
                  <div className="form-group select-telephone">
                    <select
                      name="index"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.index}
                    >
                      {options.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      className={phoneClassName}
                      name="phone"
                      type="text"
                      placeholder={t('Auth:phone')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    {errors.index ? (
                      <Error
                        touched={touched.phone}
                        message={t('Auth:indexAndPhoneRequired')}
                      />
                    ) : (
                      <Error touched={touched.phone} message={errors.phone} />
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className={errors.password ? inputClasses : 'form-control'}
                    name="password"
                    type="password"
                    placeholder={t('Auth:password')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <Error touched={touched.password} message={errors.password} />
                </div>
                <div className="form-group row login-tools">
                  <div className="col-md-6 login-remember bcp-checkbox">
                    <input
                      name="remember"
                      id="remember"
                      type="checkbox"
                      onChange={handleChange}
                      value={values.checked}
                      checked={values.remember}
                    />
                    <label htmlFor="remember">{t('Auth:rememberMe')}</label>
                  </div>
                  <div className="col-md-6 login-forgot-password">
                    <p
                      className="md-trigger popin_btn"
                      data-modal="colored-primary"
                      onClick={this._showResetPasswordModal}
                    >
                      {t('Auth:forgotPassword')}
                    </p>
                  </div>
                </div>
                <div className="form-group login-submit">
                  <button className="btn btn-primary btn-x1" type="submit">
                    {t('Auth:connect')}
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
        <ResetPassword
          modalShow={this.state.showResetPassword}
          handleClose={this._hideResetPasswordModal}
        />
      </LoginWrapper>
    );
  }
}

export default Feature;

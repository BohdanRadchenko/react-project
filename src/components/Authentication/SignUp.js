import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ReactRouterPropTypes from 'react-router-prop-types';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { signUp } from '../../redux/session/sessionOperations';
import { getError } from '../../redux/session/sessionSelectors';
import './test.css';
import PasswordStrengthMeter from '../PasswordStrengthMeter/PasswordStrengthMeter';

class SignUp extends Component {
  static defaultProps = {
    errorMessage: '',
  };

  static propTypes = {
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    values: PropTypes.objectOf(PropTypes.string).isRequired,
    errors: PropTypes.objectOf(PropTypes.string).isRequired,
    touched: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleEnterSubmit);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleEnterSubmit);
  }

  handleEnterSubmit = ({ code }) =>
    code === 'Enter' || code === 'NumpadEnter'
      ? this.props.handleSubmit()
      : null;

  render() {
    const { errorMessage } = this.props;
    // console.log(this.props);
    const {
      values,
      handleBlur,
      handleChange,
      handleSubmit,
      errors,
      touched,
    } = this.props;
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 10,
          width: 500,
          margin: 'auto',
        }}
      >
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="input-feedback">{errors.email}</div>
        )}
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <PasswordStrengthMeter password={values.password} />
        {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
        )}
        <input
          type="password"
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="input-feedback">{errors.passwordConfirm}</div>
        )}
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <div className="input-feedback">{errors.name}</div>
        )}
        <button type="submit">Регистация</button>
        <p>{errorMessage}</p>
      </form>
    );
  }
}

// class SignUp extends Component {
//   static propTypes = {
//     onSignUp: PropTypes.func.isRequired,
//   };

//   componentDidMount() {
//     document.body.addEventListener('keydown', this.handleEnterSubmit);
//   }

//   componentWillUnmount() {
//     document.body.removeEventListener('keydown', this.handleEnterSubmit);
//   }

//   handleEnterSubmit = ({ code }) =>
//     code === 'Enter' || code === 'NumpadEnter' ? null : null;

//   render() {
//     return (
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//           passwordConfirm: '',
//           name: '',
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             const { onSignUp } = this.props;
//             const { email, password, name } = values;
//             onSignUp({ email, password, name });
//             setSubmitting(false);
//           }, 100);
//         }}
//         validationSchema={Yup.object().shape({
//           email: Yup.string()
//             .email()
//             .required('Email is required'),
//           password: Yup.string()
//             .min(4)
//             .max(16)
//             .required('Password is required'),
//           passwordConfirm: Yup.string()
//             .oneOf([Yup.ref('password'), null], 'Passwords must match')
//             .required('Please confirm your password'),
//           name: Yup.string().required('Name is required'),
//         })}
//       >
//         {props => {
//           const {
//             values,
//             touched,
//             errors,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//           } = props;
//           return (
//             <form onSubmit={handleSubmit}>
//               <input
//                 id="email"
//                 placeholder="Enter your email"
//                 type="text"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={
//                   errors.email && touched.email
//                     ? 'text-input error'
//                     : 'text-input'
//                 }
//               />
//               {errors.email && touched.email && (
//                 <div className="input-feedback">{errors.email}</div>
//               )}
//               <input
//                 type="text"
//                 name="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               <PasswordStrengthMeter password={values.password} />
//               {errors.password && touched.password && (
//                 <div className="input-feedback">{errors.password}</div>
//               )}
//               <input
//                 type="text"
//                 name="passwordConfirm"
//                 value={values.passwordConfirm}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.passwordConfirm && touched.passwordConfirm && (
//                 <div className="input-feedback">{errors.passwordConfirm}</div>
//               )}
//               <input
//                 type="text"
//                 name="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.name && touched.name && (
//                 <div className="input-feedback">{errors.name}</div>
//               )}
//               <button type="submit">Submit</button>
//             </form>
//           );
//         }}
//       </Formik>
//     );
//   }
// }

const mSTP = state => ({
  errorMessage: getError(state),
});

const mDTP = {
  onSignUp: signUp,
};

export default connect(
  mSTP,
  mDTP,
)(SignUp);

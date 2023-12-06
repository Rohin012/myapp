import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import authfetchI from './Interseptor';
export default function CustomerData() {

    const d = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: true,
      };

      const  validation = ()=>{

        return Yup.object().shape({
            firstName: Yup.string().required('Fullname is required'),
            lastName: Yup.string()
              .required('Username is required')
              .min(6, 'Username must be at least 6 characters')
              .max(20, 'Username must not exceed 20 characters'),
            email: Yup.string()
              .required('Email is required')
              .email('Email is invalid'),
              
            password: Yup.string()
              .required('Password is required')
              .min(6, 'Password must be at least 6 characters')
              .max(40, 'Password must not exceed 40 characters'),
            confirmPassword: Yup.string()
              .required('Confirm Password is required')
              .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
            acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
          });


      }
  return (
    <Formik initialValues={d}
        
    validationSchema={validation}
    onSubmit={(e)=>{

e.preventDefault();

authfetchI.post("accounts/register")
.then(y=>{

    localStorage.setItem("token",JSON.stringify(y.data))
    console.log(y.data);
}).catch(y=>{

    console.log(y)
})

}

        
    }
    >

        <Form>

        <div className="form-group">
                    <label>firstName</label>
                    <Field name="firstName" type="text" className="form-control" />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="lastName"> lastName</label>
                    <Field name="lastName" type="text" className="form-control" />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group form-check">
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    <button
                      type="button"
                      
                      className="btn btn-warning float-right"
                    >
                      Reset
                    </button>
                  </div>
      

        </Form>


    </Formik>
  )
}

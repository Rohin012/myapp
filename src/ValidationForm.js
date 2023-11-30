import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'

export default function SingUpForm() {

    let FormData = {
        firstName : "",
        lastName :"",
        email:"",
        password:"",
        ConfirmPassword:"",
        acceptterms : false,
        hobbies:[],
        gender:"",
        city : ""
    }

   const  validateSingUp = empData => {

    
      const errors = {};
    
      if (!empData.firstName) {
        errors.firstName = 'Please Enter firstName';
      } else if (empData.firstName.length > 20) {
        errors.firstName = 'Name cannot exceed 20 characters';
      }

      if (!empData.lastName) {
        errors.lastName = 'Please Enter firstName';
      } else if (empData.lastName.length > 20) {
        errors.lastName = 'Name cannot exceed 20 characters';
      }
      if (!empData.email) {
        errors.email = 'Please Enter email';
      } else if (empData.email.length > 20) {
        errors.email = 'Invalid Email Address';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
        errors.email = 'Invalid email address';
      }
      if (!empData.password) {
        errors.password = 'Please Enter password';
      } else if (empData.lastName.length > 16) {
        errors.password = 'Name cannot exceed 20 characters';
      }else if(Yup.object().shape({password: Yup.string().min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol')})){
        errors.password="Invalid Password"
      }
      return errors;
    };
     return (
      <div>
        <h1>Sign Up</h1>

        <Formik initialValues={FormData}
        
        validate={validateSingUp}
        onSubmit={(values)=>{

            console.log(values)
            
        }}
        >

            <Form>

                <label>FirstName</label>
                <Field id="firstName" name="firstName" 
                placeholder="please Enter FirstName"></Field>
                 <ErrorMessage name='firstName'/><br/><br/>

              <label>LastName</label>
                <Field id="lastName" name="lastName" 
                placeholder="please Enter LastName"></Field>
              <ErrorMessage name='lastName'/><br/><br/>

              <label>Email</label>
                <Field id="email" name="email" 
                placeholder="please Enter email" ></Field>
              <ErrorMessage name='email'/><br/><br/>

              <label>Password</label>
                <Field id="password" name="password" 
                placeholder="please Enter password" ></Field>
              <ErrorMessage name='password'/><br/><br/>


              <label>ConfirmPassword</label>
                <Field id="password" name="password" 
                placeholder="please Enter password" ></Field>
              <ErrorMessage name='password'/><br/><br/>


          <label>acceptTerms
            <Field type="checkbox" name="acceptterms" />
           </label><br/><br/>


          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="hobbies" value="Cricket" />
              Cricket
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="Music" />
              Music
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="Traveling" />
              Traveling
            </label>
          </div>
          <br/><br/>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
            
          </div>
          <br/><br/>
          <Field name="city" as="select">
            <option value="vadodara">vadodara</option>
            <option value="pune">pune</option>
            <option value="bangloor">bangloor</option>
          </Field>

          <br/><br/>
          <button type="submit">Submit</button>

         </Form>


        </Formik>
     </div>
  )
}

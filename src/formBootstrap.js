import React from 'react'
import { Formik } from 'formik'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';


export const FormWithBoostrap = () => {


  const  validation = ()=>{

    return Yup.object().shape({
      firstName: Yup.string().required('firstName is required'),
      lastName: Yup.string()
          .required('lastName is required')
          .min(6, 'Username must be at least 6 characters')
          .max(20, 'Username must not exceed 20 characters'),
        
      
      });


  }


  return (
    <div>
    <h1>Sign Up</h1>

    <Formik initialValues={{

firstName : "",
lastName :""
}}

validationSchema={validation}
    
   
    onSubmit={(values,{setSubmitting})=>{

      
        console.log(values)
        
    }}
    >
        {
           (

            {values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }

           )=>(



            <Form onSubmit={handleSubmit}>
                {console.log(errors)}

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter text"
            name='firstName'
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={(touched.firstName) && errors.firstName ? "error" : null}
            />
            <Form.Text className="text-muted">
            
            {touched.firstName && errors.firstName ? (
  <div className="error-message">{errors.firstName}</div>
): null}

            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>LastName</Form.Label>
            <Form.Control
             type="text"
             value={values.lastName}
             onChange={handleChange}
             onBlur={handleBlur}
             name='lastName'
             placeholder="Enter email"
             
             className={touched.lastName && errors.lastName ? "error" : null}
             />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
    
             
    
    
    <button type="submit">Submit</button>
    
            </Form>
    


           )

        }
     

    </Formik>

</div>
  )
}

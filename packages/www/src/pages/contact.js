/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Container, Flex } from 'theme-ui'
import { Form, Formik, useField } from 'formik'

import * as Yup from 'yup'

// const InputField = ({ label, ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input> and alse replace ErrorMessage entirely.
//   const [field, meta] = useField(props)
//   return (
//     <React.Fragment>
//       <div sx={{ mt: 3, px: 2, width: `full` }}>
//         <label
//           htmlFor={props.id || props.name}
//           sx={{
//             fontWeight: 'bold',
//             fontSize: `.75rem`,
//             mb: 3,
//           }}
//         >
//           {label}
//         </label>
//         <input {...field} {...props} />
//         {meta.touched && meta.error ? (
//           <div sx={{ p: 0, mt: 1, color: `red.6`, fontSize: `0.75rem` }}>
//             {meta.error}
//           </div>
//         ) : null}
//       </div>
//     </React.Fragment>
//   )
// }

const Contact = () => {
  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
  //     )
  //     .join('&')
  // }

  return (
    <Container>
      <h1>Register for our thing!</h1>

      <form
        name="registration"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" name="firstname" type="text" />

        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" name="lastname" type="text" />

        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" />

        <button type="submit">Register</button>
      </form>

      {/*      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" id="firstname" />
        </div>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>

        <ul>
          <li>
            <input type="submit" value="Send Message" />
          </li>
          <li>
            <input type="reset" value="Clear" />
          </li>
        </ul>
      </form>*/}
      {/*
      <Formik
        initialValues={{
          email: '',
          firstname: '',
          lastname: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch('/.netlify/functions/submission-create', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: values,
          })
            .then(() => {
              setSubmitting(false)
              resetForm()
            })
            .catch((error) => alert(error))
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().required(),
          lastname: Yup.string().required(),
          email: Yup.string().email().required(),
        })}
      >
        {({ handleChange, handleSubmit, isSubmitting }) => (
          <Form
            name="contact"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label htmlFor="form-name">
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <div
              sx={{
                p: 4,
                bg: `input`,
                boxShadow: `default`,
                mt: 4,
              }}
            >
              <div
                sx={{
                  borderBottom: `1px solid rgba(34,36,38,.15)`,
                  pb: 3,
                }}
              >
                <Styled.h4
                  sx={{
                    display: `inline`,
                    verticalAlign: `bottom`,
                    fontWeight: `normal`,
                    color: `green.6`,
                  }}
                >
                  Get in Touch
                </Styled.h4>
              </div>

              <Flex
                sx={{
                  display: [`inline`, `flex`],
                  flexWrap: `flex-wrap`,
                }}
              >
                <InputField
                  sx={{
                    variant: `inputs.primary`,
                  }}
                  name="firstname"
                  type="text"
                  label="firstname"
                />

                <InputField
                  sx={{
                    variant: `inputs.primary`,
                  }}
                  name="lastname"
                  type="text"
                  label="lastname"
                />

                <InputField
                  sx={{ variant: `inputs.primary` }}
                  name="email"
                  type="email"
                  label="email"
                />
              </Flex>

              <button
                sx={{
                  variant: `buttons.primary`,
                  mx: 2,
                  my: 3,
                }}
                name="submit"
                type="submit"
                disabled={isSubmitting}
                // onClick={() => resetForm(initialValues)}
              >
                SUBMIT
              </button>
            </div>
          </Form>
        )}
      </Formik>*/}
    </Container>
  )
}

export default Contact

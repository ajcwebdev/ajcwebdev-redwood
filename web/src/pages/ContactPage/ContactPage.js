import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <h1>Contact</h1>
      <p>Tell me stuff about my things!</p>

      <Form
        onSubmit={onSubmit}
        validation={
          { mode: 'onBlur' }
        }
      >
        <Label
          name="name"
          errorClassName="error"
        />
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError
          name="name"
          style={{ color: 'red' }}
        />

        <Label
          name="email"
          errorClassName="error"
        />
        <TextField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: { value: /[^@]+@[^.]+\..+/, },
          }}
        />
        <FieldError
          name="email"
          style={{ color: 'red' }}
        />

        <Label
          name="message"
          errorClassName="error"
        />
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError
          name="message"
          style={{ color: 'red' }}
        />

        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading } ] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      formMethods.reset()
      alert('Thanks for telling me stuff about my things!')
    }
  })

  const onSubmit = (data) => {
    create({
      variables: {
        input: data
      }
    })
    console.log(data)
  }

  return (
    <BlogLayout>
      <h1>Contact</h1>
      <p>Tell me stuff about my things!</p>

      <Form
        onSubmit={
          onSubmit
        }
        validation={{
          mode: 'onBlur'
        }}
        formMethods={formMethods}
      >
        <Label
          name="name"
          errorClassName="error"
        >
          Name
        </Label>
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
        >
          Email
        </Label>
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
        >
          Message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError
          name="message"
          style={{ color: 'red' }}
        />

        <Submit disabled={loading}>
          Save
        </Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
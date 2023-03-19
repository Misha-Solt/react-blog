import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

import styles from './form.module.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'Max Mustermann' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+49 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

const Form = () => (
  <form className={styles.form}>
    <h2>Send us a message</h2>
    <br />

    {formInputs.map((input) => (
      <label key={input.label} id={input.id} className={styles.formLabel}>
        {input.label}

        {input.type === 'textarea' ? (
          <textarea
            className={styles.formTextarea}
            placeholder={input.placeholder}
          />
        ) : (
          <input
            className={styles.formInput}
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

    <Icon className={styles.formSubmit} icon={sendCircle} />
  </form>
)

export default Form

import Form from './Form'
import Info from './Info'
import styles from './contacts.module.css'

const Contacts = () => {
  return (
    <div id="contacts" className={styles.contacts}>
      <Form />
      <Info />
    </div>
  )
}

export default Contacts

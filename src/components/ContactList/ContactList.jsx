import PropTypes, { object } from 'prop-types';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li className={styles['list-item']} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(object),
  onDelete: PropTypes.func,
};

export default ContactList;

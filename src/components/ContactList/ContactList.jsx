import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactsList}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))
        ) : (
          <p className={css.noContactsMessage}>No contacts matching your search.</p>
        )}
      </ul>
    </>
  );
};

export default ContactList;
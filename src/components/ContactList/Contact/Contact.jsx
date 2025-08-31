import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <span className={css.contactName}>
          <IoPerson /> {contact.name}
        </span>
        <span className={css.contactNumber}>
          <BsFillTelephoneFill /> {contact.number}
        </span>
      </div>
      <button className={css.deleteButton} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
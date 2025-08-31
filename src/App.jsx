import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import Notification from "./components/Notification/Notification";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading, selectError } from "./redux/contactsSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className="container">
        <SearchBox />
        {loading && !error && <Notification message="Loading contacts..." type="info" />}
        {error && <Notification message={`Error: ${error}`} type="error" />}
        <ContactList />
      </div>
    </>
  );
}

export default App;
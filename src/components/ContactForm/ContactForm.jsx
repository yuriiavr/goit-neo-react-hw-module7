import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import css from './ContactForm.module.css';

const ContactForm = () => {
    
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Name is a required field"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(15, "Number must be at most 15 characters")
      .required("Number is a required field")
      .matches(
        /^[0-9\s\-+()]+$/,
        "Phone number can only contain digits, spaces, hyphens, parentheses, and the plus sign"
      ),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact({
          name: values.name,
          number: values.number,
        }));
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formField}>
            <label className={css.formLabel} htmlFor="name">Name</label>
            <Field className={css.formInput} type="text" name="name" />
            <ErrorMessage className={css.errorMessage} name="name" component="div" />
          </div>
          <div className={css.formField}>
            <label className={css.formLabel} htmlFor="number">Number</label>
            <Field className={css.formInput} type="tel" name="number" />
            <ErrorMessage className={css.errorMessage} name="number" component="div" />
          </div>
          <button className={css.submitButton} type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
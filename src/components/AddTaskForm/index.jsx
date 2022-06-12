import { ErrorMessage, Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { useId } from "react";
import * as Yup from "yup";
import { PRIORITY } from "../../models/priority.enum";

import styles from "./AddTaskForm.module.css";

function AddTaskForm({ handleTaskAdd }) {
  const id = useId();

  const initialValues = {
    description: "",
    priority: PRIORITY.NORMAL,
  };

  const validationSchema = Yup.object({
    description: Yup.string()
      .min(3, "La tarea debe tener al menos 3 caracteres")
      .required("La tarea es requerida"),
    priority: Yup.string()
      .oneOf(Object.values(PRIORITY), "Prioridad no valida")
      .required("La prioridad es requerida"),
  });

  const handleSubmit = ({ description, priority }, { resetForm }) => {
    handleTaskAdd({ description, priority });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.addTaskForm}>
        <h2>Añadir tarea</h2>
        <div className={styles.errorMessage}>
          <ErrorMessage name="description" component="p" />
          <ErrorMessage name="priority" component="p" />
        </div>
        <div>
          <label htmlFor={`${id}-description`}>Tarea</label>
          <Field id={`${id}-description`} name="description" type="text" />
        </div>
        <div>
          <label htmlFor={`${id}-priority`}>Prioridad</label>
          <Field id={`${id}-priority`} name="priority" as="select">
            <option value={PRIORITY.LOW}>Baja</option>
            <option value={PRIORITY.NORMAL}>Normal</option>
            <option value={PRIORITY.HIGH}>Alta</option>
          </Field>
        </div>
        <div>
          <button type="submit">Añadir</button>
        </div>
      </Form>
    </Formik>
  );
}

AddTaskForm.propTypes = {
  handleTaskAdd: PropTypes.func.isRequired,
};

export default AddTaskForm;

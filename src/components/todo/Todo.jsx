import React, { useState, useEffect } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { todoRetrive, todoUpdate } from "../api/todo/todoDataService";

function Todo(props) {
  const [id] = useState(props.match.params.id);
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );

  useEffect(() => {
    todoRetrive(props.match.params.username, id).then((response) => {
      setDescription(response.data.description);
      setTargetDate(moment(response.data.targetDate).format("YYYY-MM-DD"));
    });
  });

  const onValidate = (values) => {
    let error = {};
    if (values.description.length < 5) {
      error.description = "enter at least 5 char";
    }
    if (!moment(values.targetDate).isValid()) {
      error.targetDate = "enter a valid date";
    }
    return error;
  };

  const onsubmit = (values) => {
    todoUpdate(props.match.params.name, id, {
      id: id,
      description: values.description,
      targetDate: values.targetDate,
    }).then(() => {
      props.history.push(`/todo`);
    });

    // setDescription(values.description);
    // setTargetDate(moment(values.targetDate).format("YYYY-MM-DD"));
  };
  return (
    <div className="container">
      <Formik
        initialValues={{ targetDate, description }}
        onSubmit={onsubmit}
        validate={onValidate}
        enableReinitialize={true}
      >
        <Form>
          <fieldset className="form-group">
            <label>Description</label>
            <Field
              className="form-control"
              type="text "
              placeholder="description"
              name="description"
            ></Field>
            <ErrorMessage
              className="alert alert-danger"
              component="div"
              name="description"
            ></ErrorMessage>
          </fieldset>
          <fieldset className="form-group">
            <label>Target Date</label>
            <Field
              className="form-control"
              type="date"
              name="targetDate"
            ></Field>
            <ErrorMessage
              className="alert alert-danger"
              component="div"
              name="targetDate"
            ></ErrorMessage>
          </fieldset>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Todo;

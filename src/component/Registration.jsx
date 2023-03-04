import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../css/registration.module.css";

const initialValues = {
  state: "",
  rera: "",
  modified: "",
  approved: "",
  start: "",
  end: "",
  filename: "",
  url: "",
};

const options = [
  { value: "Telangana", label: "Telangana" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Goa", label: "Goa" },
];

export const Registration = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("values", values);
      console.log("errors", errors);
      action.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* SELECT */}

        <div>
          <label>Select the State</label>
          <Select
            options={options}
            placeholder="Select the state"
            onChange={(e) => setFieldValue("state", e.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="name" className="input-label">
            Rera No
          </label>

          <input
            type="number"
            autoComplete="off"
            name="rera"
            id="name"
            placeholder="Enter Rera Number"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.rera && touched.rera ? (
            <p className={styles.errors}>{errors.rera}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="">Modified Date</label>

          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={Date.now()}
            onChange={(date) => setFieldValue("modified", date)}
            todayButton={"Today"}
          />
          {errors.modified && touched.modified ? (
            <p className={styles.errors}>{errors.modified}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="">Approved Date</label>

          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={Date.now()}
            onChange={(date) => setFieldValue("approved", date)}
            todayButton={"Today"}
          />
          {errors.modified && touched.modified ? (
            <p className={styles.errors}>{errors.modified}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="">Start Date</label>

          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={Date.now()}
            onChange={(date) => setFieldValue("start", date)}
            todayButton={"Today"}
          />
          {errors.modified && touched.modified ? (
            <p className={styles.errors}>{errors.modified}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="">End Date</label>

          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={Date.now()}
            onChange={(date) => setFieldValue("end", date)}
            todayButton={"Today"}
          />
          {errors.modified && touched.modified ? (
            <p className={styles.errors}>{errors.modified}</p>
          ) : null}
        </div>

        <div className="input-block">
          <label htmlFor="" className="input-label">
            Upload File
          </label>

          <input
            type="file"
            autoComplete="off"
            name="filename"
            id="filename"
            onChange={(e) => setFieldValue("filename", e.target.files[0].name)}
            onBlur={handleBlur}
          />
          {errors.filename && touched.filename ? (
            <p className={styles.errors}>{errors.filename}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="" className="input-label">
            Enter Url
          </label>

          <input
            type="url"
            autoComplete="off"
            name="url"
            id="url"
            placeholder="Enter Url"
            value={values.url}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.url && touched.url ? (
            <p className={styles.errors}>{errors.url}</p>
          ) : null}
        </div>

        <div className="modal-buttons">
          <a href="#"> Want to register using Gmail</a>
          <button className="input-button" type="submit">
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "./Slice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

const Settings = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    department: Yup.string().required("Department is required"),
    dob: Yup.date().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    education: Yup.string().required("Education Level is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone Number must be exactly 10 digits")
      .required("Phone Number is required"),
    location: Yup.string().required("Location is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    Object.keys(values).forEach((key) => {
      dispatch(updateField({ name: key, value: values[key] }));
    });
  };

  return (
    <div className="container">
      <Formik
        initialValues={formState}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="row justify-content-center align-items-start">
              <div className="col-5 ms-1 mx-5">
                <h2 className="card-title">Personal</h2>
                <div className="row mb-3">
                  <div className="col card-title2">
                    <label htmlFor="inputFirstName">First Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                      name="firstName"
                      placeholder="First name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="col card-title2">
                    <label htmlFor="inputLastName">Last Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="inputLastName"
                      name="lastName"
                      placeholder="Last name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>

                <div className="mb-3 card-title2">
                  <label htmlFor="inputDepartment">Department</label>
                  <Field
                    as="select"
                    className="form-select"
                    id="inputDepartment"
                    name="department"
                  >
                    <option>Human Resource</option>
                  </Field>
                  <ErrorMessage
                    name="department"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="row mb-3 card-title2">
                  <div className="col">
                    <label htmlFor="inputDOB">Date Of Birth</label>
                    <Field
                      type="date"
                      className="form-control"
                      id="inputDOB"
                      name="dob"
                      placeholder="11-Aug-1993"
                    />
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="col card-title2">
                    <label htmlFor="inputGender">Gender</label>
                    <Field
                      as="select"
                      className="form-control"
                      id="inputGender"
                      name="gender"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>

                <div className="mb-3 card-title2">
                  <label htmlFor="inputEducation">Education Level</label>
                  <Field
                    as="select"
                    className="form-select"
                    id="inputEducation"
                    name="education"
                  >
                    <option>Computer Science</option>
                    <option>IT</option>
                  </Field>
                  <ErrorMessage
                    name="education"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="d-flex">
                  <button type="submit" className="btn btn-info me-2">
                    Save Changes
                  </button>
                  <button type="button" className="btn card-title2">
                    Change Password
                  </button>
                </div>
              </div>

              <div className="col-5 mx-3">
                <h2 className="card-title">Contact Details</h2>
                <div className="row mb-3">
                  <div className="col card-title2">
                    <label htmlFor="inputEmail">Email</label>
                    <Field
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      name="email"
                      placeholder="subramaniyam@kanini.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="col card-title2">
                    <label htmlFor="inputPhoneNumber">Phone Number</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="inputPhoneNumber"
                      name="phoneNumber"
                      maxLength="10"
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                      placeholder="+91 698 752 3687"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>

                <div className="mb-3 card-title2">
                  <label htmlFor="inputLocation">Location</label>
                  <Field
                    as="select"
                    className="form-control"
                    id="inputLocation"
                    name="location"
                  >
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                  </Field>
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="card-title2">
                  <label htmlFor="inputAddress">Address</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    name="address"
                    placeholder="Plot No 451 Light House Part Shivaji Nagar Check Naka Thane Chennai,400604,India"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Settings;

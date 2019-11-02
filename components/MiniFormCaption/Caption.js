import React from "react";
import { Form, Input, notification, Icon } from "antd";
import { withFormik } from "formik";
import yup from "../../libs/yup";
import SubmitButton from "./SubmitButton";
var axios = require("axios");

// Fields Validation Rules
const formikEnhancer = withFormik({
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .min(6)
      .required("Nome Obrigatório"),
    email: yup
      .string()
      .email()
      .required("Digite seu Email"),
    phone: yup
      .string()
      .min(13)
      .required("Digite seu Telefone")
  }),
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: ""
  }),
  handleSubmit: (values, { setStatus, setSubmitting }) => {
    // Submit Logic
    setSubmitting(true);
    const { name, email, phone } = values;
    if (name && email && phone) {
      //Envia Form
      axios
        .post(
          "https://oq4segghm4.execute-api.us-east-1.amazonaws.com/staging/enrollments",
          {
            name,
            email,
            phone
          }, {
            headers: {'Access-Control-Allow-Origin': '*'}
          }
        )
        .then(response => {
          setStatus({ status: "Sucesso", successMessage: response });
          console.log("sucesso", response);
          setSubmitting(false);
        })
        .catch(error => {
          console.log("error", error);
          openNotificationWithIcon("error", error.message);
          setStatus({ errorMessage: error });
          setSubmitting(false);
        });
    } else {
      openNotificationWithIcon(
        "error",
        "Verifique os campos e tente novamente."
      );
      setStatus({ errorMessage: "Verifique os Campos" });
      setSubmitting(false);
    }
  },
  displayName: "LoginForm"
});

// Notification Feedback modal
const openNotificationWithIcon = (type, description) => {
  notification[type]({
    message: "Ops! Algo deu Errado",
    description: description
  });
};

function Caption(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;

  // Get validation status from field
  function getValidateStatus(param) {
    return errors[param] && touched[param]
      ? "error"
      : touched[param]
      ? "success"
      : "";
  }

  // Handle Touched condition
  function handleFormSubmit() {
    const { name, email, phone } = values;
    if (name && email && phone) {
      Object.entries(errors).length === 0
        ? props.submitForm()
        : openNotificationWithIcon("error", "Verifique os campos assinalados.");
    } else {
      props.setFieldTouched("name");
      props.setFieldTouched("email");
      props.setFieldTouched("phone");
      openNotificationWithIcon("error", "Verifique os campos assinalados.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Form.Item hasFeedback validateStatus={getValidateStatus("name")}>
        <Input
          id="name"
          placeholder="Seu Nome"
          size="large"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
      </Form.Item>
      <Form.Item hasFeedback validateStatus={getValidateStatus("email")}>
        <Input
          id="email"
          placeholder="Seu E-mail"
          size="large"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
      </Form.Item>
      <Form.Item hasFeedback validateStatus={getValidateStatus("phone")}>
        <Input
          id="phone"
          placeholder="(XX) X-XXXX-XXXX"
          size="large"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          prefix={<Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
      </Form.Item>
      <span onClick={handleFormSubmit}>
        <SubmitButton
          content={
            isSubmitting ? <Icon type="loading" /> : "Realizar inscrição"
          }
        />
        {isSubmitting ? "enviando" : "asdasd"}
      </span>
    </form>
  );
}

export default formikEnhancer(Caption);

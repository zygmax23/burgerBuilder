import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Button from "../components/atoms/Button/Button";
import axios from "axiosInstance";
import Spinner from "components/atoms/Spinner/Spinner";
import Input from "components/atoms/Input/Input";

const StyledContactData = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const ContactDataView = (props) => {
  const [contactData, setContactData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      orderForm: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your name",
          },
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        street: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your street",
          },
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        zipCode: {
          elementType: "input",
          elementConfig: {
            type: "number",
            placeholder: "ZIP Code",
          },
          value: "",
          validation: {
            required: true,
            minLength: 5,
            maxLength: 5,
            isNumber: true,
          },
          valid: false,
          touched: false,
        },
        country: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Country",
          },
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your E-Mail",
          },
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        deliveryMethod: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "fastest", displayValue: "Fastest" },
              { value: "cheapest", displayValue: "cheapest" },
            ],
          },
          valid: true,
          value: "cheapest",
          touched: false,
        },
      },
    }
  );

  const [loading, setLoading] = useState(false);
  const [formValid, setFormValidity] = useState(false);

  const orderHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {};

    for (let formElement in contactData.orderForm) {
      formData[formElement] = contactData.orderForm[formElement].value;
    }

    console.log(formData);

    const order = {
      ingredients: props.ingredients,
      price: props.price,
      orderData: formData,
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        setLoading(false);
        props.history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        //setPurchasing(false);
        console.log(error);
      });
  };

  const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules?.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules?.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules?.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules?.isNumber) {
      isValid = parseInt(value) && isValid;
    }

    return isValid;
  };

  const handleInputChange = (e) => {
    const updatedOrderForm = {
      ...contactData.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[e.target.name],
    };

    updatedFormElement.value = e.target.value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    console.log(updatedFormElement);
    updatedOrderForm[e.target.name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    setFormValidity(formIsValid);
    setContactData({ orderForm: updatedOrderForm });
  };

  const formElementsArray = [];
  for (let key in contactData.orderForm) {
    formElementsArray.push({
      id: key,
      config: contactData.orderForm[key],
    });
  }

  let form = (
    <form>
      {formElementsArray.map((element) => {
        return (
          <Input
            invalid={!element.config.valid}
            changed={handleInputChange}
            key={element.id}
            name={element.id}
            touched={element.config.touched}
            elementType={element.config.elementType}
            {...element.config.elementConfig}
            value={element.config.value}
          />
        );
      })}

      <Button disabled={!formValid} success onClick={orderHandler}>
        ORDER
      </Button>
    </form>
  );

  if (loading) {
    form = <Spinner />;
  }

  return (
    <StyledContactData>
      <h4>Enter your Contact Data</h4>
      {form}
    </StyledContactData>
  );
};

export default ContactDataView;

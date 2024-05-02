//import React from 'react';

import { Form } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export function Myform({ children }) {

  return (
    <>
      <h6>Los campos señalados con (*) son OBLIGATORIOS</h6>
      <Form id='formulario' className="container">
        {children}
      </Form>
    </>
  );
}

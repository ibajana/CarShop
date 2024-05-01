//import React from 'react';

// eslint-disable-next-line react/prop-types
export function Form({ children }) {

  return (
    <>
      <h6>Los campos señalados con (*) son OBLIGATORIOS</h6>
      <form id='formulario'>
        {children}
      </form>
    </>
  );
}

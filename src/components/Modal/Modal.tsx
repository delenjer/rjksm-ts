import React from 'react';

export const Modal: React.FC = (props) => {

  return (
    <section className="modal">
      {props.children}
    </section>
  );
}

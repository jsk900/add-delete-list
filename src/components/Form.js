import React from 'react';

export const Form = props => {
  return (
    <form className="form">
      <input
        type="text"
        ref={input => input && input.focus()} //simple trick code to focus, including after button click.
        value={props.str}
        onChange={props.handleChange}
      />
      <button className="enterBtn" onClick={props.handleSubmit}>
        Enter
      </button>
    </form>
  );
};

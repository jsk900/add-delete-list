import React from 'react';

export const Item = props => {
  return (
    <>
      <li>
        {props.item.str}
        <button
          className="deleteBtn"
          //Because all our state is in the App component, and therefore our methods/functions
          //are also there. Sometimes we will need to pass arguments back.
          //Such as in this case with the delete button. The handleDelete method/function
          //has been passed down from App to this component via other components as props.
          //To pass arguments back we need to insert an anonymous callback to the method/function,
          //to be able to pass whatever arguments we want back. As in the code below.
          onClick={() => props.handleDelete(props.item.uuid)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

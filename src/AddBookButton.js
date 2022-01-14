import React from "react";
import { useHistory } from "react-router-dom";

const AddBookButton = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/search");
    }

    return (

          <button onClick={handleClick}>
              Add a book
          </button>
    );
    
}
export default AddBookButton
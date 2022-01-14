import React from "react";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <button className="close-search" onClick={handleClick}>Close</button>
    );

}
export default HomeButton
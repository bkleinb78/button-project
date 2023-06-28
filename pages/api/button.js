import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  const { color, textColor, ...rest } = props;
  return (
    <button
      {...rest}
      disabled={props.disabled}
      className={`border 
      border-${color ?? "blue"}-500 
      bg-${color ?? "blue"}-500  
      text-${textColor ?? "white"}-900 
        py-2 px-4 rounded-lg 
       focus:outline-none 
       focus:ring-4 
       ring-${color ?? "blue"}-300 
       ${
         props.disabled
           ? "opacity-50 cursor-not-allowed pointer-events-none"
           : `hover:bg-${color ?? "blue"}-700`
       } ${props.className ?? ""}`}
    >
      {props?.leftIcon ? <FontAwesomeIcon icon={props?.leftIcon} /> : null}
      {props.children}
      {props?.rightIcon ? <FontAwesomeIcon icon={props?.rightIcon} /> : null}
    </button>
  );
};

export default Button;

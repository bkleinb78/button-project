import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./style.css";

export const Input = (props) => {
  const { iconLeft, iconRight, className, ...rest } = props;
  return (
    <div className="relative input-wrapper">
      {iconLeft && (
        <FontAwesomeIcon
          className={`input-icon-right text-gray-500 absolute top-3 left-2 ${
            props.disabled
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}
          icon={iconLeft}
        />
      )}
      <input
        className={`input-element
        py-2 px-4 ${iconLeft ? "pl-8" : ""} ${
          iconRight ? "pr-8" : ""
        } rounded-lg 
        w-full
       focus:outline-none 
       focus:ring-4 
       focus:ring-blue-300
       border
       border-gray-300
       focus:border-blue-500
       text-gray-900
       ${
         props.disabled
           ? "opacity-50 cursor-not-allowed pointer-events-none"
           : ""
       }
       ${className ?? ""}
       `}
        {...rest}
      />
      {iconRight && (
        <FontAwesomeIcon
          className={`input-icon-right text-gray-500 absolute top-3 right-2 ${
            props.disabled
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}
          icon={iconRight}
        />
      )}
    </div>
  );
};

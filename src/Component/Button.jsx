import React from "react";

const Button = ({ onCategoryChange }) => {
  const category = ["All", "Lunch", "Breakfast", "Shakes"];
  
  return (
    <div style={{ textAlign: "center" }}>
      {category.map((e) => (
        <button
          key={e}
          style={{
            width: "120px",
            height: "40px",
            padding: "10px",
            marginRight: "20px",
            textAlign: "center",
            border: "none",
            backgroundColor: "#f59e0b",
            color: "white",
            fontSize: "20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => onCategoryChange(e)}
        >
          {e}
        </button>
      ))}
    </div>
  );
};

export default Button;

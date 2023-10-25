import React from "react";

const Menu = ({ food }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        marginTop:"40px"
      }}
    >
      {food.map((e) => (
        <div
          className="itemes"
          style={{
            width: "30%",
            height: "500px",
            borderRadius: "10px",
            margin: "30px 20px",
            boxShadow: "0px 0px 3px 0px #e1e2eb",
          }}
        >
          <div>
            <img
              src={e.img}
              alt={e.title}
              width="100%"
              height="40%"
              style={{
                WebkitBorderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ padding: "7px 16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontSize: "25px", fontWeight: "400" }}>{e.title}</p>
              <span style={{ fontSize: "19px" }}>{e.price}</span>
            </div>
            <p style={{ color: "#64748b", fontSize: "20px" }}>{e.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

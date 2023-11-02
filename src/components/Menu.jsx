import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Menu = () => {
  return (
    <div style={{margin: "0", display: "flex", justifyContent: "center", justifySelf: "center", alignItems: "center", backgroundColor: '#232D3F', color: 'white'}}>
    <nav style={{height: "70px", overflow: "hidden", textAlign: "center", fontSize: "2rem"}}>
      <div className="container-div container-fluid">
        <Button
        style={{
          backgroundImage: "linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)",
          margin: "10px",
          padding: "15px 45px",
          textAlign: "center",
          textTransform: "uppercase",
          transition: "0.5s",
          backgroundSize: "200% auto",
          color: "white",
          boxShadow: "0 0 20px #eee",
          borderRadius: "10px",
          display: "flex",
          marginRight: "110px",
          width: "300px"
        }}
        _hover={{
          backgroundPosition: "right center",
          color: "#fff",
          textDecoration: "none",
        }}>
        <Link to="/">Home</Link>
        </Button>
      </div>
    </nav>
    </div>
  );
};
export default Menu;

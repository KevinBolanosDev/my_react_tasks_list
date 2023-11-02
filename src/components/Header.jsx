import React from "react";
import { Text, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Heading style={{textAlign: "center"}}>
      <Text fontSize="2xl" as="i">
        Lista de Tareas
      </Text>
    </Heading>
  );
};

export default Header;

import React from "react";
import { Text, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Center style={{background: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)', color: 'white'}}>
      <Text fontSize="2xl" as="i">
        Lista de Tareas
      </Text>
    </Center>
  );
};

export default Header;

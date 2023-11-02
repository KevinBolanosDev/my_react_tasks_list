import React from "react";
import {
    Card,
    CardBody,
    Heading,
    Stack,
    Text,
  } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <div style={{background: "linear-gradient(to right, #1f4037, #99f2c8)", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Card
        width="800px" 
        style={{ backgroundColor: "#005B41", color: "white"}}>
          <CardBody style={{ backgroundColor: "#008170" }}>
            <Heading>
              <Text textAlign="center">SOBRE NOSOTROS</Text>
            </Heading>
            <Stack mt="6" spacing="3">
              <Text textAlign="center">
                Esta aplicación esta diseñada para ayudarte a llevar tus tareas
                a otro nivel, de forma muy rapida y dinamica, no tendras que
                llevar mas una liberta y ocuparte de espacio, cuando la puedes
                llevar contigo en tu telefono a toda hora.
              </Text>
              <Text textAlign="center">
                Esta App usa tecnología muy modernas como React y diseñada con
                Chakra UI para una estetica prescindible.
              </Text>
            </Stack>
          </CardBody>
        </Card>
    </div>
  );
};

export default AboutUs;

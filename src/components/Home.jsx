import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <div style={{ background: "linear-gradient(to right, #1f4037, #99f2c8)", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} > 
        <Card maxW="70vh" style={{ backgroundColor: "#005B41", color: "white"}}>
          <CardBody style={{ backgroundColor: "#008170" }}>
            <Heading>
              <Text textAlign="center">BIENVENIDOS</Text>
            </Heading>
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxsaXN0YXMlMjBkZSUyMHRhcmVhc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Photo List Task"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Text textAlign="center" fontSize="1.rem">Aplicación To Do List</Text>
              <Text textAlign="center">
                Lleva todas tareas a otro nivel, lleva tu día a día siempre a la
                mano de un click.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter >
            <ButtonGroup spacing="10">
              <Button
                style={{
                  backgroundImage: "linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)",
                  margin: "10px",
                  padding: "15px 45px",
                  textAlign: "center",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  transition: "0.5s",
                  backgroundSize: "200% auto",
                  color: "white",
                  boxShadow: "0 0 20px #eee",
                  borderRadius: "10px",
                  display: "flex",
                  width: "150px",
                  marginRight: "70px"
                }}
                _hover={{
                  backgroundPosition: "right center",
                  color: "#fff",
                  textDecoration: "none",
                }}
                variant="solid"
              >
                <a href="/tasks">Lista de tareas</a>
              </Button>
              <Button
              style={{
                backgroundImage: "linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)",
                margin: "10px",
                padding: "15px 45px",
                textAlign: "center",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                transition: "0.5s",
                backgroundSize: "200% auto",
                color: "white",
                boxShadow: "0 0 20px #eee",
                borderRadius: "10px",
                display: "flex",
                width: "150px"
              }}
              _hover={{
                backgroundPosition: "right center",
                color: "#fff",
                textDecoration: "none",
              }}
              variant="solid"
              >
                <a href="/about">Sobre Nosotros</a>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
    </div>
  );
};
         



export default Home;

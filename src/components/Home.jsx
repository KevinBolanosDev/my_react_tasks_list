import React from "react";
import { Container} from "@chakra-ui/react";

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', background: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)', color: 'white'}}>
        <Container>
      <h1>BIEVENIDOS</h1>
      <h4>Aplicación Lista de tareas</h4>
      <p>Lleva todas tareas a otro nivel, lleva tu día a día siempre a la mano de un click</p>
        </Container>
        
    </div>
  );
};

export default Home;

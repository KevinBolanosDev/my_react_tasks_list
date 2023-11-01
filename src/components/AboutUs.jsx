import { Container } from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', background: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)', color: 'white'}}>
            <Container>
            <h1>Sobre Nosotros</h1>
            <p>Esta aplicación esta diseñada para ayudarte a llevar tus tareas a otro nivel, de forma muy rapida y dinamica, no tendras que llevar mas una liberta y ocuparte de espacio, cuando la puedes llevar contigo en tu telefono a toda hora</p>
            <p>Esta App usa tecnología muy modernas como React y diseñada con Chakra UI para una estetica prescindible</p>
            </Container>
        </div>
    )
}

export default AboutUs;
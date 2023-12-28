import { useState } from "react";
import styled from "@emotion/styled";

import Card from "./components/Card";
import Formulario from "./components/Formulario";
import Usuario from "./components/Usuario";


const Contenedor = styled.div`
  max-width: 1200px ;
  margin: 10em auto;
`
const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`
const App = () => {
  const [usuarios, setUsuarios] = useState([])
  console.log(usuarios)
  return (
    <Contenedor>
      <ContainerCard>
        <Card>
          <Formulario
            usuarios={usuarios}
            setUsuarios={setUsuarios}
          />
        </Card>
        <Card>
          {usuarios.length > 0 && (
            usuarios.map(usuario => (
              <Usuario
                key={usuario.email}
                usuario={usuario}
              />
            )))
          }
        </Card>
      </ContainerCard>

    </Contenedor>
  )
}

export default App;

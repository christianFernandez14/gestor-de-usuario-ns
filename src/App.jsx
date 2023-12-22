import { useState } from "react";
import styled from "@emotion/styled";

import Card from "./components/Card";
import Formulario from "./components/Formulario";
import Usuario from "./components/Usuario";


const Contenedor = styled.div`
  max-width: 700px ;
  margin: 15% auto;
`
const App = () => {
  const [usuarios, setUsuarios] = useState([])
  console.log(usuarios)
  return (
    <Contenedor>
      <Card>
        <Formulario
          usuarios={ usuarios }
          setUsuarios={setUsuarios}

        />
      </Card>

      {usuarios.length > 0 && (
        <Card>
          {usuarios.map(x => (
            <Usuario
              key={x.email}
              x={x}
            />
          ))}

        </Card>

      )}

    </Contenedor>
  )
}

export default App;

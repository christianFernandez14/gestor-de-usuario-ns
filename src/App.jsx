import { useState } from "react";
import styled from "@emotion/styled";
import useFormulario from "./hooks/useFormulario";

import Card from "./components/Card";
import Error from "./components/Error";
import Input from "./components/Input";
import Button from "./components/Button";


const Contenedor = styled.div`
  max-width: 700px ;
  margin: 0 auto;
`
const App = () => {
  const [usuarios, setUsuarios] = useState([])
  const [mensaje, setMensaje] = useState(false)
  const [formulario, handleChange, reset] = useFormulario({
    nombre: '',
    apellido: '',
    email: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(formulario).includes('')) {
      setMensaje(true)

      return;
    }
    setMensaje(false)
    setUsuarios([
      ...usuarios,
      formulario
    ])

    reset()

  }

  return (
    <Contenedor>
      <Card>
        <form onSubmit={handleSubmit}>
          {mensaje && <Error text='No puede haber campos vacios' />}
          <Input
            label='Nombre'
            type='text'
            placeholder='Nombre...'
            name='nombre'
            value={formulario.nombre}
            onChange={handleChange}
          />
          <Input
            label='Apellido'
            type="text"
            placeholder="Apellido..."
            name="apellido"
            value={formulario.apellido}
            onChange={handleChange}
          />
          <Input
            label='Email'
            type="email"
            placeholder="Email..."
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />

          <Button>enviar</Button>
        </form>
      </Card>
    </Contenedor>
  )
}

export default App;

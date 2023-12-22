import styled from "@emotion/styled";

import Card from "./components/Card";
import Input from "./components/Input";
import useFormulario from "./hooks/useFormulario";


const Contenedor = styled.div`
  max-width: 700px ;
  margin: 0 auto;
`
const App = () => {
  const [formulario, handleChange] = useFormulario({
    nombre: '',
    apellido: '',
    email: ''
  })

  return (
    <Contenedor>
      <Card>
        <form>
          <Input
            label='Nombre'
            type='text'
            placeholder='Nombre'
            name='nombre'
            value={formulario.nombre}
            onChange={handleChange}
          />
          <Input
            label='Apellido'
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={formulario.apellido}
            onChange={handleChange}
          />
          <Input
            label='Email'
            type="email"
            placeholder="Email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />
        </form>
      </Card>
    </Contenedor>
  )
}

export default App;

import Input from "./components/Input";
import useFormulario from "./hooks/useFormulario";
import styled from "@emotion/styled";

const App = () => {
  const [formulario, handleChange] = useFormulario({
    nombre: '',
    apellido: '',
    email: ''
  })

  return (
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
  )
}

export default App;

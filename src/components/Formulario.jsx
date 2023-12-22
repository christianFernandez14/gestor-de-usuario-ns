import { useState } from "react";
import useFormulario from "../hooks/useFormulario";


import Error from "./Error";
import Input from "./Input";
import Button from "./Button";

const Formulario = ({ usuarios, setUsuarios }) => {
  const [mensaje, setMensaje] = useState(false)

  const [formulario, handleChange, reset] = useFormulario({
    nombre: '',
    apellido: '',
    email: ''
  })


  const handleSubmit = e => {
    e.preventDefault()
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
  )
}

export default Formulario
import styled  from "@emotion/styled"

const Contenedor = styled.div`
  
`

const Usuario = ({ x }) => {
  const { nombre, apellido, email } = x

  return (
    <Contenedor>
      <h2>{nombre} {apellido}</h2> 
      <p>{email}</p>
    </Contenedor>
  )
}

export default Usuario
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 5px 10px;
  margin: 8px 4px;
  border-radius: 10px;
  transition: all .2s ease;

  h1{
    text-transform: capitalize;
  }

  h2{
    color: blue;
  }

  :hover{
    cursor: pointer;
    box-shadow: 1px 2px 5px rgb(0,0,0, .15);
  }
`
const Usuario = ({ usuario }) => {

  const { nombre, apellido, email } = usuario

  return (
    <Container>
      <h1>{nombre} {apellido}</h1>
      <h2>{email}</h2>
    </Container>
  )
}

export default Usuario
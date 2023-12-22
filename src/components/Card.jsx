import styled from "@emotion/styled"

const Contenedor = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;

`
const Card = ({ children }) => {
  return (
    <Contenedor>
      {children}
    </Contenedor>
  )
}

export default Card
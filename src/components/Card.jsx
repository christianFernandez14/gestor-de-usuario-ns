import styled from "@emotion/styled"

const Contenedor = styled.div`
  width: 50%;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(0,0,0, .15);
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
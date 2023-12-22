import styled from "@emotion/styled"

const Contenedor = styled.div`
  background-color: #b33f3f;
  color: #fff;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  padding: 8px 0;
  margin-bottom: 12px;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 1.2px;

`

const Error = ({ text}) => {
  return (
    <Contenedor>
      {text}
    </Contenedor>
  )
}

export default Error
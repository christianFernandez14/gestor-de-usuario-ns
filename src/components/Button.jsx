import styled from "@emotion/styled"

const ButtonCustom = styled.button`
  background-color: #2185D0;
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  border: none;  
  text-transform: capitalize;
  transition: all .35s ease-in-out;
  cursor: pointer;

  :hover{
    background-color: #1678c2;
  }

`
const Button = ({ children }) => {
  return (
    <ButtonCustom>
      {children}
    </ButtonCustom>
  )
}

export default Button
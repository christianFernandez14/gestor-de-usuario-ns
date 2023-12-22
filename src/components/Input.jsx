import styled from '@emotion/styled'

const Fild = styled.div`
  margin-bottom: 20px;

  label{
    display: block;
    margin: 0 0 5px 0;
    color: #222;
    font-weight: 700;
    font-size:  20px;
  }

  input{
    box-sizing: border-box;
    background-color: #fff;
    outline: none;
    border: 1px solid rgb(34,34,34, .15);
    border-radius: 10px;
    font-size: 20px;
    padding: 10px 15px;
    color: #222;
    width: 100%;
    
  }
`

const Input = ({ label, ...rest }) => {
  return (
    <Fild>
      <label htmlFor="">{label}</label>
      <input {...rest}/>
    </Fild>
  )
}

export default Input
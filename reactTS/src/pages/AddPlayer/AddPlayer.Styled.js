import Input from '../../components/Input/Input';
import styled from 'styled-components'
import Button from '../../components/Button';

export const InputStyled = styled(Input)`
  ::placeholder {
        color: #dee4e7;
    }
    width: 300px;
    height: 30px;
    font-size: 25px;   
`
export const InputPhotoStyled = styled(Input)`
    width: 300px;
    height: 30px;
    
`

export const FormStyled = styled.form`
  background-color: #798991;
  width: 400px;
  margin: auto;
  text-align: center;
  transform: translateY(20%);
  padding: 20px;
  border-radius: 10px;
  label{
      color: white;
    }
`
 

export  const ButtonStyled = styled(Button)`
  background-color: #3e4e56; 
  border: none;
  color: #e7eaeb;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none; 
  font-size: 16px; 
  border-radius: 4px;  
`

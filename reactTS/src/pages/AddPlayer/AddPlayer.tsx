 import { useState } from "react";
 import { gql, useMutation } from '@apollo/client';
import { InputStyled, FormStyled, ButtonStyled, InputPhotoStyled } from './AddPlayer.Styled';
 
const defaultFormData = {
  username: "",
  userId: "",
  nickname:'',
  country:'',
  photo:'',
  position:'',
  description:''
};

  const NEW_PLAYER= gql`
    mutation AddPlayer($type: String!) {
      addPlayer(type: $type) {
        name
        id
        nickname
        country
        photo
        position
        description
      }
    }
  `;
 const AddPlayer = () => {

  const [createPlayer, { data, loading, error }] = useMutation(NEW_PLAYER);


    // let input:any;
    // const [addUser, { data }] = useMutation(ADD_USER);
  
    // return (
    //   <div>
    //     <form
    //       onSubmit={e => {
    //         e.preventDefault();
    //         addUser({ variables: { type: input.value } });
    //         input.value = '';
    //       }}
    //     >
    //       <input
    //         ref={node => {
    //           input = node;
    //         }}
    //       />
    //       <button type="submit">Add Todo</button>
    //     </form>
    //   </div>
    // );

  

    const [formData, setFormData] = useState(defaultFormData);
    const { username, userId, nickname, country, photo, position, description } = formData;
    //const [nickname, setNickname] = useState('')
  
    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [e.target.id]: e.target.value,
    //   }));
    // };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      //setNickname(e.target.value)
      setFormData((prevState) => ({
        ...prevState, 
        [e.target.id]: e.target.value
      }))
    }
  
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(formData);
      createPlayer({ variables: { 
        name: formData.username,
        id: formData.userId,
        nickname: formData.nickname,
        country: formData.country,
        photo: formData.photo,
        position: formData.position,
        description: formData.description
       } });
      setFormData(defaultFormData)
    };

   return (
    <>
      <FormStyled onSubmit={onSubmit}>

        <InputStyled type={"text"} id={"username"} name={'username'} value={username} onChange={onChange} label={'username'} placeholder={'username'}/>
        <br />
        <InputStyled type={"text"} id={"userId"} name={'userId'} value={userId} onChange={onChange} label={'userId'} placeholder={'userId'}/>
        <br />
        <InputStyled type={"text"} id={"nickname"} name={'nickname'} value={nickname} onChange={onChange} label={'nickname'} placeholder={'nickname'}/>
        <br />
        <InputStyled type={"text"} id={"country"} name={'country'} value={country} onChange={onChange} label={'country'} placeholder={'country'}/>
        <br />
        <InputPhotoStyled type={"file"} id={"photo"} name={'photo'} value={photo} onChange={onChange} label={'photo'} placeholder={'photo'} accept={'image/jpeg'}/>
        <br />
        <InputStyled type={"text"} id={"position"} name={'position'} value={position} onChange={onChange} label={'position'} placeholder={'position'}/>
        <br />
        <InputStyled type={"text"} id={"description"} name={'description'} value={description} onChange={onChange} label={'description'} placeholder={'description'}/>
        <br />
        <br />
       
       <ButtonStyled label={'Create player'} type={'submit'} disabled={false} />
       </FormStyled>
     </>
    )
 }
 
 export default AddPlayer
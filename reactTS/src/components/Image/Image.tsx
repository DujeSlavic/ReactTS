import styled from 'styled-components'



//  const ImageStyled = styled(Image)`
//     height: 200px;
//     width: 400px;
//     object-fit: cover;
// `

//  const FlagStyle = styled(Image)`
//     /* border-radius:190px;
//     width: 60px;
//     height: 60px; */

//     display: inline-block;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background-position: center center;
//   /* background-size: 250%; */
    
// `

interface Props {
  url:any,
  className?:any

}

const Image = ({url, className}:Props) => (
  
    <img className={className} src={url}   alt="" />
  
)

export default Image
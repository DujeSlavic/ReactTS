import React from "react"

interface Props {
  children?: React.ReactNode,
  value: 'h1' | 'h2' | 'h3',
  text: string
}

const Title = ({value = "h1", text, children}:Props) => {
  switch(value) {
          case 'h2': return <h2>{text}</h2>  
          case 'h3': return <h3>{text}</h3> 
          case 'h1': return <h1>{text}</h1>       
        }
}  

export default Title
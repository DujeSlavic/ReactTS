import {AiOutlinePlus} from 'react-icons/ai'


interface Props {
  icon: string;
}

const Icon = ({icon}:Props) => {
    if (icon === 'plus') return <span className='icon'><AiOutlinePlus/></span>
    return <></>
}

export default Icon
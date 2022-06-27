//button, input, title, icon, image components!!!
interface Props {
    placeholder?: string,
    type:string,
    name:string,
    id?: string
    value?: string | number,
    onClick?: any,
    onKeyDown?: any,
    onChange?:any,
    className?:string,
    label?:string,
    accept?:'image/png' | 'image/gif' | 'image/jpeg'
}

const Input = ({className, placeholder, id, name, type, value, onClick, onChange, onKeyDown, label, accept}:Props) => (
    <>
        {
            (label) ? <><label>{label}</label><br/> </>: <></>
        }
        <input 
            className={className}
            placeholder={placeholder} 
            id={id} 
            name={name} 
            type={type}
            value={value}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onChange={onChange}
            accept={accept}/>
    </>
)

export default Input
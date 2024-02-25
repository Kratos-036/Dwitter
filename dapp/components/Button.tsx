type Props = {
    label: string
    onClick: () => void
}

const Button: React.FC<Props> = ({label, onClick}) => {
    return (
        <button className="py-3 px-7 bg-blue-500 text-white rounded-xl" 
        onClick={onClick}>
        {label}
        </button>
    )
}

export default Button
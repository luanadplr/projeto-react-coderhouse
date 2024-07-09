import FeatherIcon from "feather-icons-react"

export default function CartWidget(){
    const estiloSpan = {
        backgroundColor: 'rgb(240, 97, 121)',
        borderRadius: '100%',
        padding: '5px',
        fontSize: '10px',
        color: 'white'
    }
    return(
        <div>
            <FeatherIcon icon="shopping-cart"/>
            <span style={estiloSpan}>0</span>
        </div>
    )
}
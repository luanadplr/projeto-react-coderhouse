export default function ItemCount({contador, add, remove}){
    return(
        <div>
            <button onClick={remove}>-</button>
            <span>{contador}</span>
            <button onClick={add}>+</button>
        </div>
    )
}
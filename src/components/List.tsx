import {ReactNode}from 'react'

interface ListProps<T> {
    items:T[],
    render: (item: T) => ReactNode
}

//generictype can get a many datatype

const List = <Type,>({items,render}:ListProps<Type>) =>{
    return (
        <ul>
            {items.map((item, index)=>(
                <li key={index}>{render(item)}</li>
            ))}
        </ul>
    );
};
export default List;


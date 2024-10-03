import { ReactNode,useState } from "react"

type CounterProps ={
    setCount:React.Dispatch<React.SetStateAction<number>>;
    children:ReactNode;
    handleIncreaseCount: () => void;
    handleDecreaseCount: () => void;
};

function Counter({setCount,children,handleIncreaseCount,handleDecreaseCount,}:CounterProps){
    return (
        <>
            <div>{children}</div>
            <button onClick={() => setCount((prev)=>prev + 1)}>Increase</button>
            <button onClick={handleDecreaseCount}>Increase</button>

        </>
    );

}
export default Counter;

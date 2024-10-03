import { useState } from "react"


function Counter() {
    const [count,setCounter] = useState<number>(0);
    /*  const [username,setUsername] = useState<string>("");

        const handleIncreadeCount = () = >{
          setCount(count + 1);
         };  

        const handleDecreadeCount = () = >{
          setCount(count - 1);
         };  

    */
   // <button onClick={handleIncreaseCount}>Increase</button>
    //<button onClick={handleIncreaseCount}>Decrease</button>
  
  return (
    
    <>
        
        <div>{count}</div>
        <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>Decrease</button>

     

        
    </>
  );
  
}

export default Counter;

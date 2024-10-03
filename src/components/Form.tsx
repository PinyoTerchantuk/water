import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

type UserRegisterInputs = {
  water:number;

};

function Form() {
    const {register,handleSubmit} = useForm<UserRegisterInputs>();
    const [water,setWater] =useState<number>(0);

    const [dark,setDark] =useState<boolean>(0);

    
    
    const onSubmit = (data: React.FormEvent<HTMLFormElement>) =>{
      const  result = data.water * 2.2 * (30/2);
      console.log(result)
     

    }

    // const onDark = (data: React.FormEvent<HTMLFormElement>) =>{
    //    islogin =false
    //   return <>
    //             {isLogin? backgroundcolor:ddarak : backrgorund wgite}
    //       </>
     

    // }
    const [backgroundColor, setBackgroundColor] = useState<string>('white');

    // const onDark = () => {
    //   setDark((prevDark) => !prevDark);  // สลับสถานะระหว่างโหมดเข้มกับโหมดสว่าง
    // };
    // const changeBackgroundColor = () => {
  
    //   setBackgroundColor((prevColor) => (prevColor === 'white' ? 'dark' : 'white'));
    // };
    const changeBackgroundColor = () => {
      // เปลี่ยนสีพื้นหลังของทั้งหน้าเว็บ
      const newColor = backgroundColor === 'white' ? 'black' : 'white';  // สลับระหว่างขาวและดำ
      document.body.style.backgroundColor = newColor;  // เปลี่ยนสีพื้นหลังของ body
      setBackgroundColor(newColor);  // อัปเดต state
    };


  return (
    
   <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="">กรอกปริมาณนัำ:</label>
    <input {...register("water" , {required:true, maxLength:5})} type="text" id="water"/>

    <button onClick={handleSubmit(changeBackgroundColor)}></button>
    <input type="submit" />
    <button onClick={changeBackgroundColor}>
        {dark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดเข้ม'}
      </button>
   </form>

   
  )
}

export default Form

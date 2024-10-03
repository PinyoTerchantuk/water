import Login from "./Login";

function Dashboard() {
  const isLogin:boolean = false;
  {/*ถ้าTrueจะโชว์Dashboardถ้าไม่จะโชว์หน้าlogin จำลองการloginเปลี่ยนTuefalseเอา*/}

  return (
  <>
  <h1>Dashboard Page</h1>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt assumenda dolor tempore alias odio distinctio neque facere asperiores voluptates sunt quibusdam, at placeat ipsum minima! Corporis odio porro voluptas adipisci?
  
  {/*isLogin ? <h1>Dashboard</h1> : <h1>Logged Out</h1>*/}

  {isLogin ? <h1>Dashboard</h1> : <Login></Login>}
  {/*ให้เเสดงข้อมูลว่าถ้าLoginได้โชว์หน้าDashboard ถ้าไม่ใช่เเสดงปุ่มLogin>*/}
  </>
  );
}

  /*if (isLogin)
  {
    return <h1>dashboard</h1>
  }
  else{
    return <h1>Not Login</h1>
  }*/ 
 

  

export default Dashboard

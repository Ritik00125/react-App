import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("vivek kumar gond")
  // const [click , setClick] = useState(["mangoes , apples , banana , guvava"]);
  //console.log("click", click);
  const array = ["ritik , vivek , pradeep , shamshad , sabab , sushil"];
  console.log(array);


 
 const handle =()=>{
  if(name === "vivek kumar gond"){
    setName("ritik kumar yadav");
  }
  else {
    setName("vivek kumar gond")
  }
 }

  return (
    <>
    <p className='ritik' onClick={handle}>{name}</p>
   <center className='login'>
   <label htmlFor="text1">Enter your Email:</label>
    <input type="text" placeholder='Enter your Email' />
    <label htmlFor="password">Enter your password:</label>
    <input type="password" placeholder='Enter your password' />

    <button>Submit</button>
   </center>

   {
      array.map((value , index)=>{
        return (
           <p style={{backgroundColor:"red" , padding :"20px"}}>{value}</p>
        )
      })
   }
    </>
  )
}

export default App

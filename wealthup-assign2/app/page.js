"use client";
import {useState} from 'react';


export default function Home() { 
  const [code,setCode] = useState('');
  const [inp, setInp] = useState('');

  async function getCode(){
        const codeval = document.querySelector(".t3");

        const resp = await fetch('http://localhost:2000/api/getcode',{
          method : "GET",
          headers : {
            "Content-Type" : "application/json"
          }
        })
        
        if (resp.status === 200){
              const data = await resp.json();
              setCode(data.code);
        }
  }

 async function verify(){
    const resp = await fetch('http://localhost:2000/verifycode',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:{
          "Ucode" : inp
      }
    });
    const op = document.querySelector(".output");
    if (resp.status === 200){
            const data = await resp.json();
            op.innerHTML = data.status;
    }
  }

  return (
    <>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Architects+Daughter&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Merienda:wght@500&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Noto+Sans+Indic+Siyaq+Numbers&family=Nunito:wght@200&family=Pangolin&family=Poppins:wght@100&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Rubik+Scribble&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Single+Day&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
</style>
    <div className="block">
          <h2 className="t1">Assignment 2</h2>
          <h5 className="t2">Verify by entering the code.</h5>
          <br />
          <h5 className="t3">Code :</h5>
          <p className="code">{code}</p>
          
          <button className="b2" onClick={getCode}><svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512" className="refresh" ><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg></button>
          <input type="text" name="input" id="i1" maxLength={5} onChange={(data)=>{
            setInp(data.target.value);
          }} placeholder="Type here"/>
         
          <br />
          <button className="b1" onCLick={verify}>Verify</button>
          <h5 className="output"></h5>
    </div>
    </>
  )
}

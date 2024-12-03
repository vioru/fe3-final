import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal} from "../utils/global.context";
import { urlImg } from "../utils/urls";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContextGlobal();
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
             {/* Aqui deberias renderizar las cards */}

      {/* {urlImg.map((photo,)=>{
        <><img src={photo} alt="" /></>
      })} */}
        {state.data.map((data)=>(
           <Card key={data.id} data ={data} photo ={urlImg[data.id]} />
        ))}
       
   
      </div>
    </main>
  )
}

export default Home
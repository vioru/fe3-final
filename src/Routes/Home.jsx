import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal} from "../utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContextGlobal();
  console.log( "la t¿data " + state.data[1]);
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
             {/* Aqui deberias renderizar las cards */}
        {state.data.map((data)=>(
           <Card key={data.id} data ={data} />
        ))}
       
   
      </div>
    </main>
  )
}

export default Home
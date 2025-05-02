import React from 'react'
import Card from './Card'
import useFetch from './useFetch'

const Home = () => {

const{launches , pending , error} = useFetch('https://api.spacexdata.com/v4/launches');

return(

    <div className="home">
    { error && <div>{ error }</div> }
    { pending && <div>Loading...</div> }
    <Card/>
   <p>HELLO SPACEX</p>
  </div>
)

}
  

export default Home

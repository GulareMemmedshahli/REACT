import React from 'react'
import BacktoTop from '../backto'
import Data from '../data'
import Detail from '../detail'
import Discover from '../discover'
import Outblue from '../outoftheblue'
import Part2 from '../part2'


const Home = () => {
  
  return (
    <div>
        <Part2/>
     {/* <Detail/> */}
     <BacktoTop/>
     <Data/>
     <Outblue/>
     <Discover/>
    </div>
  )
}

export default Home

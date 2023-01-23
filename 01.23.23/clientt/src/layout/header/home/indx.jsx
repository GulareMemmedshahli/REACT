import React from 'react'
import Data from './data'
import Details from './details'
import Esas from './esas'
import Legal from './legal'
import Part3 from './part3'
import PracticePart from './practicepart'
const Home = () => {
  return (
    <div>
    <Esas/>
      <PracticePart/>
      <Part3/>
      <Data/>
      <Legal/>
      

    </div>
  )
}

export default Home
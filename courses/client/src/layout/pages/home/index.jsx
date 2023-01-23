
import React from 'react'
import BacktoTop from '../backtotop'
import Explore from '../explore'
import Educators from '../featured'
import Learning from '../learning'
import Profesional from '../profesional'
import Slider from '../slider'
import Slider2 from '../slider2'
import Take from '../take'

const Home = () => {
  return (
    <>
   
   <Learning/>
   <Slider/>
   <BacktoTop/>
    <Educators/>
    <Explore/>
    <Take/>
    <Slider2/>
    <Profesional/>
    </>
  )
}

export default Home

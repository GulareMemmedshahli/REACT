import React from 'react'
import Homepage from './homepage'
import HomePrograms from './homeprograms'
import Teachers from './teachers'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Homepage/>
      <HomePrograms/>
      <Teachers/>
    </div>
  )
}

export default Home
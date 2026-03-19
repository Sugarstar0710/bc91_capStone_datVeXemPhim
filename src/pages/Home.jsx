import React from 'react'
import Image from '../components/Home/Image'
import IntroduceCompany from '../components/Home/IntroduceCompany'

const Home = () => {
  return (
    <div className="biti's">
      <Image/>
      <div className="container shoesStore">
        <IntroduceCompany/>
      </div>
    </div>
  )
}

export default Home
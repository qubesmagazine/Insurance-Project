import React from 'react'
import TopHomePage from '../components/Toppage/TopHomePage'
import ImageGrid from '../components/ImageGrid/ImageGrid'
import ThirdHomepage from '../components/thirdhomepage/ThirdHomepage'
import FourthPage from '../components/FourthSection/FourthPage'
import LastPage from '../components/lastpage/LastPage'
import NavbarInsure from '../components/Navbar/NavbarInsure'







function Home() {
  return (
    <div>
      <NavbarInsure/>
    <TopHomePage />
    <ImageGrid/>
<FourthPage />
<ThirdHomepage/>
<LastPage/>
  
    </div>
  )
}

export default Home

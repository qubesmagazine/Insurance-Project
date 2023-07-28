import React from 'react'
import NavbarInsure from '../components/Navbar/NavbarInsure'
import TopHomePage from '../components/Toppage/TopHomePage'
import ImageGrid from '../components/ImageGrid/ImageGrid'
import FourthPage from '../components/FourthSection/FourthPage'
import ThirdHomepage from '../components/thirdhomepage/ThirdHomepage'
import LastPage from '../components/lastpage/LastPage'

function Blog() {
  return (
    <div>
        <NavbarInsure />
    <TopHomePage />
    <ImageGrid/>
<FourthPage />
<ThirdHomepage/>
<LastPage/>
      
    </div>
  )
}

export default Blog

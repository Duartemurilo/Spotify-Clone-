import React from 'react'
import { AuthContext } from '../AuthContext'
import Body from '../Component/Body/Body'
import Footer from '../Component/Footer'
import SideBar from '../Component/SideBar/SideBar'
import { useDataLayerValue } from '../DataLayer'
import { UseUnProtectPage } from '../Hooks/UseUnProtectPage'
import { HomeContainer } from '../Styles/Pages/HomePageStyles'

function HomePage() {
  const [{ token }] = useDataLayerValue()
  const { currentFooter } = React.useContext(AuthContext)

  UseUnProtectPage(token)

  return (
    <HomeContainer>
      <SideBar token={token} />
      <Body token={token} />
      {currentFooter && <Footer />}
    </HomeContainer>
  )
}

export default HomePage

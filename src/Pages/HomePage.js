import React, { useState } from 'react'
import { AuthContext } from '../AuthContext'
import Body from '../Component/Body/Body'
import Footer from '../Component/Footer'
import SideBar from '../Component/SideBar/SideBar'
import { useDataLayerValue } from '../DataLayer'
import { UseUnProtectPage } from '../Hooks/UseUnProtectPage'
import { HomeContainer } from '../Styles/Pages/HomePageStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function HomePage() {
  const [{ token }] = useDataLayerValue()
  const { currentFooter } = React.useContext(AuthContext)
  const [currentSideBar, setCurrentSideBar] = useState(false)

  const isActive = useMediaQuery('(max-width: 450px)')

  UseUnProtectPage(token)

  return (
    <HomeContainer>
      {isActive && currentSideBar === false ? (
        <></>
      ) : (
        <SideBar setCurrentSideBar={setCurrentSideBar} currentSideBar={currentSideBar} token={token} />
      )}

      <Body token={token} setCurrentSideBar={setCurrentSideBar} currentSideBar={currentSideBar} />
      {currentFooter && <Footer />}
    </HomeContainer>
  )
}

export default HomePage

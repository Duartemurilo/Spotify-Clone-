import React from 'react'
import Body from '../Component/Body/Body'
import SideBar from '../Component/SideBar/SideBar'
import { useDataLayerValue } from '../DataLayer'
import { UseUnProtectPage } from '../Hooks/UseUnProtectPage'
import { HomeContainer } from '../Styles/Pages/HomePageStyles'

function HomePage() {
  const [{ token }] = useDataLayerValue()

  UseUnProtectPage(token)

  return (
    <HomeContainer>
      <SideBar token={token} />
      <Body token={token} />
    </HomeContainer>
  )
}

export default HomePage

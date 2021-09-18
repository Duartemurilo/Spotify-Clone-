import {useEffect} from 'react' 
import {useHistory} from "react-router-dom"
import { goToHomePage} from '../Router/Ways'


export const UseProtectPage = (token) => {
  const history =useHistory()

  useEffect(()=>{

    if(token){
        goToHomePage(history)
    }
},[history,token])
} 
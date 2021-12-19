import { Wrapper, Content } from './style'
import MainLogo from 'assets/MainLogo.svg'

import moment from 'moment'
import 'moment/locale/pt-br'
import { useState, useEffect } from 'react'
import { clearInterval, setInterval } from 'timers'

export const Header = () => {
   const [data, setData] = useState('')
   const [hour, setHour] = useState('')

   useEffect(() => {
      const interval = setInterval(() => {
         const hourInterval = moment().format('HH[:]mm')
         const dataInterval = moment().format('D [de] MMMM')
         setHour(hourInterval)
         setData(dataInterval)
      }, 1000)

      return () => clearInterval(interval)
   }, [])
   return (
      <Wrapper>
         <img src={MainLogo} alt="logo" />
         <Content>
            <p className="title">
               {data} | {hour} UTC
            </p>
            <p className="subTitle">
               Dados de câmbio disponibilizados pela Morningstar.
            </p>
         </Content>
      </Wrapper>
   )
}

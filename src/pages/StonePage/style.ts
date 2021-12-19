import styled from 'styled-components'
import Mask from 'assets/Mask.png'

export const Wrapper = styled.div`
   display: flex;
   width: 100vw;
   height: 100vh;

   font-family: 'Roboto';
`

export const Content = styled.div`
   width: 100%;
   height: 100%;

   background-image: url(${Mask});
   background-size: 100% 100%;
`

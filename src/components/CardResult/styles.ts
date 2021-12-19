import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
   width: 400px;
   height: auto;

   position: absolute;
   top: 200px;
   left: 30px;
`

export const Content = styled.div`
   ${({ theme }) => css`
      width: 100%;
      height: auto;

      margin-top: 20px;

      > p.title {
         font-weight: 500;
         font-style: normal;
         font-size: 20px;
         line-height: 32px;
         color: ${theme.colors.main.darkBlackBody};
      }

      > h1.valueResult {
         font-size: 64px;
         line-height: 80px;
         color: ${theme.colors.main.stoneGreen};
      }

      > p {
         font-weight: 400;
         font-style: normal;
         font-size: 15px;
         line-height: 32px;
         color: ${theme.colors.main.mediumGrey};
      }
   `}
`

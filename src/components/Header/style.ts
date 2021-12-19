import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   width: 600px;
   height: 100px;

   position: absolute;
   top: 30px;
   left: 30px;
`

export const Content = styled.div`
   ${({ theme }) => css`
      width: 100%;
      margin: auto;
      text-align: center;

      p.title {
         font-weight: 500;
         font-style: normal;
         font-size: 18px;

         color: ${theme.colors.main.darkBlack};

         margin-bottom: 8px;
      }
      .subTitle {
         font-weight: 400;
         font-style: normal;
         font-size: 14px;
         color: ${theme.colors.main.mediumGrey};
      }
   `}
`

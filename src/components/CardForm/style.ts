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

      > form {
         > div.formBlock {
            display: flex;

            > div {
               margin-right: 24px;
            }
            > div p {
               margin-bottom: 10px;
            }
         }

         > p {
            font-weight: 500;
            font-style: normal;
            font-size: 18px;
            color: ${theme.colors.main.darkBlackBody};
         }

         > div.radioBlock {
            margin-top: 20px;

            > p {
               margin-bottom: 10px;
            }

            > div {
               width: 100%;
               height: auto;

               display: flex;

               margin-bottom: 15px;

               > div.radioButton {
                  display: flex;
               }
            }
         }
      }
   `}
`

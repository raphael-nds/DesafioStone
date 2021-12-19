import styled, { css } from 'styled-components'

type WrapperProps = {
   filled: boolean
   focused: boolean
   error: boolean
}

export const Wrapper = styled.div`
   flex: 1;
`

export const Input = styled.input<WrapperProps>`
   ${({ theme, focused, error }) => css`
      height: 45px;
      width: 150px;
      border: 1px solid #dedede;
      border-radius: ${theme.border.radius.sm};
      padding: ${theme.spacings.xsm} ${theme.spacings.sm};
      font-size: ${theme.font.sizes.md};
      line-height: 2.4rem;
      font-weight: 500;
      color: #081a30;
      outline: none;

      box-shadow: 0 5px 5px ${theme.colors.main.mediumGrey};

      ${focused &&
      css`
         border: 1px solid ${theme.colors.main.blue};
      `}
      ${error &&
      css`
         border: 1px solid ${theme.colors.alerts.red};
      `}
    &::placeholder {
         font-size: ${theme.font.sizes.md};
         line-height: 2.4rem;
         color: rgba(8, 26, 48, 0.4);
         font-weight: 500;
      }
   `}
`

export const Error = styled.span`
   ${({ theme }) => css`
      display: inline-block;
      font-size: ${theme.font.sizes.sm};
      color: ${theme.colors.alerts.red};
      margin-left: 1.2rem;
      margin-top: 4px;
   `}
`

export const Label = styled.div`
   ${({ theme }) => css`
      font-size: ${theme.font.sizes.xsm};
      color: ${theme.colors.main.grey};
      font-weight: 500;
      margin-bottom: 1.2rem;
      > span {
         color: ${theme.colors.alerts.red};
      }
   `}
`

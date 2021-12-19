/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css, DefaultTheme } from 'styled-components'
import { transparentize } from 'polished'
import { ButtonProps, ThemesButton } from '.'

const modifiers = {
   default: (themeDefault: DefaultTheme, themeButton: ThemesButton) => css`
      background: ${themeDefault.colors.main[themeButton]};

      transition: filter 0.2s ease;
      div.iconLeft {
         svg path {
            fill: ${themeDefault.colors.main.white};
         }
      }
      span.text {
         color: ${themeDefault.colors.main.white};
      }

      &:hover {
         filter: brightness(0.9);
      }
   `,
   ghost: (themeDefault: DefaultTheme, themeButton?: ThemesButton) => css`
      background: transparent;
      border: 1px solid ${themeDefault.colors.main.lightGrey};
      transition: background 0.2s ease;
      div.iconLeft {
         svg path {
            fill: ${themeDefault.colors.main.darkBlack};
         }
      }
      span.text {
         color: ${themeDefault.colors.main.darkBlack};
         font-weight: 600;
      }
      &:hover {
         background: ${themeDefault.colors.main.lightGrey};
         filter: brightness(0.9);
      }
   `
}

export const Wrapper = styled.button<
   Pick<
      ButtonProps,
      'typeButton' | 'width' | 'themeButton' | 'arrowRight' | 'isHiddenText'
   >
>`
   ${({
      theme,
      typeButton,
      width,
      themeButton,
      arrowRight,
      isHiddenText
   }) => css`
      box-shadow: 0 5px 5px ${theme.colors.main.lightGrey};
      border-radius: 8px;
      border: none;
      cursor: pointer;
      padding: 1.4rem;
      height: 44px;
      width: ${width};
      display: flex;
      align-items: center;
      justify-content: center;
      span.text {
         font-size: ${theme.font.sizes.md};
         line-height: 1.7rem;
      }

      div.iconLeft {
         margin-top: 2px;
         margin-right: ${isHiddenText ? '0' : '1.1rem'};
      }

      ${modifiers[typeButton!](theme, themeButton!)}
      ${arrowRight &&
      css`
         justify-content: flex-start;
         width: 100% !important;
         span.text {
            margin-left: auto;
         }
      `}
    &:disabled {
         opacity: 0.6;
         cursor: not-allowed;
      }
      &:hover {
         ${WrapperArrowRight} {
            background-image: linear-gradient(
               to right,
               ${transparentize(0.84, theme.colors.main.lightGrey)} 0%,
               ${transparentize(0.84, theme.colors.main.grey)} 100%,
               ${transparentize(0.84, theme.colors.main.white)} 20%,
               ${transparentize(0.84, theme.colors.main.white)} 100%
            );
            background-size: cover;
            animation: placeholderShimmer 15s linear infinite forwards;
         }
      }
      @keyframes placeholderShimmer {
         0% {
            background-position: -40rem 0;
         }
         100% {
            background-position: 40rem 0;
         }
      }
   `}
`

export const WrapperArrowRight = styled.div`
   ${({ theme }) => css`
      background: ${transparentize(0.84, theme.colors.main.white)};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      width: 34px;
      height: 34px;
      div.arrowRight {
         margin-top: 2px;
         margin-left: 2px;
      }
   `}
`

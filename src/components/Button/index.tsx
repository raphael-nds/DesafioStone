import { ButtonHTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'

import ArrowRight from 'assets/arrow-left-right.svg'

import * as S from './styles'

export type ThemesButton = 'stoneGreen' | 'lightGrey' | 'mediumGrey'

export type ButtonProps = {
   //full?: boolean
   iconLeft?: string
   arrowRight?: boolean
   children: React.ReactNode
   isLoading?: boolean
   typeButton?: 'default' | 'ghost'
   disabled?: boolean
   width: string
   themeButton?: ThemesButton
   isHiddenText?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
   // full,
   iconLeft,
   arrowRight = false,
   children,
   typeButton = 'default',
   isLoading = false,
   disabled,
   width,
   themeButton = 'stoneGreen',
   isHiddenText = false,
   ...rest
}: ButtonProps) => (
   <S.Wrapper
      //full={full}
      typeButton={typeButton}
      disabled={isLoading || disabled}
      width={width}
      themeButton={themeButton}
      arrowRight={arrowRight}
      isHiddenText={isHiddenText}
      {...rest}
   >
      {!isLoading && (
         <>
            {!!iconLeft && (
               <ReactSVG src={iconLeft} wrapper="div" className="iconLeft" />
            )}

            {!isHiddenText && (
               <>
                  <span className="text">{children}</span>
                  {arrowRight && (
                     <S.WrapperArrowRight>
                        <ReactSVG
                           src={ArrowRight}
                           wrapper="div"
                           className="arrowRight"
                        />
                     </S.WrapperArrowRight>
                  )}
               </>
            )}
         </>
      )}
   </S.Wrapper>
)

export default Button

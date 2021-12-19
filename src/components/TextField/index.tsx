/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
   forwardRef,
   InputHTMLAttributes,
   ForwardRefRenderFunction,
   useState
} from 'react'

import masks from 'utils/masks'

import * as S from './styles'

type MasksTypes = 'monetary' | 'percentage' | 'def'

export type TextFieldProps = {
   placeholder: string
   inputOnChange?: (value: string) => void
   defaultValue?: string
   error?: string
   mask?: MasksTypes
   inputOnFocus?: () => void
   inputOnBlur?: () => void
   label?: string
   isRequired?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
   {
      placeholder,
      inputOnChange,
      defaultValue,
      mask = 'def',
      error,
      inputOnFocus,
      inputOnBlur,
      label = '',
      isRequired = false,
      ...rest
   },
   ref
) => {
   const [value, setValue] = useState('')
   const [filled, setFilled] = useState(false)
   const [focused, setFocused] = useState(false)

   const handleOnFocus = () => {
      setFocused(true)

      !!inputOnFocus && inputOnFocus()
   }

   const handleOnBlur = () => {
      setFocused(false)
      setFilled(!!value)

      !!inputOnBlur && inputOnBlur()
   }

   const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.value = masks[mask!](event.currentTarget.value)
      setValue(masks[mask!](event.currentTarget.value))

      !!inputOnChange && inputOnChange(masks[mask!](event.currentTarget.value))
   }

   return (
      <S.Wrapper>
         {!!label && (
            <S.Label>
               {label} {isRequired && <span>*</span>}
            </S.Label>
         )}

         <S.Input
            filled={filled}
            focused={focused}
            error={!!error}
            placeholder={placeholder}
            onKeyUp={(event) => handleOnChange(event)}
            onFocus={() => handleOnFocus()}
            onBlurCapture={() => handleOnBlur()}
            ref={ref}
            {...(!!defaultValue && {
               defaultValue: masks[mask!](defaultValue)
            })}
            {...rest}
         />

         {!!error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
   )
}

export const TextField = forwardRef(InputBase)

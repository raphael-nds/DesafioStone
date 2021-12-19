import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
   onCheck?: (value?: RadioValue) => void
   label?: string
   labelFor?: string
   value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const RadioBase: React.ForwardRefRenderFunction<
   HTMLInputElement,
   RadioProps
> = ({ label, onCheck, labelFor = '', value, ...props }, ref) => {
   const onChange = () => {
      !!onCheck && onCheck(value)
   }

   return (
      <S.Wrapper>
         <S.Input
            id={labelFor}
            type="radio"
            value={value}
            onChange={onChange}
            ref={ref}
            {...props}
         />
         {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      </S.Wrapper>
   )
}

export const Radio = React.forwardRef(RadioBase)

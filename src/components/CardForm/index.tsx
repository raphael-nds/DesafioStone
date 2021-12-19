/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from 'components/TextField'
import { Radio } from 'components/Radio'
import Button from 'components/Button'

import { useData } from 'context/dataContext'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Wrapper, Content } from './style'
import ArrowsGroup from 'assets/arrow-left-right.svg'

export interface FormInputs {
   dollar: number
   percentage: number
   typePurchase: string
}

interface Props {
   dataItems: any
}

// VALIDAR CAMPOS
const schema = yup.object().shape({
   dollar: yup.string().required('Digite um valor em dólar. Ex: 15.00'),
   percentage: yup
      .string()

      .required('Digite o valor do imposto estadual. Ex: 5.30')
})

export const typesPurchase = [
   { label: 'Dinheiro', value: 'dinheiro' },
   { label: 'Cartão', value: 'cartão' }
]

export const CardForm = ({ dataItems }: Props) => {
   const { setController, setComponent, setState }: any = useData()

   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<FormInputs>({ resolver: yupResolver(schema) })

   //FUNCAO CONVERSAO DOS DADOS
   const onSubmit = (data: FormInputs) => {
      setController(data.typePurchase)

      const dollar = Number(data.dollar)
      const rate = Number(data.percentage)
      const bid = Number(dataItems.bid)

      if (data.typePurchase == 'dinheiro') {
         const resultMoneyWithIOF =
            (dollar + bid * (rate / 100)) * (bid + bid * 0.011)
         const resultMoneyWithoutIOF = (dollar + bid * (rate / 100)) * bid
         setState({
            resultMoneyWithIOF: resultMoneyWithIOF,
            resultMoneyWithoutIOF: resultMoneyWithoutIOF,
            rate: rate
         })
      } else {
         const resultCardWithIOF =
            (dollar + bid * (rate / 100) + 0.0638) * (bid + bid * 0.011)
         const resultCardWithoutIOF =
            (dollar + bid * (rate / 100) + 0.0638) * bid
         setState({
            resultCardWithIOF: resultCardWithIOF,
            resultCardWithoutIOF: resultCardWithoutIOF,
            rate: rate
         })
      }

      setComponent({ value: false })
   }

   return (
      <>
         {/* FORMULARIO PARA INSERIR DADOS DO CARD */}
         <Wrapper>
            <Content>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="formBlock">
                     <div>
                        <p>Dólar</p>
                        <TextField
                           placeholder="$"
                           isRequired
                           mask="monetary"
                           error={errors?.dollar?.message}
                           {...register('dollar')}
                        />
                     </div>

                     <div>
                        <p>Taxa do Estado</p>
                        <TextField
                           placeholder="%"
                           isRequired
                           mask="percentage"
                           error={errors?.percentage?.message}
                           {...register('percentage')}
                        />
                     </div>
                  </div>

                  <div className="radioBlock">
                     <p>Tipo de compra</p>
                     <div>
                        {typesPurchase.map((type) => (
                           <div style={{ padding: 10 }} key={type.value}>
                              <Radio
                                 label={type.label}
                                 labelFor={type.label}
                                 id={type.label}
                                 value={type.value}
                                 defaultChecked={type.value === 'dinheiro'}
                                 {...register('typePurchase')}
                              />
                           </div>
                        ))}
                     </div>
                  </div>

                  <Button
                     iconLeft={ArrowsGroup}
                     onSubmit={handleSubmit(onSubmit)}
                     width="150px"
                  >
                     Converter
                  </Button>
               </form>
            </Content>
         </Wrapper>
      </>
   )
}

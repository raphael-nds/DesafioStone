/* eslint-disable @typescript-eslint/no-explicit-any */
import { Wrapper, Content } from './styles'
import { useData } from 'context/dataContext'
import Button from 'components/Button'

import arrow from 'assets/arrow-left.svg'

interface Props {
   dataItems: any
}

export const CardResult = ({ dataItems }: Props) => {
   const { controller, state, setComponent }: any = useData()

   return (
      <Wrapper>
         <Button
            iconLeft={arrow}
            onClick={() => setComponent({ value: true })}
            typeButton="ghost"
            width="150px"
         >
            <span className="button">Voltar</span>
         </Button>

         {/* RESULTADOS */}
         <Content>
            <p className="title">O resultado do cálculo é:</p>
            <h1 className="valueResult">
               {`R$
               ${
                  controller == 'dinheiro'
                     ? state.resultMoneyWithIOF.toFixed(2)
                     : state.resultCardWithIOF.toFixed(2)
               }`}
            </h1>
            <p>
               Compra no {`${controller}`} e taxa estadual de{' '}
               {`${state.rate} %`}
            </p>
            <p>
               Cotação do dólar hoje: {`USD 1`} = {` R$ ${dataItems.bid}`}
            </p>
            <p>
               Taxa do IOF no{' '}
               {`${controller}:
               ${controller == 'dinheiro' ? '1,1 %' : '6,4 %'}`}
            </p>
            <p>
               Conversão sem IOF:
               {` R$ ${
                  controller == 'dinheiro'
                     ? state.resultMoneyWithoutIOF.toFixed(2)
                     : state.resultCardWithoutIOF.toFixed(2)
               }`}
            </p>
         </Content>
      </Wrapper>
   )
}

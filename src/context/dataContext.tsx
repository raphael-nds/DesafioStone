import { createContext, useContext, useState } from 'react'

export const dataContext = createContext({})

type Props = {
   children: React.ReactNode
}

export const DataProvider = ({ children }: Props) => {
   // CONTROLADOR PARA VERIFICAR OPCAO NO RADIO
   const [controller, setController] = useState(0)

   // ESTADO PARA ATUALIZAR COMPONENTE CARD - FORM E RESULT
   const [component, setComponent] = useState({
      value: true
   })

   // ESTADO PARA PROVER RESULTADO DA CONVERSAO
   const [state, setState] = useState({
      resultMoneyWithIOF: '',
      resultMoneyWithoutIOF: '',
      resultCardWithIOF: '',
      resultCardWithoutIOF: '',
      rate: ''
   })

   return (
      <dataContext.Provider
         value={{
            controller,
            setController,
            component,
            setComponent,
            state,
            setState
         }}
      >
         {children}
      </dataContext.Provider>
   )
}

export function useData() {
   const context = useContext(dataContext)

   return context
}

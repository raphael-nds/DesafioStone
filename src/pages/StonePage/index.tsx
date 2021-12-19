/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from 'service/api'
import { useQuery } from 'react-query'

import { Header } from 'components/Header'
import { Spinner } from 'components/Spinner'
import { CardForm } from 'components/CardForm'
import { CardResult } from 'components/CardResult'

import { Wrapper, Content } from './style'
import { useData } from 'context/dataContext'
import { ReactQueryDevtools } from 'react-query/devtools'

export const StonePage = () => {
   const { component }: any = useData()

   // CHAMADA NA API
   const getData = async () => {
      const { data } = await api.get('/last/USD-BRL')

      return data.USDBRL
   }

   // REACT QUERY PARA ARMAZENAR DADOS DA API
   const { error, isLoading } = useQuery('dataCache', getData)

   const data = useQuery('dataCache')

   const dataItems = data.data

   return (
      <>
         <Wrapper>
            <Header />
            {component.value == true ? (
               <CardForm dataItems={dataItems} />
            ) : (
               <CardResult dataItems={dataItems} />
            )}
            <Content />
         </Wrapper>
         {error && <div>mensagem error</div>}
         {isLoading && <Spinner />}
         <ReactQueryDevtools initialIsOpen={false} position="top-right" />
      </>
   )
}

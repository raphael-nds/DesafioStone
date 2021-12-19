import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StonePage } from 'pages/StonePage'

import { DataProvider } from 'context/dataContext'

export const App = () => {
   return (
      <BrowserRouter>
         <DataProvider>
            <Routes>
               <Route path="/" element={<StonePage />} />
            </Routes>
         </DataProvider>
      </BrowserRouter>
   )
}

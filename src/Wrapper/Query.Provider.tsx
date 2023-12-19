import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface QueryProviderProps{
  children: React.ReactElement
}
const queryClient = new QueryClient()

const QueryProvider:FC<QueryProviderProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default QueryProvider

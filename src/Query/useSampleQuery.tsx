import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import client from '../Service/client'

const useSampleQuery = () => {
    const { isLoading, error, data,refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: async() =>{
          const res = await client.get("/users/2");
          console.log()
          return  res.data
        }
          // fetch('https://jsonplaceholder.typicode.com/users/2').then(
          //   (res) => res.json(),
          // ),
      })
      return {isLoading, error, data, refetch}
}

export default useSampleQuery

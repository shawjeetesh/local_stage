import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

const useSampleQuery = () => {
    const { isLoading, error, data,refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://jsonplaceholder.typicode.com/users/2').then(
            (res) => res.json(),
          ),
      })
      return {isLoading, error, data, refetch}
}

export default useSampleQuery

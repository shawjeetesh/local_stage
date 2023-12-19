import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users'
    }),
    addUser: builder.mutation({
      query: ({ name }) => ({
        url: '/users',
        method: 'POST',
        body: { name }
      })
    }),
    updateUser: builder.mutation({
      query: ({ id, name }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: { name }
      })
    }),
    deleteUser: builder.mutation({
      query: id => ({
        url: `/users/${id}`,
        method: 'DELETE'
      })
    })
  })
});
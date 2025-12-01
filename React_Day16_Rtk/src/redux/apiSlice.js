import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Slices => actions + reducers
// Api Slice => custom hooks + caching + auto fetching + auto re-fetching + reducer + middleware + subscribe
//fetchBaseQuery => base url + headers + prepare headers , response from api , error handling

const api = createApi({
  reducerPath : "api",
  baseQuery : fetchBaseQuery({
    baseUrl : "https://jsonplaceholder.typicode.com/",
  }),

  endpoints : (builder) => ({ 
    getUsers : builder.query({ // query = GET ,mutation = POST , PUT , DELETE
      query : () => "/users"
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = api; // auto generated custom hooks
export default api;
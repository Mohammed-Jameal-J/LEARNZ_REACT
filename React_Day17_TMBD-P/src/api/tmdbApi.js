import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY
const tmdbBaseUrl = import.meta.env.VITE_TMDB_BASE_URL

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: tmdbBaseUrl
    }),

    endpoints: (builder) => ({
        getMovies: builder.query({
            query: ({ page = 1, query = '', genreId = '' }) => {
                const url = query
                    ? `search/movie?query=${query}&page=${page}` 
                    : `discover/movie?page=${page}&with_genres=${genreId}`

                return `${url}&api_key=${tmdbApiKey}`
            }
        }),
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`
        })
    })
})

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
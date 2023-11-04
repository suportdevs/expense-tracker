import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUri = "http://localhost:5000/";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUri }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      // get: http://localhost:5000/category
      query: () => "/category",
      providesTags: ["categories"],
    }),
    storeCategory: builder.mutation({
      query: (initialCategory) => ({
        url: "category",
        method: "POST",
        body: initialCategory,
      }),
      invalidatesTags: ["categories"],
    }),
    getTransactions: builder.query({
      // get: http://localhost:5000/transaction
      query: () => "/transaction",
      providesTags: ["transactions"],
    }),
    getTransactionLabels: builder.query({
      // get: http://localhost:5000/transaction/labels
      query: () => "/transaction/label",
      providesTags: ["transactions"],
    }),
    storeTransaction: builder.mutation({
      // get: http://localhost:5000/transaction
      query: (initialTransaction) => ({
        url: "/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transactions"],
    }),
    deleteTransaction: builder.mutation({
      // get: http://localhost:5000/transaction/:id
      query: (id) => ({
        url: "/transaction/" + id,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["transactions"],
    }),
  }),
});

export default apiSlice;

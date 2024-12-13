import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = "http://localhost:8800/api";

const baseQuery = fetchBaseQuery({ baseUrl: API_URI });

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    /* --- USER SERVICES */
    // log in
    login: builder.mutation({
      query: (data) => ({
        url: 'user/login',
        method: "POST",
        body: data,
      }),
    }),
    // log out
    logout: builder.mutation({
      query: () => ({
        url: 'user/logout',
        method: "POST",
      }),
    }),
    // register 
    // get-team (AUTH + ADMIN)
    // notifications (AUTH)
    // profile (AUTH)
    // read-noti (AUTH)
    // change-password (AUTH)
    // activateUserProfile (AUTH + ADMIN)
    // deleteUserProfile (AUTH + ADMIN)
  }),
  endpoints: (builder) => ({
    /* --- USER SERVICES --- */
    // loginUser
    login: builder.mutation({
      query: (data) => ({
        url: 'user/login',
        method: "POST",
        body: data,
      }),
    }),
    // logoutUser
    logout: builder.mutation({
      query: () => ({
        url: 'user/logout',
        method: "POST",
      }),
    }),
    // registerUser 
    // getTeamList
    // getNotificationsList
    // updateUserProfile
    // markNotificationRead
    // changeUserPassword
    // activateUserProfile
    // deleteUserProfile

    /* --- TASK SERVICES --- */
    // createTask
    // duplicateTask
    // postTaskActivity
    // dashboardStatistics
    // getTasks
    // getTask
    // createSubTask
    // updateTask
    // trashTask
    // deleteRestoreTask
  }),
});

export const { useLoginMutation, useLogoutMutation } = apiSlice
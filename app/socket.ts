"use client";

import { io } from "socket.io-client";

// const URL = "https://farminsights-staging.onrender.com/messages";
const URL = "https://farminsights-staging.onrender.com/messages";

export const socket = io(URL, {
  auth: {
    token: localStorage.getItem("token"),
  },
  reconnection: true,
});
console.log(localStorage.getItem("token"))
import axios from "axios"

import { baseUrl } from "../consts"

export const axiosInstance = axios.create({
  baseURL: baseUrl,
})

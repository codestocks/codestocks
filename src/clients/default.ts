import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import axiosRetry from 'axios-retry'

export default class DefaultClient {
  protected http: AxiosInstance

  constructor(private baseURL: string, private config?: AxiosRequestConfig) {
    this.http = axios.create({
      ...this.config,
      baseURL: this.baseURL,
    })

    axiosRetry(this.http, {
      retries: 3,
    })
  }
}

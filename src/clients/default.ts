import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import axiosRetry from 'axios-retry'

export default class DefaultClient {
  protected http: AxiosInstance

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.http = axios.create({
      baseURL,
      ...config,
    })

    axiosRetry(this.http, {
      retries: 3,
    })
  }
}

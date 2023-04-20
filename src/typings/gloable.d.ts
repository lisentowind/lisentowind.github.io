interface HttpResponse<T = unknown> {
    status: number
    msg: string
    code: number
    data: T
    result: T
    statusText: string
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders
    config: AxiosRequestConfig
}
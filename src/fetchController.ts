export type JsonPrimitives = Record<string, unknown> | string | number | boolean;
export type ResponsePromise = JsonPrimitives | JsonPrimitives[];
export type ResponseResolver = (response: Response) => Promise<ResponsePromise>;
export type HeaderResolver = (url: string, accessToken?: string) => Promise<Headers>;

export interface FetchOptions {
    headersResolver: HeaderResolver;
    responseResolver: ResponseResolver;
}

const defaultHeadersResolver: HeaderResolver = (url: string, accessToken?: string) => {
    const headers = new Headers();

    if (url === '/api/token') {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    } else {
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${accessToken}`);
    }

    return Promise.resolve(headers);
};

const defaultResponseResolver: ResponseResolver = async (response: Response) => {
    const responseBody = await response.text();
    const responseJson = responseBody ? JSON.parse(responseBody) : {};

    switch (response.status) {
        case 401:
            throw new Error(
                responseJson && responseJson.error_description
                    ? String(responseJson.error_description)
                    : 'The token is invalid/expired',
            );
        case 200:
        case 204:
            return responseJson;
        case 400:
        case 500:
            return {
                error: responseJson.Message,
            };
        case 404:
            return {
                error: responseJson,
            };
        default:
            return {
                error: 'Something went wrong, please try again',
            };
    }
};

export const enum RequestMethod {
    Post = 'POST',
    Get = 'GET',
    Put = 'PUT',
    Delete = 'DELETE',
}

export async function getRequest(
    url: string,
    accessToken: string,
    requestMethod: RequestMethod,
    requestBody: BodyInit,
    headersResolver: HeaderResolver,
): Promise<Request> {
    const init: RequestInit = {
        body: requestBody ? requestBody : null,
        headers: await headersResolver(url, accessToken),
        method: requestMethod,
    };

    return new Request(url, init);
}

export async function getResponse(
    url: string,
    accessToken: string,
    requestMethod = RequestMethod.Get,
    requestBody?: BodyInit,
    headersResolver?: HeaderResolver,
): Promise<Response> {
    const request = await getRequest(url, accessToken, requestMethod, requestBody, headersResolver ?? defaultHeadersResolver);
    return fetch(request);
}

export async function requestController(
    options: FetchOptions,
    url: string,
    accessToken?: string,
    requestMethod?: RequestMethod,
    requestBody?: BodyInit,
): Promise<ResponsePromise> {
    const response = await getResponse(url, accessToken, requestMethod, requestBody, options.headersResolver);

    return await options.responseResolver(response);
}

export const defaultOptions: FetchOptions = {
    headersResolver: defaultHeadersResolver,
    responseResolver: defaultResponseResolver,
};

export function createFetchController(
    options: FetchOptions,
): (
    url: string,
    accessToken?: string,
    requestMethod?: RequestMethod,
    requestBody?: BodyInit,
) => Promise<ResponsePromise> {
    options = Object.assign({}, defaultOptions, options);

    return async (
        url: string,
        accessToken: string,
        requestMethod: RequestMethod,
        requestBody?: BodyInit,
    ): Promise<ResponsePromise> => requestController(options, url, accessToken, requestMethod, requestBody);
}

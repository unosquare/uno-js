export type ResponsePromise = object | string | number | boolean | any[];

function defaultHeadersResolver(url: string, accessToken: string): Headers {
    const headers = new Headers();

    if (url === '/api/token') {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    } else {
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
}

async function defaultResponseResolver(response: Response): Promise<ResponsePromise> {
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
}

export const enum RequestMethod {
    Post = 'POST',
    Get = 'GET',
    Put = 'PUT',
    Delete = 'DELETE',
}

export interface InitRequest {
    method: string;
    headers: Headers;
    body: any;
}

export function getRequest(
    url: string,
    accessToken: string,
    requestMethod: RequestMethod,
    requestBody: BodyInit,
    headersResolver: (url: string, accessToken: string) => Headers,
): Request {
    const init: RequestInit = {
        body: requestBody ? requestBody : null,
        headers: headersResolver(url, accessToken),
        method: requestMethod,
    };

    return new Request(url, init);
}

export function getResponse(
    url: string,
    accessToken: string,
    requestMethod = RequestMethod.Get,
    requestBody?: BodyInit,
    headersResolver?: (url: string, accessToken: string) => Headers,
): Promise<Response> {
    const request = getRequest(url, accessToken, requestMethod, requestBody, headersResolver ?? defaultHeadersResolver);
    return fetch(request);
}

export async function requestController(
    url: string,
    accessToken: string,
    requestMethod: RequestMethod,
    options: {
        headersResolver?: (url: string, accessToken: string) => Headers;
        responseResolver?: (response: Response) => Promise<ResponsePromise>;
    },
    requestBody?: BodyInit,
): Promise<ResponsePromise> {
    const response = await getResponse(url, accessToken, requestMethod, requestBody, options.headersResolver);

    return await options.responseResolver(response);
}

export const defaultOptions = {
    headersResolver: defaultHeadersResolver,
    responseResolver: defaultResponseResolver,
};

export function createFetchController(options: {
    headersResolver?: (url: string, accessToken: string) => Headers;
    responseResolver?: (response: Response) => Promise<ResponsePromise>;
}): (
    url: string,
    accessToken: string,
    requestMethod: RequestMethod,
    requestBody?: BodyInit,
) => Promise<ResponsePromise> {
    options = Object.assign({}, defaultOptions, options);

    return async (
        url: string,
        accessToken: string,
        requestMethod: RequestMethod,
        requestBody?: BodyInit,
    ): Promise<ResponsePromise> => requestController(url, accessToken, requestMethod, options, requestBody);
}

export type JsonPrimitives = Record<string, unknown> | string | number | boolean;
export type ResponsePromise = JsonPrimitives | JsonPrimitives[];
export type ResponseResolver = (response: Response) => Promise<ResponsePromise>;
export type HeadersData = Record<string, () => Promise<string>>;

export interface FetchOptions {
    responseResolver: ResponseResolver;
}

const resolveHeaders = async (headersData?: HeadersData) => {
    const headers = new Headers();

    if (headersData) {
        for (const i of Object.keys(headersData)) {
            // eslint-disable-next-line
            headers.append(i, await headersData[i]());
        }
    }

    return headers;
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

export enum RequestMethod {
    Post = 'POST',
    Get = 'GET',
    Put = 'PUT',
    Delete = 'DELETE',
}

export async function getRequest(
    url: string,
    requestMethod: RequestMethod,
    requestBody: BodyInit,
    headersData: HeadersData,
): Promise<Request> {
    const init: RequestInit = {
        body: requestBody || null,
        headers: await resolveHeaders(headersData),
        method: requestMethod,
    };

    return new Request(url, init);
}

export async function getResponse(
    url: string,
    requestMethod?: RequestMethod,
    requestBody?: BodyInit,
    headersData?: HeadersData,
): Promise<Response> {
    const request = await getRequest(url, requestMethod || RequestMethod.Get, requestBody, headersData);
    return fetch(request);
}

export async function requestController(
    responseResolver: ResponseResolver,
    url: string,
    requestMethod?: RequestMethod,
    requestBody?: BodyInit,
    headersData?: HeadersData,
): Promise<ResponsePromise> {
    const response = await getResponse(url, requestMethod, requestBody, headersData);
    return responseResolver(response);
}

export function createFetchController(
    responseResolver?: ResponseResolver,
): (url: string, requestMethod?: RequestMethod, requestBody?: BodyInit) => Promise<ResponsePromise> {
    return (url: string, requestMethod: RequestMethod, requestBody?: BodyInit): Promise<ResponsePromise> =>
        requestController(responseResolver || defaultResponseResolver, url, requestMethod, requestBody);
}

import fetch from 'jest-fetch-mock';
import { createFetchController, defaultOptions } from '../src/fetchController';

describe('createFetchController', () => {

    const requestController = createFetchController(defaultOptions);

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('Calls invalid url and returns error from body', async ()=>{
        fetch.once(async () => ({
            status: 200
        }));

        const response: any = await requestController('/api/token');
        expect(response.Message).toBeUndefined();

        expect(fetch.mock.calls.length).toEqual(1);
    });

    it.each([200, 204])('Calls %s and returns data', async (httpStatus)=>{
        fetch.once(async () => ({
            status: httpStatus,
            body: JSON.stringify({ Message: 'HELLO' }),
        }));

        const response: any = await requestController('https://google.com');
        expect(response.Message).toEqual('HELLO');

        expect(fetch.mock.calls.length).toEqual(1);
    });

    it.each([400, 500])('Calls %s and returns data', async (httpStatus)=>{
        fetch.once(async () => ({
            status: httpStatus,
            body: JSON.stringify({ Message: 'Error' }),
        }));

        const response: any = await requestController('https://google.com');
        expect(response.error).toEqual('Error');

        expect(fetch.mock.calls.length).toEqual(1);
    });

    it('Calls invalid url and returns error from body', async () => {
        fetch.once(async () => ({
            status: 401,
            body: JSON.stringify({ error_description: 'Error' }),
        }));

        await expect(requestController('https://error.com')).rejects.toThrow('Error');

        expect(fetch.mock.calls.length).toEqual(1);
    });

    it('Calls invalid url and returns error from body', async ()=>{
        fetch.once(async () => ({
            status: 404,
            body: JSON.stringify({ Message: 'Not Found' }),
        }));

        const response: any = await requestController('https://error.com');
        expect(response.error.Message).toEqual('Not Found');

        expect(fetch.mock.calls.length).toEqual(1);
    });

    it('Calls invalid url and returns error Something went wrong, please try again', async ()=>{
        fetch.once(async () => ({
            status: 1,
            body: JSON.stringify({})
        }));

        const response: any = await requestController('https://error.com');
        expect(response.error).toEqual('Something went wrong, please try again');

        expect(fetch.mock.calls.length).toEqual(1);
    });
});

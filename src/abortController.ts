let abortController: AbortController;

export const setAbortController = (ac: AbortController) => {
    abortController = ac;
};

export const getAbortController = () => abortController || new AbortController();
export const onEnterKey =
    (callback: () => void) =>
    (ev: { keyCode: number }): void => {
        if (ev.keyCode === 13) {
            callback();
        }
    };

export const asyncOnEnterKey =
    (callback: () => Promise<void>) =>
    async (ev: { keyCode: number }): Promise<void> => {
        if (ev.keyCode === 13) {
            await callback();
        }
    };

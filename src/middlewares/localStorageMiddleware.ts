export const storageMiddleware = (store:any) => (next:any) => (action:any) => {
    const state = store.getState();
    localStorage.setItem(`lastAuthedUser`, JSON.stringify(state.authorizedUser , null, 2));
    const result = next(action);
    return result;
    };
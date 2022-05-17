export interface InitialStateType {
    status: null | 'Rejected' | 'Fulfilled' | 'Pending';
    userData: object;
    requestErrors: object;
    isAuthenticated: boolean;
}

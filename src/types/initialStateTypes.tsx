export interface InitialStateType {
    status: null | 'Rejected' | 'Fulfilled' | 'Pending';
    data: object;
    requestErrors: object;
    isAuthenticated: boolean;
}

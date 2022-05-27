export interface InitialStateType {
    status: null | 'Rejected' | 'Fulfilled' | 'Pending';
    data: object;
    requestErrors: object;
    isAuthenticated: boolean;
    token: string;
    client: string;
}

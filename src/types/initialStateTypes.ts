export interface InitialStateType {
    status: null | 'Rejected' | 'Fulfilled' | 'Pending';
    data: {[key: string]: string};
    requestErrors: {[key: string]: string[]};
    isAuthenticated: boolean;
    token: string;
    client: string;
}

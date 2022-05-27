export interface SignUpInputsType {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: 'male' | 'female' | 'other';
}

export interface LogInInputsType {
    email: string;
    password: string;
}

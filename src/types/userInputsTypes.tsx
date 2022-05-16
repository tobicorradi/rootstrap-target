export interface SignUpInputsType {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: 'male' | 'female' | 'other';
}

export interface LogInInputsType {
    email: string;
    password: string;
}

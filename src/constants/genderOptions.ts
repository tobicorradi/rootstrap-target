interface Gender {
    id: number;
    text: string;
    value: string;
}

export const genderOptions: Array<Gender> = [
  { id: 1, text: 'Male', value: 'male' },
  { id: 2, text: 'Female', value: 'female' },
  { id: 3, text: 'Other', value: 'other' },
];

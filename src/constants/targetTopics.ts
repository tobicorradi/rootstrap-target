interface Topic {
    id: number;
    icon: string;
    text: string;
    value: string;
}
// TODO: Replace with Topics from API
const TargetTopics: Array<Topic> = [
  {
    id: 1,
    icon: 'test.svg',
    text: 'Football',
    value: 'football',
  },
];

export default TargetTopics;

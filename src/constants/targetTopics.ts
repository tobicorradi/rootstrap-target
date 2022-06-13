interface Topic {
    id: number;
    icon: string;
    text: string;
    value: number;
}
// TODO: Replace with Topics from API
const TargetTopics: Array<Topic> = [
  {
    id: 1,
    icon: 'test.svg',
    text: 'Football',
    value: 3,
  },
];

export default TargetTopics;

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, InputField, SelectInput } from '../../components/common';
import { TargetTopics } from '../../constants';
import { createTargetSchema } from '../../schemas';
import { CreateTargetTypes } from '../../types/createTargetTypes';

const CreateTarget = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTargetTypes>({ resolver: yupResolver(createTargetSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8">
      <div>Specify area length</div>
      <InputField
        id="area"
        type="number"
        label="Specify area length"
        placeholder="200m"
        register={register('area')}
        error={errors.area?.message}
      />
      <InputField
        id="title"
        type="text"
        label="Target Title"
        placeholder="Choose a title for your target"
        register={register('title')}
        error={errors.title?.message}
      />
      <SelectInput
        id="topic"
        label="Select a topic"
        placeholder="What do you want to talk about?"
        optionValues={TargetTopics}
        register={register('topic')}
        error={errors.topic?.message}

      />
      <Button text="Save Target" type="submit" variant="primary" />
    </form>
  );
};
export default CreateTarget;

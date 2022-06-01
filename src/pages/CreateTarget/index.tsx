import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, InputField, SelectInput } from '../../components/common';
import { TargetTopics } from '../../constants';
import { createTargetSchema } from '../../schemas';
import { newTargetFormData } from '../../state/actions/targetAction';
import { CreateTargetTypes } from '../../types/createTargetTypes';

const CreateTarget = () => {
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateTargetTypes>({ resolver: yupResolver(createTargetSchema) });

  const onSubmit: SubmitHandler<CreateTargetTypes> = (data) => {
    console.log(data);
  };

  const handleChange = (e) => {
    dispatch(newTargetFormData(e.target.value));
    setValue('radius', e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8">
      <div>Specify area length</div>
      <Controller
        control={control}
        name="radius"
        render={() => (
          <InputField
            id="radius"
            type="number"
            label="Specify area length"
            placeholder="200m"
            onChange={handleChange}
            error={errors.radius?.message}
          />
        )}
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

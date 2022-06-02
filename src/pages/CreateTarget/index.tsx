import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, InputField, SelectInput } from '../../components/common';
import { RouterPaths, TargetTopics } from '../../constants';
import { createTargetSchema } from '../../schemas';
import { newTargetFormData } from '../../state/actions/targetAction';
import { newTargetSelector } from '../../state/reducers/targetReducer';
import { CreateTargetTypes } from '../../types/createTargetTypes';

const CreateTarget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lat, lng } = useSelector(newTargetSelector);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateTargetTypes>({ resolver: yupResolver(createTargetSchema) });

  useEffect(() => {
    register('lng');
    register('lat');
  }, []);

  useEffect(() => {
    setValue('lng', lng);
    setValue('lat', lat);
  }, [lat, lng]);

  const onSubmit: SubmitHandler<CreateTargetTypes> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    navigate(RouterPaths.HOME);
  };

  const handleChange = (e: { target: { value: string; }; }) => {
    dispatch(newTargetFormData(e.target.value));
    setValue('radius', e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8">
      <div>Specify area length</div>
      <InputField
        id="radius"
        type="number"
        label="Specify area length"
        placeholder="200m"
        onChange={handleChange}
        error={errors.radius?.message}
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

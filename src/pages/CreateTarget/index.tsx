import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { targetSectionIcon } from '../../assets';
import { Button, InputField, SelectInput } from '../../components/common';
import { RequestStatus, RouterPaths, TargetTopics } from '../../constants';
import { createTargetSchema } from '../../schemas';
import { newTargetFormData, create, list } from '../../state/actions/targetAction';
import { newTargetSelector, statusSelector } from '../../state/reducers/targetReducer';
import { AppDispatch } from '../../state/store';
import { TargetTypes } from '../../types/TargetTypes';

const CreateTarget = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(statusSelector);
  const { lat, lng } = useSelector(newTargetSelector);
  const isRequestLoading = useMemo(() => status === RequestStatus.PENDING, [status]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TargetTypes>({ resolver: yupResolver(createTargetSchema) });

  useEffect(() => {
    register('lng');
    register('lat');
  }, []);

  useEffect(() => {
    setValue('lng', lng);
    setValue('lat', lat);
  }, [lat, lng]);

  const onSubmit: SubmitHandler<TargetTypes> = async (data) => {
    await dispatch(create(data)).unwrap();
    dispatch(list());
    navigate(RouterPaths.HOME);
  };

  const handleChange = (e: { target: { value: string; }; }) => {
    dispatch(newTargetFormData(e.target.value));
    setValue('radius', +e.target.value);
  };

  if (isRequestLoading) {
    // TODO: Replace this with a component/loeader svg
    return <div className="h-full">Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full space-y-8">
      <div className="mb-4">
        <img className="mx-auto mb-3" src={targetSectionIcon} alt="" />
        <h4 className="uppercase text-separated">Create new target</h4>
      </div>
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
        register={register('topic_id')}
        // TODO: Get topics from API
        error={errors.topic_id?.message}
      />
      <Button text="Save Target" type="submit" variant="primary" />
    </form>
  );
};
export default CreateTarget;

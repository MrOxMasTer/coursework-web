'use client';

import { Action } from '@/shared/ui/Action';
import { Field } from '@/shared/ui/Field';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const RegisterForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  // const {
  //   form: {
  //     register,
  //     trigger,
  //     formState: { touchedFields, errors, isDirty },
  //   },
  //   action: {
  //     isPending,
  //     result: { validationErrors },
  //   },
  //   handleSubmitWithAction,
  // } = useHookFormAction(signUpAction, resolverSignUp, {
  //   formProps: {
  //     defaultValues: {
  //       email: initialEmail,
  //       password: '',
  //       confirmPassword: '',
  //     },
  //     mode: 'onTouched',
  //     reValidateMode: 'onChange',
  //     shouldFocusError: true,
  //   },
  //   actionProps: {
  //     onError: ({ error }) => {
  //       if (error.serverError) toast(error.serverError.message);
  //       if (error.validationErrors?.formErrors)
  //         toast(error.validationErrors.formErrors[0]);
  //     },
  //     onSuccess: () => {
  //       toast('You have successfully created the user');
  //     },
  //   },
  // });

  // const errorEmail = getError('email', errors, validationErrors);
  // const errorPassword = getError('password', errors, validationErrors);
  // const errorConfirmPassword = getError(
  //   'confirmPassword',
  //   errors,
  //   validationErrors,
  // );

  // const isDisabledButton = !isDirty || isPending;

  const handleClickVisiblePassword = () => setVisiblePassword((prev) => !prev);

  const handleClickVisibleConfirmPassword = () =>
    setVisibleConfirmPassword((prev) => !prev);

  return (
    <form
      // @ts-ignore
      // action={signUpAction}
      className="mt-5"
      // onSubmit={handleSubmitWithAction}
    >
      <Field
        variant="outline"
        // aria-invalid={!!errorEmail}
        aria-describedby="error_email"
        autoComplete="email"
        type="email"
        inputMode="email"
        placeholder="example@mail.com"
        // pattern={emailPattern}
        required
        // {...register('email', { required: true })}
      />

      <Field
        variant="outline"
        type={visiblePassword ? 'text' : 'password'}
        // aria-invalid={!!errorPassword}
        aria-describedby="error_password"
        placeholder="Password"
        autoComplete="new-password"
        required
        className="mt-5"
        rightContent={
          <button
            className="text-silver-chalice rounded-full hover:bg-mercury"
            type="button"
            onClick={handleClickVisiblePassword}
          >
            {visiblePassword ? (
              <Eye className="p-0.5" />
            ) : (
              <EyeOff className="p-0.5" />
            )}
          </button>
        }

        // {...register('password', {
        //   required: true,
        //   // The approach of pure instructions
        //   // FIXME: `validate`: https://github.com/react-hook-form/react-hook-form/issues/12747
        //   onChange: async () => {
        //     if (touchedFields.confirmPassword) {
        //       await trigger('confirmPassword', { shouldFocus: false });
        //     }
        //   },
        // })}
      />

      <Field
        variant="outline"
        type={visibleConfirmPassword ? 'text' : 'password'}
        // aria-invalid={!!errorConfirmPassword}
        aria-describedby="error_password"
        placeholder="Confirm password"
        autoComplete="current-password"
        required
        className="mt-5"
        rightContent={
          <button
            className="text-silver-chalice rounded-full hover:bg-mercury"
            type="button"
            onClick={handleClickVisibleConfirmPassword}
          >
            {visibleConfirmPassword ? (
              <Eye className="p-0.5" />
            ) : (
              <EyeOff className="p-0.5" />
            )}
          </button>
        }
        // {...register('confirmPassword', {
        //   required: true,
        //   onChange: async () => {
        //     await trigger('password', { shouldFocus: false });
        //   },
        // })}
      />

      <Action
        variant={'base'}
        // disabled={isDisabledButton}
        className="mt-9 w-full py-5 rounded-[10px] font-bold"
        type="submit"
      >
        Create an account
      </Action>
    </form>
  );
};

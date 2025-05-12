'use client';

import { Action } from '@/shared/ui/Action';
import { Field } from '@/shared/ui/Field';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const LoginForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  // const {
  //   form: {
  //     register,
  //     formState: { errors, isDirty },
  //   },
  //   action: {
  //     isPending,
  //     result: { validationErrors },
  //   },
  //   handleSubmitWithAction,
  // } = useHookFormAction(signInAction, resolverSignIn, {
  //   formProps: {
  //     mode: 'onTouched',
  //     reValidateMode: 'onChange',
  //     defaultValues: {
  //       email: initialEmail,
  //       password: '',
  //     },
  //   },
  //   actionProps: {
  //     onError: ({ error }) => {
  //       if (error.serverError) toast(error.serverError.message);
  //       if (error.validationErrors?.formErrors)
  //         toast(error.validationErrors.formErrors);
  //     },

  //     onSuccess: () => {
  //       toast('You have successfully entered the system');
  //     },
  //   },
  // });

  // const errorEmail = getError('email', errors, validationErrors);
  // const errorPassword = getError('password', errors, validationErrors);

  // const isDisabledButton = !isDirty || isPending;

  const handleClickVisiblePassword = () => setVisiblePassword((prev) => !prev);

  return (
    <form
      // @ts-ignore
      // action={signInAction}
      // onSubmit={handleSubmitWithAction}
      className="mt-8"
    >
      <Field
        autoFocus
        variant="outline"
        className=""
        // aria-invalid={!!errorEmail}
        aria-describedby="error_email"
        autoComplete="email"
        placeholder="example@gmail.com"
        // pattern={emailPattern}
        type="email"
        required
        // {...register('email', { required: true })}
      />

      <Field
        variant="outline"
        type={visiblePassword ? 'text' : 'password'}
        className="mt-6"
        aria-describedby="error_password"
        placeholder="password"
        autoComplete="current-password"
        required
        // {...register('password', { required: true })}
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
      />

      <Action
        // disabled={isDisabledButton}
        variant="base"
        className="mt-10 w-full font-bold py-5 rounded-[10px]"
        type="submit"
      >
        Login
      </Action>
    </form>
  );
};

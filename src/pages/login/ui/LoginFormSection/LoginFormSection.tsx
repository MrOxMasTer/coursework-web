import { LoginForm } from '@/features/loginForm/ui/LoginForm';
import { Typography } from '@/shared/ui/Typography';
import Logo from '#/public/svg/Logo_veritcal.svg';
import Link from 'next/link';
import { pageConfig } from '@/shared/configs/page';

export const LoginFormSection = () => {
  return (
    <section>
      <div className="container">
        <Logo className="mt-20 mx-auto" />
        <Typography
          className="text-center font-medium text-xl mt-10"
          variant="h2"
        >
          Login
        </Typography>
        <LoginForm />
        <Typography className="text-center text-dove-gray text-[0.9375rem] mt-4">
          Don’t have an account?{' '}
          <Link className="text-green font-bold" href={pageConfig.register}>
            Sign Up
          </Link>{' '}
        </Typography>
      </div>
    </section>
  );
};

import { RegisterFormSection } from '@/pages/register/ui/RegisterFormSection/RegisterFormSection';
import { Typography } from '@/shared/ui/Typography';
import Logo from '#/public/svg/Logo_veritcal.svg';

export default function RegisterPage() {
  return (
    <main>
      <Logo className="mt-14 mx-auto" />
      <Typography
        className="text-center font-medium text-xl mt-10"
        variant="h1"
      >
        Create an account
      </Typography>
      <RegisterFormSection />
    </main>
  );
}

import { Typography } from '@/shared/ui/Typography';
import { RegisterForm } from '@/features/registerForm/ui/RegisterForm';

export const RegisterFormSection = () => {
  return (
    <section>
      <div className="container">
        <Typography variant="h2" className="hidden">
          Register form
        </Typography>
        <RegisterForm />
      </div>
    </section>
  );
};

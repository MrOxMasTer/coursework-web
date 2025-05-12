import { NavigationMobileList } from './NavigationMobileList';

export const NavigationMobile = () => {
  return (
    <nav className="md:hidden">
      <div className="bg-white fixed bottom-0 z-50 w-full shadow-[0_-10px_30px_0_rgba(184,_184,_184,_0.2)] min-h-16 grid items-center">
        <div className="container h-full">
          <NavigationMobileList />
        </div>
      </div>
    </nav>
  );
};

import { navigationMobileList } from '../model/constants/navigationMobileList';
import { NavigationMobileItem } from './NavigationMobileItem';

export const NavigationMobileList = () => (
  <ul className="flex gap-10 justify-center items-center h-full *:[&>a]:p-2 *:[&>a]:block text-grey *:[&>a>svg]:fill-current *:[&>a>svg>path]:fill-inherit">
    {navigationMobileList.map(({ Component, label, page }) => (
      <NavigationMobileItem label={label} href={page} key={page}>
        <Component />
      </NavigationMobileItem>
    ))}
  </ul>
);

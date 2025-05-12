'use client';

import { useQueryState } from 'nuqs';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/shadcnui/Tabs';
import { literalTabs, tabs } from '../model/tabs';

export const CatalogTabs = () => {
  const [currentTab, setCurrentTab] = useQueryState('tab');

  const defaultValue = currentTab || literalTabs[0];

  return (
    <Tabs
      onValueChange={(v) => setCurrentTab(v === literalTabs[0] ? null : v)}
      defaultValue={defaultValue}
    >
      <TabsList className="p-0 gap-[30px] h-7 items-center">
        {tabs.map(({ value, label }) => (
          <TabsTrigger className="" key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

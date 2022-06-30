import type { ReactElement } from 'react';

import RootTemplate from '~/templates/RootTemplate';

const Index = (): ReactElement => {
  return (
    <RootTemplate.Root>
      <RootTemplate.Header>헤더</RootTemplate.Header>
      <RootTemplate.Content>컨텐츠</RootTemplate.Content>
    </RootTemplate.Root>
  );
};

export default Index;

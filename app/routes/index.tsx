import type { ReactElement } from 'react';

import RootTemplate from '~/templates/RootTemplate';
import Navbar from '~/components/common/Navbar';

const Index = (): ReactElement => {
  return (
    <RootTemplate.Root>
      <RootTemplate.Header>
        <Navbar />
      </RootTemplate.Header>
      <RootTemplate.Content>컨텐츠</RootTemplate.Content>
    </RootTemplate.Root>
  );
};

export default Index;

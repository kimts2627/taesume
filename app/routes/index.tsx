import type { ReactElement } from 'react';

import RootTemplate from '~/templates/RootTemplate';
import Navbar from '~/components/common/Navbar';

const Index = (): ReactElement => {
  return (
    <RootTemplate.Root>
      <div className="h-full w-full p-8 bg-green-300">
        <div className="h-full w-full bg-white">
          <RootTemplate.Header>
            <Navbar />
          </RootTemplate.Header>
          <RootTemplate.Content>컨텐츠</RootTemplate.Content>
        </div>
      </div>
    </RootTemplate.Root>
  );
};

export default Index;

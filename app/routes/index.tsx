import type { ReactElement } from 'react';

import RootTemplate from '~/templates/RootTemplate';
import Navbar from '~/components/common/Navbar';
import Footer from '~/components/Home/Footer';
import MainTitle from '~/components/Home/MainTitle';
import ColoredOutline from '~/components/common/ColoredOutline';

const Index = (): ReactElement => {
  return (
    <>
      <RootTemplate.Root>
        <RootTemplate.Header>
          <Navbar />
        </RootTemplate.Header>
        <RootTemplate.Content>
          <div className=" h-full flex flex-col">
            <MainTitle />
            <Footer />
          </div>
        </RootTemplate.Content>
      </RootTemplate.Root>
      <ColoredOutline />
    </>
  );
};

export default Index;

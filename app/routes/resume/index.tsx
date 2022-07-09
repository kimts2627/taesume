import type { ReactElement } from 'react';

import ResumeTemplate from '~/templates/ResumeTemplate';
import Navbar from '~/components/common/Navbar';

const ResumePage = (): ReactElement => {
  return (
    <ResumeTemplate.Root>
      <ResumeTemplate.Header>
        <Navbar />
      </ResumeTemplate.Header>
      <ResumeTemplate.Content>gg</ResumeTemplate.Content>
    </ResumeTemplate.Root>
  );
};

export default ResumePage;

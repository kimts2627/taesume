import type { PropsWithChildren } from 'react';

const Root = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="absolute h-screen w-screen p-5 bg-transparent sm:p-8 z-10">
      <div className="h-full w-full bg-white flex flex-col">{children}</div>
    </div>
  );
};

const Header = ({ children }: PropsWithChildren<{}>) => {
  return <header>{children}</header>;
};

const Content = ({ children }: PropsWithChildren<{}>) => {
  return <div className="flex-1">{children}</div>;
};

Root.displayName = 'ResumeTemplate.Root';
Header.displayName = 'ResumeTemplate.Header';
Content.displayName = 'ResumeTemplate.Content';

const ResumeTemplate = {
  Root,
  Header,
  Content,
};

export default ResumeTemplate;

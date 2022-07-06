import type { PropsWithChildren } from 'react';

const Root = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="h-screen w-screen p-8 bg-identity-green">
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

Root.displayName = 'HomeTemplate.Root';
Header.displayName = 'HomeTemplate.Header';
Content.displayName = 'HomeTemplate.Content';

const HomeTemplate = {
  Root,
  Header,
  Content,
};

export default HomeTemplate;

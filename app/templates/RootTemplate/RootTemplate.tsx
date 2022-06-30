import type { PropsWithChildren } from 'react';

const Root = ({ children }: PropsWithChildren<{}>) => {
  return <div className="h-screen w-screen">{children}</div>;
};

const Header = ({ children }: PropsWithChildren<{}>) => {
  return <header className="">{children}</header>;
};

const Content = ({ children }: PropsWithChildren<{}>) => {
  return <main>{children}</main>;
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

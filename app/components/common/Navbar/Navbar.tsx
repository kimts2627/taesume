import type { ReactElement } from 'react';
import { Link } from '@remix-run/react';

import { GITHUB_URL } from '~/constants';

const NAV_MENUS = [
  { label: 'Home', path: '/' },
  { label: 'Resume', path: '/resume' },
  { label: 'Github', path: GITHUB_URL },
];

const Navbar = (): ReactElement => {
  return (
    <nav className="h-24 w-full flex justify-between items-center px-8">
      <span>Kim Taesu</span>
      <ul className="flex gap-8">
        {NAV_MENUS.map((item) => (
          <Link key={item.label} to={item.path}>
            <li>{item.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

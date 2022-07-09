import type { ReactElement } from 'react';

type ColoredOutlineProps = {
  scrollable?: boolean;
};

const ColoredOutline = ({
  scrollable = false,
}: ColoredOutlineProps): ReactElement => {
  const commonStyle: Record<string, string> = {
    horizontal: 'absolute bg-identity-green h-5 w-screen transition-all sm:h-8',
    vertical: 'absolute bg-identity-green h-screen w-5 transition-all sm:w-8',
  };

  console.log(scrollable);

  return (
    <>
      <div className={`${commonStyle.horizontal} top-0`} />
      {!scrollable && <div className={`${commonStyle.horizontal} bottom-0`} />}

      <div className={`${commonStyle.vertical} top-0 left-0`} />
      <div className={`${commonStyle.vertical} top-0 right-0`} />
    </>
  );
};

export default ColoredOutline;

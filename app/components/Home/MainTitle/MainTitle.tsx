import type { ReactElement } from 'react';

const MainTitle = (): ReactElement => {
  return (
    <main className="w-full flex-1 flex justify-center items-center">
      <h1 className="font-bold text-6xl">
        I'M <span className="text-identity-blue">KIM TAESU</span>
      </h1>
    </main>
  );
};

export default MainTitle;

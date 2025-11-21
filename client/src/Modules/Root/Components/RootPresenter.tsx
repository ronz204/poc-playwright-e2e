import type { JSX } from "react";

export const RootPresenter = (): JSX.Element => {
  return (
    <div className="p-4">
      <p className="font-bold">
        This is the Root page!
      </p>
    </div>
  );
};
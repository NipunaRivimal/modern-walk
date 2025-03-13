import React, { FC } from "react";

interface Props {
  error: Error;
}

const Error: FC<Props> = ({ error }) => {
  return (
    <div className="flex justify-center text-red-500">
      Error: {error.message}
    </div>
  );
};

export default Error;

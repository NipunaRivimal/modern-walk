import React from "react";

import { useRouter } from "next/router";

const Header = () => {
  const { push } = useRouter();

  const onHeaderClick = () => {
    push("/");
  };

  return (
    <div
      className="p-4 border-b-4 border-gray-300 text-center"
      onClick={onHeaderClick}
    >
      <h1 className="text-6xl font-bold">Modern Walk</h1>
    </div>
  );
};

export default Header;

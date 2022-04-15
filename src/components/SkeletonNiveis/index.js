import React from "react";

import { InputSkeleton } from "./styles";

function SkeletonNiveis() {
  return (
    <div className="react-code-input" style={{ display: "flex" }}>
      <InputSkeleton />
      <InputSkeleton />
      <InputSkeleton />
      <InputSkeleton />
      <InputSkeleton />
    </div>
  );
}

export { SkeletonNiveis };

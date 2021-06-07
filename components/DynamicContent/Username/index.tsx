import React, { useEffect, useState } from "react";
import GetOrGenerateUsername from "./utils";

export default function Username() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(GetOrGenerateUsername());
  });

  return <>{username}</>;
}

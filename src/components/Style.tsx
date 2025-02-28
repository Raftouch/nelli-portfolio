import React, { useContext, useMemo } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

interface StyleProps {
  children: React.ReactNode;
}

export default function Style({ children }: StyleProps) {
  const { dark } = useContext(PortfolioContext);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "#333333" : "#f0f0f0",
      color: dark ? "#f0f0f0" : "#333333",
    };
  }, [dark]);
  return <div style={themeStyles}>{children}</div>;
}

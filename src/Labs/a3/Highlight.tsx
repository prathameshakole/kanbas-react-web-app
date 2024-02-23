import { ReactNode } from "react";
function Highlight({ children }: { children: ReactNode }) {
  return (
    <span style={{ backgroundColor: "yellow", color: "red" }}>
        <br />
      {children}
      <br />
    </span>
  );
}
export default Highlight;
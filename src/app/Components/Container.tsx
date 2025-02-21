import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
  }
  
  export const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="py-3 px-6 md:px-20 lg:px-32">{children}</div>;
  }
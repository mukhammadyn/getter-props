import { Button } from "./button";
import { Limit } from "./limit";

export const Pagination = ({ children }) => {
  return <div>{children}</div>;
};

Pagination.Button = Button;
Pagination.Limit = Limit;

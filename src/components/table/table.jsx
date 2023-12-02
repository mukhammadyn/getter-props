import "./table.css";
import { Head, Body, Tr, Th, Td, Foot } from "./components";
import { Pagination } from "../pagination/pagination";

export const Table = ({ children }) => {
  return <table className="table">{children}</table>;
};

export const TableContainer = ({ children }) => {
  return <div className="table-container">{children}</div>
};

Table.Head = Head;
Table.Body = Body;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;
Table.Foot = Foot;
Table.Pagination = Pagination;

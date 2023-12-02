import { useState } from "react";

export const useAppProps = () => {

  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(1);

  const data = [
    {
      name: "John Brown",
      age: 1,
      address: "New York No. 1 Lake Park",
      id: "1",
    },
    {
      name: "Jim Green",
      age: 2,
      address: "London No. 1 Lake Park",
      id: "2",
    },
    {
      name: "Joe Black",
      age: 3,
      address: "Sidney No. 1 Lake Park",
      id: "3",
    },
    {
      name: "Jim Red",
      age: 4,
      address: "London No. 2 Lake Park",
      id: "4",
    },
    {
      name: "Joe Black",
      age: 5,
      address: "Sidney No. 1 Lake Park",
      id: "5",
    },
    {
      name: "John Doe",
      age: 6,
      address: "New York No. 2 Lake Park",
      id: "6",
    },
  ];

  const columns = [
    {
      title: "NAME",
      key: "name",
    },
    {
      title: "AGE",
      key: "age",
    },
    {
      title: "ADDRESS",
      key: "address",
    },
  ];

  return {
    limit,
    setLimit,
    page,
    setPage,
    data,
    columns,
  }

}
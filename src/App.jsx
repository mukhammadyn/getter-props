import { useAppProps } from "./use-app-props";
import { useTableHook } from "./components/table/use-table-hook";
import { Table, TableContainer } from "./components/table";
import { Pagination, usePagination } from "./components/pagination";

export const App = () => {

  const {
    limit,
    setLimit,
    page,
    setPage,
    data,
    columns,
  } = useAppProps()

  const {
    getLimitProps,
    getNextButtonProps,
    getPrevButtonProps,
    renderingData,
  } = usePagination({
    data,
    limit,
    setLimit,
    page,
    setPage,
  })

  const {
    getHeaderRowProps,
    getRowProps,
  } = useTableHook();

  return (
    <div className="container">
      <TableContainer>
        <Table>
          <Table.Head>
            <Table.Tr>
              {columns.map((column, index) => {
                return (
                  <Table.Th
                    key={column.id || index}
                    {...getHeaderRowProps({
                      onClick: () => console.log({ column, index }),
                    })}>
                    {column.title}
                  </Table.Th>
                );
              })}
            </Table.Tr>
          </Table.Head>
          <Table.Body>
            {renderingData.map((row, index) => {
              return (
                <Table.Tr
                  key={row.id || index}
                  {...getRowProps({
                    onClick: () => console.log({ row, index }),
                  })}>
                  {columns.map((column, index) => {
                    return (
                      <Table.Td key={index}>
                        {column.render ? column.render(row) : row[column.key]}
                      </Table.Td>
                    );
                  })}
                </Table.Tr>
              );
            })}
          </Table.Body>
        </Table>
        <Pagination>
          <Pagination.Button {...getPrevButtonProps({ disabled: page === 1 })}>Prev</Pagination.Button>
          <Pagination.Button {...getNextButtonProps({ disabled: page >= Math.ceil(data.length / limit) })}>Next</Pagination.Button>
          <Pagination.Button {...getNextButtonProps({ disabled: page >= 3 })}>Next2</Pagination.Button>
          <Pagination.Limit {...getLimitProps()}>
            <Pagination.Limit.Option value="1">1</Pagination.Limit.Option>
            <Pagination.Limit.Option value="2">2</Pagination.Limit.Option>
            <Pagination.Limit.Option value="3">3</Pagination.Limit.Option>
          </Pagination.Limit>
        </Pagination>
      </TableContainer>
    </div>
  );
}

export default App;

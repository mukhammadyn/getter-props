export const Th = ({ children, onClick, ...props }) => {
  return (
    <th onClick={onClick} {...props}>
      {children}
    </th>
  );
};

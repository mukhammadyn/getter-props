export const Tr = ({
  children,
  ...props
}) => {
  return (
    <tr {...props}>
      {children}
    </tr>
  );
};

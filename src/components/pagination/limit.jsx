const Option = ({ children, value }) => {
  return <option value={value}>{children}</option>;
};

export const Limit = ({ onChange, children, ...props }) => {
  return (
    <select
      onChange={onChange}
      {...props}
      name="limit"
      id="limit"
      defaultValue={1}>
      {children}
    </select>
  );
};

Limit.Option = Option;

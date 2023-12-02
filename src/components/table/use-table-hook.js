export const useTableHook = () => {

  const getHeaderRowProps = ({ ...props } = {}) => (
    {
      ...props
    }
  )

  const getRowProps = ({ ...props } = {}) => (
    {
      ...props
    }
  )

  return {
    getHeaderRowProps,
    getRowProps,
  }
}

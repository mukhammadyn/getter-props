import { useMemo } from "react"
import { callFns } from "../../utils"

export const usePagination = ({ page, limit, setPage, setLimit, data }) => {

  const pageSize = Math.ceil(data.length / limit)

  const firstPageIndex = Math.max((page - 1) * limit, 0)
  const lastPageIndex = firstPageIndex + limit

  const renderingData = useMemo(() => 
    data.slice(firstPageIndex, lastPageIndex), 
    [firstPageIndex, lastPageIndex, data]
  )

  const handlePrevious = () => {
    setPage(prev => prev === 1 ? prev : prev - 1 )
  }

  function handleNext() {
    setPage(prev => prev >= pageSize ? prev : prev + 1 )
  }

  function handleLimitChange(e) {
    setPage(1)
    setLimit(+e.target.value)
  }

  const getPrevButtonProps = ({ onClick, ...props } = {}) => (
    {
      type: "button",
      onClick: callFns(handlePrevious, onClick),
      ...props,
    }
  )
  
  const getNextButtonProps = ({ onClick, ...props } = {}) => (
    {
      type: "button",
      onClick: callFns(handleNext, onClick),
      ...props,
    }
  )

  const getLimitProps = ({ onChange, ...props } = {}) => (
    {
      onChange: callFns(handleLimitChange, onChange),
      ...props
    }
  )

  return {
    getPrevButtonProps,
    getNextButtonProps,
    getLimitProps,
    renderingData,
  }
}


import React from 'react'

const DocsPage = ({params}) => {
  const pageName = params.page


  return (
    <div>{pageName}</div>
  )
}

export default DocsPage
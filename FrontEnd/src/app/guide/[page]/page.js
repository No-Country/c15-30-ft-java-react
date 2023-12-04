'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const DocsPage = () => {
  const params = useParams()


  return (
    <div>{params.page}</div>
  )
}

export default DocsPage
import BigBlob from '@/svgs/BigBlob'
import Blob from '@/svgs/Blob'
import Plant from '@/svgs/Plant'
import React from 'react'

const PlantBolbContainer = () => {
  return (
    <div>
      <Blob
          className={
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
        />
        <BigBlob
          className={
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
        />
        <Plant
          className={
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          }
        />
    </div>
  )
}

export default PlantBolbContainer
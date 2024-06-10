import React from 'react'

const Skeleton = (props) => {
  return (
      <div className={`animate-pulse w-full h-4 bg-gray-300 dark:bg-gray-600 rounded-md ${props.className}`}>
          
    </div>
  )
}

export default Skeleton
import React, { useState } from 'react'


function Index() {
  const [excitement, setExcitement] = useState(5);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl mb-4">Rate your excitement</h2>

      <span className="text-lg">Excitement Level: {excitement}</span>
    </div>
  )
}

export default Index

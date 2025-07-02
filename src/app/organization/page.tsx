import React from 'react'
import Orghome from './Orghome'
import Conductivity from './Conductivity'
import ConductivityOverview from './ConductivityOverview'

const page = () => {
  return (
    <div>
      <Conductivity/>
       <ConductivityOverview/>
      <Orghome/>
    </div>
  )
}

export default page
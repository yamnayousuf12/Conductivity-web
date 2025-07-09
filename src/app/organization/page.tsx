import React from 'react'
import Orghome from './Orghome'
import Conductivity from './Conductivity'
import ConductivityOverview from './ConductivityOverview'
import OurWinningEdge from './OurWinningEdge'
import RecruitmentProcess from './RecruitmentProcess'
import Orgsuccess from './Orgsuccess'
import Organstory from './Organstory'
import OrganStatement from './OrganStatement'


const page = () => {
  return (
    <div>
      <Conductivity/>
       <ConductivityOverview/>
      <Orghome/>
      <OurWinningEdge/>
      <RecruitmentProcess/>
    <Orgsuccess/>
    <Organstory/>
    <OrganStatement/>
   
    </div>
  )
}

export default page
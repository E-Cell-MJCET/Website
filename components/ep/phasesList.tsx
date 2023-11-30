import React from 'react';
import Phases from './phases';

function PhasesList() {
    const arry=[
{
    title: "Phase 1",
    desc: "hi i am here",
},
{
    title:"Phase 2",
    desc:"hi i am also here",
},
{
    title:"Phase 3",
    desc:"hi i will also be there",
},
{
    title:"Phase 4",
    desc:"hi i will not be there",
}
    ];
    
  return (
    <div className='bg-gray-200 p-4 grid grid-cols-1 gap-2 lg:grid-cols-2 justify-center items-center '>
      {arry.map((phase, id) => 
        <Phases key={id} title={phase.title} desc={phase.desc} />
      )}
    </div>
  )
}

export default PhasesList
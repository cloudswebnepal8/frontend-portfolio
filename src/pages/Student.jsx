import React from 'react'
import StudentCard from '../components/StudentCard'

function Student() {
    return (
        <div className='grid grid-cols-2 justify-center items-center border-gray-400 border-2 p-4 gap-2 m-10 rounded-sm'>
            <StudentCard  name="Bishal Budha" faculty="csit" roll={2} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />
            <StudentCard name="Dikshya Dahal" faculty="BCA" roll={4} />

        </div>
    )
}

export default Student
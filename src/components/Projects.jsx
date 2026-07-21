import React from 'react'
import { Project } from '../constants/Project'
import ProjectCard from './ProjectCard'

function Projects() {
    return (

        <div className='flex flex-col pt-30 mb-5 min-h-screen items-center justify-between '>

            <h1 className='font-bold uppercase text-green-500 text-2xl p-5'>My Projects</h1>

            <div className='grid md:grid-cols-2 grid-cols-1 border-2 p-3 border-gray-300'>

                {
                    Project.map((proj) => (
                        <ProjectCard
                            key={proj.id}
                            image={proj.image}
                            title={proj.title}
                            desc={proj.desc}
                            url={proj.url}
                        />

                    ))
                }
            </div>

        </div>

    )
}

export default Projects
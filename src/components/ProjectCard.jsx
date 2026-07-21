import React from 'react'

function ProjectCard(props) {
    return (
        <div className='w-full border border-gray-300 rounded-sm m-6 p-5 text-center max-w-md'>
            <img src={props.image} alt={props.title} className='md:h-82 h-74 w-full rounded-sm ' />
            <h1 className='text-xl text-green-400 p-3 font-semibold'>{props.title}</h1>
            <p className='text-justify text-gray-400'>{props.desc}</p>
            <a href={props.url} target='_blank'>
                <button className='bg-green-500 font-bold text-white uppercase p-2 m-4'>View Project</button>
            </a>

        </div>
    )
}

export default ProjectCard
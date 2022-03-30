import React, {useState} from 'react'

function ProjectPDF(props) {
    const[showProject, setShowProject] = useState(false)
    let project
    if (showProject){
      project = (
        <div className='w-full bg-gray-600 flex flex-col border-4 border-black justify-center p-5' onClick={()=>setShowProject(!showProject)}> 
            <div className='w-4/5 min-h-screen bg-gray-400 border-4 border-black border-opacity-50 mx-auto'>
              {props.emb}
              <div className='w-full h-full opacity-0 absolute top-0 right-0' onClick={()=>setShowProject(!showProject)} />
            </div>
            <div className='p-3 bg-gray-400 border-t-2 border-black'>
                <p className='font-bold text-2xl'>{props.title}</p>
                <p>{props.date}, made with {props.method}</p>
                <p className='font-light'>{props.caption}</p>
            </div>
        </div>
        )
    }
    else {
      project = ( 
      <div className='w-1/3 p-2 flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
      onClick={()=>setShowProject(!showProject)}
      >
        {props.emb_d}
        <div className='w-full h-full opacity-0 absolute top-0 right-0' onClick={()=>setShowProject(!showProject)} />
      </div>
      )
    }
    return(project);
}

export default ProjectPDF;
import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import {v4 as uuid} from "uuid"


const Journals = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [journalContent,setJournalContent] = useState("")
    const [journals,setJournals] = useState([])

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const addJournal = () => {
        setJournals([...journals,{id: uuid(), message: journalContent, date: `${day}-${month}-${year}`}])
        setIsOpen(false)
        setJournalContent("")
    }
  return (
    <div className='md:pl-[16rem] mx-auto pt-8 w-[90%]'>
        <div className='flex justify-between items-center'>
            <h1 className='md:text-[2rem] text-[1rem] font-semibold'>Welcome, Lawani Osaro</h1>
            <button className='flex items-center bg-[#64a98b] text-white px-4 py-2 text-sm gap-1 rounded-md' onClick={() => setIsOpen(true)}> <BsPlus size={20}/> Add Journal</button>
        </div>
        <div className='mt-16 flex flex-wrap gap-4 items-center overflow-hidden'>
            {journals.map(journal => (
                <div key={journal.id} className='w-[350px] h-[250px] p-4 bg-[#E7F2EC] rounded-md relative'>
                    <p className='text-black text-sm text-[#0e1612]'>{journal.message}</p>
                    <p className='absolute right-4 bottom-4 text-sm text-[#0e1612]'>{journal.date}</p>
                </div>
            ))}
        </div>
        {isOpen && (
            <div className='absolute top-0 left-0 bg-[#80808080] h-[100vh] w-full'>
                <div className='bg-white max-w-[500px] rounded-md p-4 mx-auto mt-40 relative'>
                    <h1 className='py-4'>Add Journal</h1>
                    <textarea name="" id="" cols="20" rows="5" className='w-full border my-4 p-4 outline-none' placeholder='Add Caption' value={journalContent} onChange={(e) => setJournalContent(e.target.value)}/>
                    <button
                        className={`bg-[#64a98b] text-white px-4 py-2 rounded-md ${
                        !journalContent ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4d7b69]'
                        }`}
                        disabled={!journalContent}
                        onClick={() => addJournal()}
                    >
                    Add
                    </button>
                    <div className='absolute top-4 right-4'>
                        <IoClose 
                            size={20} 
                            className='cursor-pointer' 
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Journals
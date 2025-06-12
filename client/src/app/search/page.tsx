"use client";
import React, { useEffect, useState } from 'react'
import { useSearchQuery } from '@/state/api';
import {debounce} from "lodash";
import Header from '@/components/Header';
import TaskCard from '@/components/TaskCard';
import ProjectCard from '@/components/ProjectCard';
import UserCard from '@/components/UserCard';


const Search = () => {

  // states
  const [searchTerm, setSearchTerm]=useState("");
  
  //api call 
  const {data:searchResults,isLoading, isError}=useSearchQuery(searchTerm,{
    skip:searchTerm.length<3
  });

  // what is debounce?
  // debounce delays execution of a function until specified period of time passed.

  const handleSearch=debounce(
    (event:React.ChangeEvent<HTMLInputElement>)=>{
      setSearchTerm(event.target.value)
    },
    500,
  );

  // This helps unnecessary state updates after component is gone
  useEffect(()=>{
    return handleSearch.cancel;
  },[handleSearch.cancel])


  return (
    <div className='p-8'>
      <Header name="Search"/>
      <div>
        <input 
          type='text' 
          placeholder='Search...' 
          className='w-1/2 rounded border p-3 shadow'
          onChange={handleSearch}
          />
      </div>
      <div className='p-5'>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error occurred while fetching search results.</p>}
        {!isLoading && !isError && searchResults && (
          <div>
            {/* tasks */}
            {searchResults.tasks &&  searchResults.tasks?.length >0 && (
              <h2>Tasks</h2>
            )}
            {searchResults.tasks?.map((task)=>(
              <TaskCard key={task.id} task={task} />
            ))}
            {/* projects */}
            {searchResults.projects &&  searchResults.projects?.length >0 && (
              <h2>Projects</h2>
            )}
            {searchResults.projects?.map((project)=>(
              <ProjectCard key={project.id} project={project} />
            ))}

            {/* user */}
            {searchResults.users &&  searchResults.users?.length >0 && (
              <h2>Users</h2>
            )}
            {searchResults.users?.map((user)=>(
              <UserCard key={user.userId} user={user} />
            ))}         
          </div>
        )}
      </div>
    </div>
  )
}

export default Search

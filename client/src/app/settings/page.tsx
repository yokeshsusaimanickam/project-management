import Header from '@/components/Header';
import React from 'react'

// What is difference between type and interface in typescript?
// both can be extend using extends keyword and intersections &, but interface is human readable.
// interfaces with same name can be merged. type aliases with same cause an error.


const Settings = () => {

    const userSettings={
        username:"johndoe",
        email:"john.doe@example.com",
        teamName: "Development Team ",
        roleName: "Developer"
    }

    const labelStyles="block text-sm font-medium dark:text-white";
    const textStyles="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white"

  return (
    <div className='p-8'>
        <Header name='Settings'/>
        <div className='space-y-4'>
            <div>
                <label className={labelStyles}>
                    Username
                </label>
                <div className={textStyles}>
                    {userSettings.username}
                </div>
            </div>
            
            <div>
                <label className={labelStyles}>
                    Email
                </label>
                <div className={textStyles}>
                    {userSettings.email}
                </div>
            </div>
            
            <div>
                <label className={labelStyles}>
                    Team
                </label>
                <div className={textStyles}>
                    {userSettings.teamName}
                </div>
            </div>
            
            <div>
                <label className={labelStyles}>
                    Role
                </label>
                <div className={textStyles}>
                    {userSettings.roleName}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Settings
import React from 'react'
import {Link} from 'react-router-dom'


const BasicInfo = () => {
    return (
        <div>
        <div class="border-gray-400 min-h-screen pt-2  my-16">
        <div class="container mx-auto">
            <div class="inputs w-full max-w-2xl p-6 mx-auto">
                <form class="mt-6   pt-4">
                    <div class='flex flex-wrap -mx-3 mb-6'>
                      
                        <div class="personal w-full  border-gray-400 pt-4">
                            <h2 class="text-2xl text-gray-900">Personal info:</h2>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                                </div>
                            </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                            </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                <textarea class='bg-white rounded-md  leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium  focus:outline-none '  required></textarea>
                            </div>


                            <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Choose Your Profession</label>
                            <div class="flex-shrink w-full inline-block relative">
                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                
                                    <option>Developer</option>
                                    <option>Designer</option>
                                    <option>Other</option>
                                   
                                </select>
                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                      
                       <div class="personal w-full  border-gray-400 pt-4">
                        <h2 class="text-2xl text-gray-900">Upload Your Resume:</h2>
                         <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            <div class="flex text-sm text-gray-600">
                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                                <p class="text-xs text-gray-500">
                                    PDF up to 4MB
                                </p>
                            </div>
                            </div>
                        </div>
                    
                            <Link to="/home">
                                <div class="flex justify-end mt-5">
                                    <button class="appearance-none bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 shadow-sm border rounded-md mr-3" type="submit">Save</button>
                                </div>
                            </Link>
                           
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </div>
    )
}

export default BasicInfo

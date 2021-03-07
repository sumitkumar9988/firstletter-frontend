import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
<div class="min-h-screen flex items-center justify-center border-gray-400 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      {/* <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/> */}
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign In 
      </h2>
    </div>
    <form class="mt-8 space-y-6" >
      <input type="hidden" name="remember" value="true"/>
      <div class=" shadow-sm -space-y-px">
        <div  className="px-3 py-2">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email"
            type="email" autocomplete="email"
            required class="appearance-none block
             w-full bg-white text-gray-700 border
           border-gray-400 shadow-inner 
             rounded-md py-3 px-4 leading-tight focus:outline-none
           focus:border-gray-500" placeholder="Email address"/>
        </div>
        <div className="px-3 py-2">
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password"  type="password"
           autocomplete="current-password" required class="appearance-none block
           w-full bg-white text-gray-700 border
          border-gray-400 shadow-inner 
            rounded-md py-3 px-4 leading-tight focus:outline-none
          focus:border-gray-500" placeholder="Password"/>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-sm">
          <Link to="/forgetpassword">
              <p class="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </p>
          </Link>
        </div>
      </div>
      <div>
        <Link to="/basic">
            <button type="submit" class="group relative w-full
             flex justify-center px-3 py-2 border border-transparent 
             text-sm font-medium rounded-md text-white
           bg-indigo-600 hover:bg-indigo-700 focus:outline-none
             focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
        </Link>
      </div>
        {/* <h4 className="text-center font-medium ">Or</h4> */}
      <div>
        <Link to="/register">
            <h3  class="font-medium  text-center text-indigo-600
             hover:text-indigo-500">
            Create Your Account
          </h3>
        </Link>
      </div>
    </form>
  </div>
</div>)
}

export default Login

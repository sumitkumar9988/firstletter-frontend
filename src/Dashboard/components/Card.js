import React from 'react'

const Card = () => {
    return (
        <div>

            <div class="max-w-sm m-4 bg-white rounded-3xl shadow-md py-6 px-16">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none">
                    <circle cx="36" cy="36" r="36" fill="#B0F3FF"></circle>
                    <circle cx="36" cy="36" r="36" fill="url(#paint0_linear)"></circle>
                    <path
                        d="M18.9444 37.25H14L36.25 15L58.5 37.25H53.5556"
                        stroke="#00A7C5"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    <path
                        d="M18.9444 37.25V54.5556C18.9444 55.8669 19.4653 57.1245 20.3926 58.0518C21.3198 58.9791 22.5775 59.5 23.8888 59.5H48.611C49.9224 59.5 51.18 58.9791 52.1073 58.0518C53.0345 57.1245 53.5555 55.8669 53.5555 54.5556V37.25"
                        stroke="#00A7C5"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    <path
                        d="M41.1945 37.25H31.3056V47.1389H41.1945V37.25Z"
                        stroke="#00A7C5"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="36"
                            y1="0"
                            x2="36"
                            y2="72"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"></stop>
                            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <div class="pt-5">
                    <h1 class="text-xl lg:text-2xl font-semibold tracking-wider text-gray-800">Home Insurance</h1>
                    <p class="mt-4 tracking-wider leading-8 text-base w-11/12 text-gray-700">Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at</p>
                </div>
            </div>
        </div>
    )
}

export default Card

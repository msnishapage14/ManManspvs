import React from 'react' 

function Test () {
  return (
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            What Are Client's Are Tasting 
        </h1>

        <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div class="flex items-start max-w-6xl mx-auto mt-16">
            <button title="left arrow" class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div>
                <p class="flex items-center text-center text-gray-500 lg:mx-8">
                    "Manman production has some of the best food in that I have tasted in Columbus! I had some fried fish and mac and cheese. The food was so good that I  "
                </p>

                <div class="flex flex-col items-center justify-center mt-8">
                    <img class="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/> 

                    <div class="mt-4 text-center">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Fannisha Page</h1>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Color Coded Labs Student</span>
                    </div>
                </div>
            </div>

            <button title="right arrow" class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>
  ); 
}

export default Test;
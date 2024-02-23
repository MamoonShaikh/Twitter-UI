import React from 'react'

function Sec_last() {
  return (
    <div className='w-full text-white space-y-2 '>
      <div className='search ml-11 p-2  '>
        <input type="text" className='svgforsearch bg-stone-900 p-2 rounded-3xl border-0px border-0 w-11/12 hover:bg-stone-900  ' placeholder= 'Search' />
      </div>
      <div className='bg-stone-900 space-y-2  rounded-2xl p-4 ml-11'>
        <p className='text-2xl text-bold'>Subscribe to Premium</p>
        <p className=''>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className='py-2 px-5 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 '>Subscribe</button>
      </div>
      <div className='  bg-stone-900 space-y-2  rounded-2xl  ml-11'>
        <p className='text-2xl text-bold p-2 ml-2'>What’s happening</p>
        <div className='flex hover:bg-stone-800  '>
          <p className='text-base ml-4'>Super Bowl LVIII: 49ers at Chiefs
            <p className='text-xs '>
              Super Bowl LVIII·February 12, 2024
            </p>
          </p>
          <img className='rounded-lg m-0 ml-4 h-20' width={80} src="https://pbs.twimg.com/semantic_core_img/1752775289661276160/whhjZlcb?format=jpg&name=240x240" alt="" />
        </div>
        <div className='flex  hover:bg-stone-800  p-2'>
          <p className='text-md ml-4'>Trending in India
            <p className='text-xl '> #MurderOfDemocrac
              <p className='text-xs '>19,713 posts</p>
            </p>
          </p>
          <p className='invert ml-[99px]  '><svg  width={20} viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg></p>
        </div>
        <div className='flex  hover:bg-stone-800  p-2'>
          <p className='text-md ml-4'>Trending in India
            <p className='text-xl '> #JanhviKapoor
              <p className='text-xs '>4,613 posts</p>
            </p>
          </p>
          <p className='invert ml-[160px]'><svg width={20} viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg></p>
        </div>
        <div className='flex  hover:bg-stone-800  p-2'>
          <p className='text-md ml-4'>Trending in India
            <p className='text-xl '>#Air Drop
              <p className='text-xs '>7,203 posts</p>
            </p>
          </p>
          <p className='invert ml-[170px]'><svg width={20} viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg></p>
        </div>
        <div className='flex  hover:bg-stone-800  p-2'>
          <p className='text-md ml-4'>Trending in India
            <p className='text-xl '> #IPL2024
              <p className='text-xs '>22,923 posts</p>
            </p>
          </p>
          <p className='invert ml-[170px]'><svg   width={20} viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg></p>
        </div>
        <div className=' hover:bg-stone-800  p-2'>
          <p className='text-green-500 ml-4'>See more</p>
        </div>

      </div>
      <div className=' bg-stone-900 space-y-2  rounded-2xl  ml-11'>
        <p className='ml-4 p-2 text-2xl text-bold'>Who to follow</p>
        <div className='flex space-x-6 hover:cursor-pointer hover:bg-stone-800'>
          <p className=''><img className='rounded-full ml-4 mt-0' src="	https://pbs.twimg.com/profile_images/599024914176155649/Yp2JhEuS_normal.jpg" alt="" /></p>
          <p className='text-lg hover:underline cursor-pointer'>ravish kumar <p className='text-xs'>@ravshndtv</p></p>
          <p className=''><button className=' px-4 m-4 ml-10  bg-white text-black font-semibold rounded-full  focus:outline-none focus:ring focus:ring-opacity-75 '>Follow</button></p>
        </div>
        <div className='flex space-x-6 hover:cursor-pointer hover:bg-stone-800'>
          <p className=''><img className='rounded-full ml-4 mt-0' src="		https://pbs.twimg.com/profile_images/1290654661582757888/zBkNoiVb_normal.jpg" alt="" /></p>
          <p className='text-lg hover:underline cursor-pointer'>Ali Sohrab <p className='text-xs'>@ali007</p></p>
          <p className=''><button className=' px-4 m-4 ml-14  bg-white text-black font-semibold rounded-full  focus:outline-none focus:ring focus:ring-opacity-75 '>Follow</button></p>
        </div>
        <div className='flex space-x-6 hover:cursor-pointer hover:bg-stone-800'>
          <p className=''><img className='rounded-full ml-4 mt-0' src="	https://pbs.twimg.com/profile_images/1760174702985728000/ByMI-JEG_normal.png" alt="" /></p>
          <p className='text-lg hover:underline cursor-pointer'>Mohd.Mamoon<p className='text-xs'>@mamoon7080</p></p>
          <p className=''><button className=' px-4 m-4 ml-4  bg-white text-black font-semibold rounded-full  focus:outline-none focus:ring focus:ring-opacity-75 '>Follow</button></p>
        </div>
     

        <div className=' hover:bg-stone-800 cursor-pointer p-2'>
          <p className='text-green-500 ml-4'>See more</p>
        </div>
      </div>
      <div className=' space-y-2  '>
        <ul className='list-none  space-x-4 ml-11 text-xs  mb-4 '>
          <span className='hover:underline hover:text-gray-400  cursor-pointer '>Terms of Service</span>
          <span className='hover:underline hover:text-gray-400  cursor-pointer'>Privacy Policy</span>
          <span className='hover:underline hover:text-gray-400  cursor-pointer'>Cookie Policy</span>
          <span className='hover:underline hover:text-gray-400  cursor-pointer'>Accessibility</span>
          <span className='hover:underline hover:text-gray-400  cursor-pointer'>Ads info</span>
          <span className='hover:underline hover:text-gray-400  cursor-pointer'>More</span>
          <span className='hover:underline hover:text-gray-400 cursor-pointer'>© 2024 X Corp.</span>
          
        </ul>
      </div>

    </div>
  )
}

export default Sec_last
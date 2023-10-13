import React from 'react'

const Transcript = ({ data }: { data: any }) => {
  return (
    <div className="mt-5 mb-5">
      <h3 className="font-Work-Sans text-[20px] font-[500] ">Transcript</h3>
      <div className="my-4">
        {/* language options */}
        <select
          className="py-2 px-5 pr-10 border-[1px] font-Work-Sans text-gray-400 rounded-lg border-gray-200 min-w-[140px] bg-right-10"
          defaultValue="English"
          name="languages"
          id="languages"
        >
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
          <option value="italian">Italian</option>
          <option value="chinese">Chinese</option>
        </select>
      </div>
      {/* this maps the transcript array recieved from the backend */}
      <div className="h-[360px] overflow-y-scroll custom-scrollbar md:pr-[80px] mt-10 font-Work-Sans">
        {data?.map((el: any, i: number) => {
          const lastItem = data.length - 1
          return (
            <div
              key={el.id}
              className={`flex mb-10 justify-start items-start ${
                i === lastItem ? 'opacity-25' : 'opacity-100'
              } md:gap-10 gap-5`}
            >
              <p className="text-black font-semibold">{el.time}</p>
              <div>
                <p className="text-gray-900 md:text-[18px] sm:text-[14px] font-normal">
                  {el.msg}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Transcript

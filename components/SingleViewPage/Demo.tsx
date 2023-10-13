import React from 'react'
import demo from '../../public/assets/video-repo/video-frame.png'
import Image from 'next/image'


const Demo = () => {
    return (
        <div>
            <Image
                className="w-full min-h-[450px] b rounded-lg border border-gray-200 border-opacity-60 pt-2 pr-2 pb-3 pl-2 bg-opacity-50"
                src={demo}
                width={1000}
                height={400}
                alt="image"
            />

        </div>
    )
}

export default Demo
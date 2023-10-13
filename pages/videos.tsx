import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Logo2 from '../public/assets/video-repo/logo-2.png'
import { FiSearch } from 'react-icons/fi'
import Navbar from '@/components/shared/Navbar'
// import { Spinner } from '../../components/shared/Loader'
// import VideoCard from '../../components/shared/VideoCard'
import Link from 'next/link'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from '../components/Spinner/Spinner'

interface Video {
  id: number
  username: string
  src: string
  created_date: string
}


function Videos() {
  const { user, titleCase } = useContext(GlobalContext)
  // const displayName: string = user || 'user13'
  // console.log(user)
  // console.log(displayName)

  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.cofucan.tech/srce/api/recording/user/${user}`,
        )
        const formattedVideos: Video[] = response.data.map((video: any) => ({
          id: video.id,
          username: video.title,
          src: video.thumbnail_location,
          created_date: formatDate(video.created_date),

          Videosrc: video.original_location,
        }))
        setVideos(formattedVideos)
        setLoading(false)

      } catch (error) {
        console.error('Error fetching videos:', error)
        setLoading(false)
      }
    }

    fetchVideos()
  }, [user])

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options,
    )
    return formattedDate.toUpperCase()
  }

  const src =
    'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'

  const details = [
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing 1',
      date: '  SEPTEMBER 20, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing 2',
      date: '  SEPTEMBER 21, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing 3',
      date: '  SEPTEMBER 22, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing 4',
      date: '  SEPTEMBER 23, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing 4',
      date: '  SEPTEMBER 24, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing 6',
      date: '  SEPTEMBER 25, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing 7',
      date: '  SEPTEMBER 26, 2023',
    },
  ]
  return (
    <div>
      <div className="w-full min-h-screen overflow-y-hidden">
        <div className="w-full min-h-full flex flex-col justify-between">
          <Navbar />
          <div className="w-full px-4 sm:px-8 lg:px-20 py-0 flex flex-col xs:flex-col sm:flex-row items-center justify-between mb-5">
            <div className="w-full lg:w-auto flex flex-col">
              <div className="HelloJohnMark text-neutral-900 lg:text-[32px] font-bold font-['Sora'] md:text-[28px] sm:text-[24px] xs:text-[20px] hidden ss:block">
                Hello, {titleCase(user)}
              </div>
              <div className="HereAreYourRecordedVideos text-neutral-900 text-opacity-70 lg:text-[28px] font-bold font-['Sora'] md:text-[24px] sm:text-[20px] xs:text-[16x] font-normal font-['Work Sans'] hidden ss:block">
                Here are your recorded videos
              </div>
            </div>

            <div className="SearchBar w-[90vw] h-[30px] lg:w-[30rem] lg:h-[48px] md:w-[30rem] md:h-[48px]  ss:w-[30rem] ss:h-[48px] xs:w-[90vw] xs:h-[30px] bg-gray-300 px-4 flex items-center justify-start border rounded-lg">
              <FiSearch size={15} color="#ccc" />
              <input
                type="text"
                className="w-full py-3 bg-transparent outline-none border-none px-3 text-[14px] text-white font-ppReg placeholder-white"
                placeholder="Search for a video"
              />
            </div>
          </div>

          <div
            className="Timeline text-neutral-900 text-opacity-80 text-lg font-medium font-['Work Sans'] px-8 lg:px-20 py-0"
            style={{
              borderTop: '1px solid lightgray',
            }}
          >
            Recent files
          </div>
          {loading ? (
        <Spinner />
      ) : (
          <div
            className="lg:overflow-y-scroll  ss:overflow-y-scroll xs:overflow-y-hidden sm:overflow-y-scroll lg:max-h-screen md:max-h-screen ss:max-h-screen sm:max-h-screen xs:h-full"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              margin: '0 auto',
              // overflowY: 'scroll',
              // maxHeight: '100%',
            }}
          >
            {videos.length === 0 ? (
              <div className="NoRecentVideosMessage text-xl text-neutral-900 font-medium">
                You have no recent videos
              </div>
            ) : (
              videos.map((item, index) => (
                <Link key={index} href={`/videos/${item?.id}`} passHref>
                  <div
                    className="WebCard px-1 pt-4 pb-6 bg-neutral-50 bg-opacity-50 rounded-3xl border border-gray-400 border-opacity-60 flex-col justify-center items-center gap-0 inline-flex lg:w-[557px] lg:h-[322px]  md:w-[557px] md:h-[322px]  sm:w-[400px] sm:h-[322px] ss:w-[557px] ss:h-[322px] xs:w-[340px] xs:h-[280px]"
                    style={{
                      margin: '1rem',
                    }}
                  >
                    <div
                      className="VideoFrame  relative rounded-xl border border-gray-200"
                      style={{
                        margin: '0.5rem',
                        position: 'relative',
                      }}
                    >
                      <img
                        className="lg:w-[525px] lg:h-[220px] md:w-[525px] md:h-[220px] sm:w-[525px] sm:h-[220px] ss:w-[525px] ss:h-[220px] xs:w-[525px] xs:h-[170px] rounded-md bg-gray-300 object-cover"
                        src={item.src}
                      />

                      <div className="VideoDuration px-4 py-1 absolute bottom-4 right-3 bg-gray-200 rounded justify-end items-end gap-2 inline-flex">
                        <div className="34 text-slate-950 text-sm font-medium font-['Work Sans']">
                          00:34
                        </div>
                      </div>
                    </div>
                    <div className="Details self-stretch justify-between items-start inline-flex">
                      <div className="TitleDate grow shrink basis-0 flex-col justify-center items-start gap-0 inline-flex px-4">
                        <div
                          className="Title text-neutral-900 text-xl font-medium font-['Work Sans'] capitalize"
                          style={{ fontSize: '1rem' }}
                        >
                          {item.username}
                        </div>
                        <div className="Date text-gray-400 text-base font-normal font-['Work Sans'] uppercase">
                          {item?.created_date}
                        </div>
                      </div>
                      <div className="Icons justify-start items-start gap-6 flex">
                        <Image
                          src="/assets/video-repo/link.png"
                          alt="stuff"
                          width={20}
                          height={20}
                        />
                        <Image
                          src="/assets/video-repo/more.png"
                          alt="stuff"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          )}
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          style={{
            width: 'fit-content',
            textAlign: 'center',
          }}
        />
      </div>
    </div>
  )
}

export default Videos

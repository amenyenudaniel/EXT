import React, { ReactNode } from 'react'

const MainLayout:React.FC<{ children: ReactNode | ReactNode[] }> = ({children}) => {
  return (
    <div className="container px-3 xs:px-5 ss:px-12 md:px-[80px]">
      {children}
    </div>
  )
}

export default MainLayout

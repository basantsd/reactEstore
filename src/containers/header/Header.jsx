import React from 'react'
import { Navbars } from '../../components'
export default function Header({children}) {
  return (
    <>
    <header className='header-global'>
      <Navbars/>
    </header>
    </>
  )
}

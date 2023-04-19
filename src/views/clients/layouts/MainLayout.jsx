import React from 'react'

import { Header, Footer } from '../../../containers';

export default function MainLayout({children}) {
  return (
    <>
    <Header/>
    <main >{children}</main>
    <Footer/>
    </>
  )
}

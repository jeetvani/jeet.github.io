import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  React.useEffect(() => {
    // window is accessible here.
  window.location.href = "/HomePage";
  }, []);
  return (
    <>
    
     </>
  )
}

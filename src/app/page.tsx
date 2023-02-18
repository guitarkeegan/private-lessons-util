'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { SyntheticEvent } from 'react'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("clicked button");
    router.push("/lesson");
  }

  return (
    <main>
      <video style={{zIndex: "-1", objectFit: "cover", width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0}} playsInline autoPlay muted loop poster="img/guitar-bg.jpg" id="bgvid">
      <source src="video/guitarbg-full.mp4" type="video/mp4" />
      </video>
      <div className='text-7xl text-center mt-16 font-bold' style={{color: "white"}}>
      <h1>Lesson Builder</h1>
      </div>
      <div style={{color: "white"}} className='absolute left-0 right-0 mx-auto md:w-1/3  w-52 mt-24 bg-first rounded-lg py-12 px-6 flex flex-col text-center border-black'>
        <h2 className="text-4xl mb-4">Enter</h2>
        <form onSubmit={handleSubmit}>
        <label>email</label>
        <br/>
        <input className='mt-2' style={{width: "160px"}} type="email" />
        <br/>
        <label>password</label>
        <br/>
        <input className='mt-2 mb-4' style={{width: "160px"}}  type="password" />
        <br/>
        <button className='px-4 py-4 bg-second rounded-lg hover:opacity-80'>Submit</button>
        </form>
      </div>
    </main>
  )
}

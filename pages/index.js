import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/login')
  }, [])
  return (
    <div className="container">
      <button className="btn-primary">loading</button>
    </div>
  )
}

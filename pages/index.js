import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  router.push('/login')
  return (
    <div className="container">
      <button className="btn-primary">loading</button>
    </div>
  )
}

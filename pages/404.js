import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="container section" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem' }}>Page not found</h1>
      <p className="muted">The page you are looking for does not exist.</p>
      <div style={{ maxWidth: 780, margin: '2rem auto 0', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
        <Image src="/404.jpg" alt="404 visual" width={1200} height={750} className="image-responsive" />
      </div>
      <Link href="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
        Return home
      </Link>
    </div>
  )
}

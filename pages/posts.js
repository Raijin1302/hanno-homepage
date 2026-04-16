import Image from 'next/image'
import Layout from '../components/layouts/article'

const Posts = () => (
  <Layout title="Posts">
    <h1 style={{ fontSize: '2rem', margin: 0 }}>Popular Posts</h1>
    <p className="muted" style={{ marginTop: '.6rem' }}>
      Writing archive is currently under refresh.
    </p>
    <div style={{ maxWidth: 900, marginTop: '1.5rem', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
      <Image src="/under.jpg" alt="Under construction" width={1400} height={900} style={{ width: '100%', height: 'auto' }} />
    </div>
  </Layout>
)

export default Posts

import Image from 'next/image'
import Layout from '../../components/layouts/article'
import { Badge } from '../../components/ui/badge'
import { projects } from '../../lib/content'

const project = projects.find(item => item.id === 'hiepkhach')

export default function HiepKhachPage() {
  return (
    <Layout title={project.title}>
      <div style={{ display: 'grid', gap: '1.25rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', margin: 0 }}>{project.title}</h1>
          <div style={{ marginTop: '.7rem' }}>
            <Badge>{project.period}</Badge>
          </div>
        </div>
        <p className="muted" style={{ maxWidth: 780 }}>
          Built detail pages in collaboration with designers, then implemented CMS-connected modules to render campaign content quickly.
        </p>
        <ul className="panel" style={{ lineHeight: 1.8 }}>
          <li>
            <strong>Role:</strong> {project.role}
          </li>
          <li>
            <strong>Stack:</strong> {project.stack.join(', ')}
          </li>
        </ul>
        <a className="btn btn-outline" href={project.website} target="_blank" rel="noreferrer" style={{ width: 'fit-content' }}>
          Visit website
        </a>
        <div className="grid-2">
          <div className="card-image" style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            <Image src="/images/works/hiepkhach_02.png" alt="hiepkhach screenshot 1" fill className="image-cover" />
          </div>
          <div className="card-image" style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            <Image src="/images/works/hiepkhach_03.png" alt="hiepkhach screenshot 2" fill className="image-cover" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

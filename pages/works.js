import Layout from '../components/layouts/article'
import ProjectCard from '../components/project-card'
import { projects } from '../lib/content'

const Works = () => {
  return (
    <Layout title="Works">
      <div style={{ marginBottom: '2rem' }}>
        <p className="section-title">Portfolio</p>
        <h1 style={{ fontSize: '2rem', margin: 0 }}>Selected Works</h1>
        <p className="muted" style={{ maxWidth: 700, marginTop: '.6rem' }}>
          A snapshot of production projects focused on clean UI implementation and reliable front-end delivery.
        </p>
      </div>
      <div className="grid-2">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  )
}

export default Works

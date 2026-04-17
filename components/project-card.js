import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <div className="card-image">
        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
      </div>
      <CardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '.5rem', alignItems: 'start' }}>
          <CardTitle>{project.title}</CardTitle>
          <Badge>{project.period}</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="badges">
          {project.stack.map(item => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a className="btn btn-outline" href={project.website} target="_blank" rel="noreferrer">
          Live Site
        </a>
        <a className="btn btn-ghost" href={`/works/${project.id}`}>
          Case Study
        </a>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard

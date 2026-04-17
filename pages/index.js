import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SectionWrapper from '../components/section-wrapper'
import ProjectCard from '../components/project-card'
import { Badge } from '../components/ui/badge'
import { contacts, experience, hero, projects, skills } from '../lib/content'

export default function HomePage() {
  const [tab, setTab] = useState('experience')

  return (
    <div className="container" id="home">
      <SectionWrapper className="section" delay={0.05}>
        <div className="hero-grid">
          <div>
            <Badge>Available for Front-end roles</Badge>
            <h1 className="hero-title" style={{ marginTop: '1rem' }}>
              {hero.name}
            </h1>
            <p className="muted" style={{ fontSize: '1.15rem', marginTop: '.7rem' }}>
              {hero.intro}
            </p>
            <p className="muted" style={{ marginTop: '1rem', maxWidth: 690 }}>
              {hero.summary}
            </p>
            <div className="row" style={{ marginTop: '1.2rem' }}>
              <a className="btn btn-primary" href="#contact">
                Contact me
              </a>
              <a className="btn btn-outline" href="#projects">
                View projects
              </a>
            </div>
            <p className="muted" style={{ marginTop: '1rem' }}>
              Based in {hero.location}
            </p>
          </div>
          <div className="avatar-wrap">
            <Image src="/images/hanno.png" alt="Hanno Nguyen" width={320} height={320} className="image-responsive" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects" title="Selected Projects" className="section" delay={0.1}>
        <div className="grid-2">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="experience" title="Experience & Skills" className="section" delay={0.15}>
        <div className="row" style={{ marginBottom: '1rem' }}>
          <button className={`btn ${tab === 'experience' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setTab('experience')}>
            Experience
          </button>
          <button className={`btn ${tab === 'skills' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setTab('skills')}>
            Skills
          </button>
        </div>
        {tab === 'experience' ? (
          <div style={{ display: 'grid', gap: '.8rem', maxWidth: 760 }}>
            {experience.map(item => (
              <div key={item.year} className="panel">
                <p className="muted" style={{ margin: 0, fontWeight: 700, fontSize: '.9rem' }}>
                  {item.year}
                </p>
                <p style={{ margin: '.35rem 0 0' }}>{item.detail}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="badges">
            {skills.map(skill => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper id="contact" title="Contact" className="section" delay={0.2}>
        <div className="panel" style={{ maxWidth: 760 }}>
          <p className="muted" style={{ marginTop: 0 }}>
            Open to collaboration and full-time opportunities.
          </p>
          <ul className="list">
            {contacts.map(item => (
              <li key={item.label} className="list-row">
                <span className="muted">{item.label}</span>
                <Link href={item.href} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </div>
  )
}

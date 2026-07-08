import { X } from 'lucide-react'
import { portfolioContent, SECTION_META, type PortfolioSection } from '@/lib/portfolio-data'

interface PortfolioDialogProps {
  section: PortfolioSection | null
  onClose: () => void
}

export function PortfolioDialog({ section, onClose }: PortfolioDialogProps) {
  if (!section) return null

  const sectionMeta = SECTION_META.find((s) => s.id === section)
  if (!sectionMeta) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-96 overflow-y-auto"
        style={{ borderTop: `4px solid ${sectionMeta.color}` }}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold">{sectionMeta.name}</h2>
          <button
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {section === 'hero' && <HeroSection />}
          {section === 'about' && <AboutSection />}
          {section === 'experience' && <ExperienceSection />}
          {section === 'projects' && <ProjectsSection />}
          {section === 'research' && <ResearchSection />}
          {section === 'skills' && <SkillsSection />}
          {section === 'contact' && <ContactSection />}
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  const content = portfolioContent.hero
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold text-foreground">{content.title}</h3>
      <p className="text-lg text-foreground/80">{content.subtitle}</p>
      <p className="text-base text-foreground/70">{content.description}</p>
      <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded hover:opacity-90">
        {content.cta}
      </button>
    </div>
  )
}

function AboutSection() {
  const content = portfolioContent.about
  return (
    <div className="space-y-4">
      <p className="text-foreground/80">{content.bio}</p>
      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
        <div>
          <h4 className="font-semibold text-foreground mb-2">Location</h4>
          <p className="text-foreground/70">{content.location}</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Email</h4>
          <a href={`mailto:${content.email}`} className="text-primary hover:underline">
            {content.email}
          </a>
        </div>
      </div>
      <div className="pt-4 border-t border-border">
        <h4 className="font-semibold text-foreground mb-3">Follow</h4>
        <div className="flex gap-4">
          {content.social.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExperienceSection() {
  const experiences = portfolioContent.experience
  return (
    <div className="space-y-6">
      {experiences.map((exp, idx) => (
        <div key={idx} className="border-l-2 border-primary pl-4">
          <h4 className="font-semibold text-foreground">{exp.title}</h4>
          <p className="text-sm text-foreground/60">{exp.company}</p>
          <p className="text-xs text-foreground/50 mb-2">{exp.duration}</p>
          <p className="text-foreground/80 text-sm mb-2">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ProjectsSection() {
  const projects = portfolioContent.projects
  return (
    <div className="space-y-4">
      {projects.map((project, idx) => (
        <div key={idx} className="border border-border rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-foreground">{project.title}</h4>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-xs"
              >
                View
              </a>
            )}
          </div>
          <p className="text-foreground/80 text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ResearchSection() {
  const publications = portfolioContent.research
  return (
    <div className="space-y-4">
      {publications.map((pub, idx) => (
        <div key={idx} className="border-l-2 border-primary pl-4">
          <h4 className="font-semibold text-foreground">{pub.title}</h4>
          <p className="text-sm text-foreground/60">{pub.authors}</p>
          <p className="text-xs text-foreground/50">{pub.date}</p>
          <p className="text-foreground/80 text-sm my-2">{pub.description}</p>
          {pub.doi && <p className="text-xs text-foreground/60">DOI: {pub.doi}</p>}
          {pub.link && (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-xs mt-2 inline-block"
            >
              Read More
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

function SkillsSection() {
  const skills = portfolioContent.skills
  return (
    <div className="space-y-4">
      {skills.map((skillGroup, idx) => (
        <div key={idx}>
          <h4 className="font-semibold text-foreground mb-2">{skillGroup.category}</h4>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span key={skill} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ContactSection() {
  const content = portfolioContent.contact
  return (
    <div className="space-y-4">
      <p className="text-foreground/80">{content.message}</p>
      <div className="space-y-3 pt-4 border-t border-border">
        <div>
          <h4 className="font-semibold text-foreground mb-1">Email</h4>
          <a href={`mailto:${content.email}`} className="text-primary hover:underline">
            {content.email}
          </a>
        </div>
        {content.phone && (
          <div>
            <h4 className="font-semibold text-foreground mb-1">Phone</h4>
            <a href={`tel:${content.phone}`} className="text-primary hover:underline">
              {content.phone}
            </a>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Social</h4>
          <div className="flex flex-wrap gap-3">
            {content.social.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

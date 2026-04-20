import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  liveUrl: string
}

export function ProjectCard({ title, description, tags, liveUrl }: ProjectCardProps) {
  return (
    <Card className="group border-border/50 hover:border-border transition-colors">
      <CardContent className="p-6 text-center">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label={`View ${title} live`}
        >
          View Project <ExternalLink className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  )
}

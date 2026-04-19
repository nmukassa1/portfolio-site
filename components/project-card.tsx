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
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`View ${title} live`}
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

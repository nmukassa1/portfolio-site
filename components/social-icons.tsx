import { Github, Linkedin, Mail } from "lucide-react"

export function SocialIcons() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="mailto:hello@example.com"
        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  )
}

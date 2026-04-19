import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Nyah Mukassa
        </h1>
        <p className="mt-2 text-xl text-accent-foreground font-medium">
          Frontend Engineer
        </p>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          I build clean, user-focused web applications. Currently seeking new 
          opportunities to create impactful digital experiences.
        </p>
        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@nyahmukassa.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

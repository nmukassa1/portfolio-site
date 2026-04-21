import { ProfileHeader } from "@/components/profile-header"
import { LinkButton } from "@/components/link-button"
import { SocialIcons } from "@/components/social-icons"

const links = [
  {
    title: "DupeCleaner",
    description: "Find & remove duplicate files",
    url: "https://duplicate-file-cleaner.vercel.app/",
  },
  {
    title: "Movie Gather",
    description: "Your movie directory",
    url: "https://find-new-movies.vercel.app/",
  },
  {
    title: "Designspo",
    description: "Capture & manage design inspirations",
    url: "https://designspo-webpage.vercel.app/",
  },
  {
    title: "Contact Me",
    description: "Get in touch",
    url: "#contact",
    isContact: true,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 md:py-16">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <ProfileHeader />
        
        <div className="w-full flex flex-col gap-3 mt-4">
          {links.map((link) => (
            <LinkButton
              key={link.title}
              title={link.title}
              description={link.description}
              url={link.url}
              isContact={link.isContact}
            />
          ))}
        </div>

        <SocialIcons />

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>Frontend Engineer</p>
        </footer>
      </div>
    </div>
  )
}

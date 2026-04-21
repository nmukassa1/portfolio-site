export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
        NM
      </div>
      <div>
        <h1 className="text-xl font-bold text-foreground">Nyah Mukassa</h1>
        <p className="text-muted-foreground mt-1">
          Building clean, user-focused web apps
        </p>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { ContactModal } from "./contact-modal"

interface LinkButtonProps {
  title: string
  description: string
  url: string
  isContact?: boolean
}

export function LinkButton({ title, description, url, isContact }: LinkButtonProps) {
  const [showModal, setShowModal] = useState(false)

  if (isContact) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-card border border-border rounded-full px-6 py-4 text-center transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
        >
          <span className="font-semibold text-foreground">{title}</span>
          <span className="block text-sm text-muted-foreground mt-0.5">{description}</span>
        </button>
        <ContactModal open={showModal} onClose={() => setShowModal(false)} />
      </>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-card border border-border rounded-full px-6 py-4 text-center transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
    >
      <span className="font-semibold text-foreground">{title}</span>
      <span className="block text-sm text-muted-foreground mt-0.5">{description}</span>
    </a>
  )
}

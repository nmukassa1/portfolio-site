"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Contact"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
            Contact
          </h2>
        </div>
        <div className="rounded-md bg-secondary/50 p-6">
          <div className="flex items-center gap-3 text-primary">
            <CheckCircle className="h-5 w-5" />
            <p className="font-medium">Message sent successfully!</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Thanks for reaching out. {"I'll"} get back to you as soon as possible.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contact
        </h2>
      </div>
      <div className="text-muted-foreground mb-8">
        <p>
          {"I'm"} currently looking for new opportunities. Whether you have a question, 
          a project idea, or just want to say hi, {"I'd"} love to hear from you.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="bg-secondary/50 border-0 placeholder:text-muted-foreground/60 focus-visible:ring-primary"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-secondary/50 border-0 placeholder:text-muted-foreground/60 focus-visible:ring-primary"
          />
        </div>
        <Textarea
          name="message"
          placeholder="Your message..."
          rows={4}
          required
          className="bg-secondary/50 border-0 placeholder:text-muted-foreground/60 focus-visible:ring-primary resize-none"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="w-fit bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isLoading ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </section>
  )
}

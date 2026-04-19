"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-16 border-t border-border">
        <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
        <div className="max-w-md p-6 bg-secondary rounded-lg">
          <p className="text-foreground font-medium">Thanks for reaching out!</p>
          <p className="mt-2 text-muted-foreground">
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-md flex flex-col gap-5">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Your message..."
            rows={5}
          />
        </Field>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  )
}

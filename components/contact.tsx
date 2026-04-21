"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { contactFormSchema } from "@/lib/contact-schema";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const rawData = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    const parsed = contactFormSchema.safeParse(rawData);

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Failed to send message.");
      }

      form.reset();
      setIsSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to send message.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Contact"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
            Contact
          </h2>
        </div>

        <div className="rounded-md bg-secondary/50 p-6">
          <div className="flex items-center gap-3 text-primary">
            <CheckCircle className="h-5 w-5" />
            <p className="font-medium">Message sent successfully!</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Thanks for reaching out. {"I'll"} get back to you as soon as
            possible.
          </p>
        </div>
      </section>
    );
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
          {"I'm"} currently looking for new opportunities. Whether you have a
          question, a project idea, or just want to say hi, {"I'd"} love to hear
          from you.
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
        {error ? (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : null}
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
  );
}

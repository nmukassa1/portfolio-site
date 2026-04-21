import { z } from "zod";

const sanitizeText = (value: string) =>
  value
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long.")
    .transform(sanitizeText),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .max(254, "Email is too long.")
    .transform((value) => value.trim().toLowerCase()),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message is too long.")
    .transform(sanitizeText),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

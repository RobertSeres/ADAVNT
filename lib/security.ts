import validator from "validator";
import { z } from "zod";

/**
 * Sanitizes an input string to prevent XSS and other injections.
 */
export function sanitizeInput(input: string): string {
  if (!input) return "";
  
  // Strip tags and trim
  let sanitized = validator.trim(input);
  sanitized = validator.escape(sanitized);
  
  return sanitized;
}

/**
 * Schema for Apply Form validation using Zod.
 */
export const ApplyFormSchema = z.object({
  name: z.string().min(2, "Név megadása kötelező").max(100),
  company: z.string().min(1, "Cégnév vagy weboldal megadása kötelező").max(100),
  email: z.string().email("Érvénytelen email cím"),
  phone: z.string().min(6, "Érvénytelen telefonszám").max(20),
  goal: z.string().min(10, "Kérlek részletezd a célod kicsit jobban (min. 10 karakter)").max(2000),
});

export type ApplyFormData = z.infer<typeof ApplyFormSchema>;

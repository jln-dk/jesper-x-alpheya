import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string(),
});

export const signUpSchema = z.object({
  firstName: z.string().trim(),
  lastName: z.string().trim(),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});

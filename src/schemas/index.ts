import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Title must have at least 3 characters!!!"),
  body: z.string().min(3, "Body content must have at least 3 characters!!!"),
});

export type PostFormData = z.infer<typeof postSchema>;

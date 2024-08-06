import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  observations: z.string().optional(),
  links: z.array(z.string().url("Deve ser uma URL válida")),
//   tags: z.array(z.string().nonempty("Tag não pode ser vazia")).optional(),
});
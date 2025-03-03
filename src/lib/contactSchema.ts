import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Имя должно быть не короче 2 символов' })
    .max(50, { message: 'Имя должно быть не длиннее 50 символов' }),
  email: z
    .string()
    .min(1, { message: 'Email обязателен' })
    .email({ message: 'Некорректный email' }),
  phone: z
    .string()
    .min(1, { message: 'Телефон обязателен' })
    .regex(/^\+?[0-9]{10,15}$/, { message: 'Некорректный номер телефона' }),
  company: z
    .string()
    .min(1, { message: 'Компания обязательна' })
    .max(100, { message: 'Название компании должно быть не длиннее 100 символов' }),
  status: z.enum(['active', 'closed', 'potential'], {
    errorMap: () => ({ message: 'Статус обязателен' }),
  }),
  resource: z.enum(['ref', 'search', 'adv', 'expo', 'call', 'website', 'email', 'other'], {
    errorMap: () => ({ message: 'Ресурс обязателен' }),
  }),
})

export type ContactFormValues = z.infer<typeof contactSchema>

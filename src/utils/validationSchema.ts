import { z } from "zod";

export const validationSchema = z.object({
  email: z
    .string({
      required_error: "Emailは必須です。"
    }).min(4, "4文字以上入力してください").email("正しいメールアドレスを入力してください"),
  password: z
    .string({
      required_error: "パスワードは必須です。"
    }).min(4, "4文字以上入力してください"),
    
})


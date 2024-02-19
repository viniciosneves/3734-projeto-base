'use server'
import db from "../../../prisma/db"

export async function sendThumbUp(post) {
  // inserir no banco
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  await db.post.update({
    where: {
      id: post.id,
    },
    data: {
      likes: {
        increment: 1
      }
    },
  })
}
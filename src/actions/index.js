'use server'

import { revalidatePath } from "next/cache"
import db from "../../prisma/db"

export async function sendThumbUp(post) {

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
  revalidatePath('/')
  revalidatePath(`/${post.slug}`)
}
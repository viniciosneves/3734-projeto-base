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

export async function sendComment(post, formData) {
  const author = await db.user.findFirst({
    where: {
      username: 'anabeatriz_dev'
    }
  })

  const data = {
    text: formData.get('text'),
    authorId: author.id,
    postId: post.id
  }
  await db.comment.create({
    data
  })
  revalidatePath('/')
  revalidatePath(`/${post.slug}`)
}

export async function replyComment(parent, formData) {
  const author = await db.user.findFirst({
    where: {
      username: 'anabeatriz_dev'
    }
  })

  const post = await db.post.findFirst({
    where: {
      id: parent.postId
    }
  })

  await db.comment.create({
    data: {
      text: formData.get('text'),
      authorId: author.id,
      postId: parent.postId,
      parentId: parent.parentId ?? parent.id
    }
  })
  revalidatePath(`/${post.slug}`)
}
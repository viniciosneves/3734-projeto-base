import db from "../../../../../prisma/db"

export async function GET(
    _request,
    { params }
  ) {

    const data = await db.comment.findMany({
      where: {
        parentId: parseInt(params.commentId)
      },
      include: {
        author: true
      }
    })

    return Response.json(data)

  }
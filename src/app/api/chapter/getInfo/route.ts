// /api/chapter/getInfo

import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodyparser = z.object({
  chapterId: z.string(),
});

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { chapterId } = bodyparser.parse(body);
    const chapter = await prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });
    if (!chapter) {
      NextResponse.json(
        {
          success: false,
          error: "Chapter not found",
        },
        { status: 404 }
      );
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      NextResponse.json(
        {
          success: false,
          error: "Invalid body",
        },
        { status: 400 }
      );
    } else {
      NextResponse.json(
        {
          success: false,
          error: "Unknown",
        },
        { status: 500 }
      );
    }
  }
}

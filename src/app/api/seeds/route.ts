
import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

  await prisma.todo.deleteMany({})

  await prisma.todo.createMany({
    data: [
      { description: "hola nooo 1", complete: true },
      { description: "hola nooo 2", complete: false },
      { description: "hola nooo 3", complete: true },
      { description: "hola nooo 4", complete: false },
    ]
  })

  return NextResponse.json({ message: `Seeds were add to Database ` });
}
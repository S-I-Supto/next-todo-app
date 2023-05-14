import { NextResponse } from "next/server";
import prisma from '../../../libs/prismadb'
export async function POST(req, { params }) {
    const id = params.id;
    const deletedTodo = await prisma.todo.delete({
        where: {
            id: id
        }
    })
    return NextResponse.json({ deletedTodo })
}
import { NextResponse } from 'next/server';
import prisma from '../../libs/prismadb';
export async function POST(req) {
    try {
        const { title, description, ownerId } = await req.json();
        console.log('from api', title, description, ownerId)
        const data = await prisma.todo.create({
            data: {
                title, description, ownerId
            }
        })
        return NextResponse.json(data)
    } catch (err) {
        console.log(err);
    }

}
import { NextResponse } from "next/server";
import prisma from '../../libs/prismadb'
import bcrypt from 'bcrypt'

export async function POST(req) {
    const { name, email, password } = await req.json()
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await prisma.User.create({
        data: {
            name, email, hashedPassword
        }
    })
    console.log(data);
    return NextResponse.json(data);
}
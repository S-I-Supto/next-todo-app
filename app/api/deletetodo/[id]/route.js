import { nextResponse } from "next/server"
export default async function POST() {
    const id = params.id;
    return new nextResponse(`id is ${id}`)

}
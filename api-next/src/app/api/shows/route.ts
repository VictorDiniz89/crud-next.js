import { NextRequest } from "next/server";

import db from "@/lib/db";
//import db from '../../../lib/db'

export async function GET(request: NextRequest) {
    try {
        const shows = db.data.shows
        return Response.json(shows) 
    } catch(error){
        return Response.json("Internal Server Error.", {status:500})
    }
}
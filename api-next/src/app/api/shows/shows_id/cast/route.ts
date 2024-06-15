import { NextRequest } from "next/server";
import { Show } from "@/app/models/Show";

export async function GET(request: NextRequest,
    {params}: {params: {show_id: string}}) {
        
        try {
            const {show_id} = params
            const show = new Show(show_id)
            const castMembers = show.getCastMembers()

            return Response.json(castMembers)
            
        } catch(error){
            return Response.error()
        }
    }
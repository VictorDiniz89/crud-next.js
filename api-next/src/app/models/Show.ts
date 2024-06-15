import db from "@/lib/db"

import { CastMember } from "./CastMember"
import { Character } from "./Character"
import { Quote } from "./Quote"
import { Episode } from "./Episode"

export class Show {
    id: number;
    name: string;
    description:string;

    constructor(id: string){
        const show = db.data.shows.find(e => e.id === Number(id))

        if(!show) {
            throw new Error('Show not found')
        }
        this.id = show.id
        this.name = show.name
        this.description = show.description
    }

    getCastMembers(): CastMember[] {
        const castMemberIds = db.data.roles
        .filter(s => s.showId === this.id)
        .map(role => role.castMemberId)

        const castMembers = db.data.castMembers.filter(s => castMemberIds.includes(s.id))
        return castMembers
    }

    getCharacters(): Character[] {
        return db.data.characters.filter(e => e.showId === this.id)
    }

    getEpisode(): Episode [] {
        return db.data.episodes.filter(e => e.showId === this.id)
    }

    getQuotes(): Quote[] {
        return db.data.quotes.filter(e => e.showId === this.id)
    }
}
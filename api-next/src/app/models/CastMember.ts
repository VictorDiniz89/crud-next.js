import {Role} from './Role';

export interface CastMember{
    id: number;
    name:string;
    roles: Role[]
}
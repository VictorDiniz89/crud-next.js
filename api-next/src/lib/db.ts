import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { CastMember } from '@/app/models/CastMember';
import { Character } from '@/app/models/Character';
import { Episode } from '@/app/models/Episode';
import { Quote } from '@/app/models/Quote';
import { Show } from '@/app/models/Show';
import { Role } from '@/app/models/Role';

// Define o schema do seu banco de dados
type Data = {
    castMembers: CastMember[];
    characters: Character [];
    episodes: Episode [];
    quotes: Quote[];
    roles: Role[];
    shows: Show[];
}

const defaultData: Data = { castMembers: [], characters: [], episodes: [], quotes: [], roles: [], shows: [] };

// Define o caminho para o arquivo JSON que será usado como banco de dados
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');

// Cria o adaptador e a instância do banco de dados
const adapter = new JSONFile<Data>(file);

// Inicializa o banco de dados
const db = new Low<Data>(adapter, defaultData);
await db.read();
await db.write();

// Exporta o db para ser usado em outros módulos
export default db;
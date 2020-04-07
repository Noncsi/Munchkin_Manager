import { Player } from './datamodels/player';
import { Sex } from './datamodels/sex.enum';

export const players: Player[] = [
    new Player("Bogyi", Sex.Female),
    new Player("Pety", Sex.Male),
];
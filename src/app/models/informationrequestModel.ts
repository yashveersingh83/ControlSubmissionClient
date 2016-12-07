import { MileStoneModel} from './mileStoneModel';
import {RecepientModel} from './recepientModel';

export class InformationRequest {
    id: number;
    milestoneId: number;
    recepientId: number;
    informationrequired: string;
    MileStone: MileStoneModel;
    Recepient: RecepientModel;
}


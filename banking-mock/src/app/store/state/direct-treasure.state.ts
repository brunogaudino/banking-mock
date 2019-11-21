//import { IDirectTreasure } from "../../shared/interfaces/direct-treasure.interface";

export interface IDirectTreasureState {
  stateCodeIndex: number;
  stateDescription: string;
  stateDescriptionIndex: any;
  stateExpiry: any;
  statePercentIndex: number;
  stateRate: number;
  stateTitleCode: number;
  stateTitleType: string;
  stateYield: number;
  stateValue: number
}

export const initialDirectTreasureState: IDirectTreasureState = {
  stateCodeIndex: 0,
  stateDescription: '',
  stateDescriptionIndex: '',
  stateExpiry: '',
  statePercentIndex: 0,
  stateRate: 0,
  stateTitleCode: 0,
  stateTitleType: '',
  stateYield: 0,
  stateValue: 0
}

//export default function reducer(state = initialDirectTreasureState, action)
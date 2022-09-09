import {ActionType} from '../action-type/index'

type nonBankrupt = {
    type: ActionType.DEPOSIT | ActionType.WITHDRAW
    payload:number
}
type bankrupt = {
    type: ActionType.BANKRUPT
}

export type Action = nonBankrupt | bankrupt

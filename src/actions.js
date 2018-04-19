// @flow
export type Action = {
    type: string
}

export const BYTE_CHANGE_SECTION = 'BYTE_CHANGE_SECTION';

export function byteChangeSection(name: string) {
    return {
        type: BYTE_CHANGE_SECTION,
        name: name
    }
}

export const INIT_CONSUMABLE_BYTE = 'INIT_CONSUMABLE_BYTE';

export function initConsumableByte(data: any) {
    return {
        type: INIT_CONSUMABLE_BYTE,
        data: data
    }
}
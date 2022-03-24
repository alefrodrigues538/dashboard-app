import { SetStateAction } from 'react'

export function changeState(setState: SetStateAction<any>, value: any) {
    setState(value)
}
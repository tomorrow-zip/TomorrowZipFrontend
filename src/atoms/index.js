// eslint-disable-next-line import/no-extraneous-dependencies
import { atom } from "jotai"

const furnitureTypeAtom = atom(0)
const imgIdAtom = atom("")

const loadingAtom = atom(false)

export { furnitureTypeAtom, imgIdAtom, loadingAtom }

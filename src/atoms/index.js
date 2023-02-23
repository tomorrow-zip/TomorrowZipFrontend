// eslint-disable-next-line import/no-extraneous-dependencies
import { atom, createStore } from "jotai"

const store = createStore()
const furnitureTypeAtom = atom(0)
const analysisAtom = atom({
    detect: [],
    recommend_list: [],
    style: [],
})

const loadingAtom = atom(false)

export { store, furnitureTypeAtom, analysisAtom, loadingAtom }

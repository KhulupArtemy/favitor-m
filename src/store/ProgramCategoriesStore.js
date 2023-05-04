import {makeAutoObservable} from "mobx";

export default class ProgramCategoriesStore {
    constructor() {
        this._programCategories = []
        makeAutoObservable(this)
    }

    setProgramCategories (categories) {
        this._programCategories = categories
    }

    get programCategories () {
        return this._programCategories
    }
}
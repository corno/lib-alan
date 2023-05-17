import * as pt from 'pareto-core-types'

import * as g_array from "res-pareto-array"
import * as g_dictionary from "res-pareto-dictionary"
import * as g_this from "./glossary"

export namespace D {
    
    export type map = {
        readonly 'addEntry': g_dictionary.SYNC.A.F.UnsafeAddEntry
        readonly 'push': g_array.SYNC.A.F.Push
    }
}

export namespace A {
    
    export type map = ($d: D.map, ) => g_this.SYNC.A.F.Map
}

export type API = {
    readonly 'map': A.map
}
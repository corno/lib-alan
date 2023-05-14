import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type serialize = () => g_this.SYNC.A.P.Serialize
}

export type API = {
    readonly 'serialize': A.serialize
}
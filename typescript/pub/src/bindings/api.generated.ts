import * as pt from 'pareto-core-types'

import * as g_main from "../main"
import * as g_resolve from "../submodules/resolve"
import * as g_serialize from "../submodules/serialize"

export namespace D {
    
    
}

export namespace A {
    
    export type resolve = <GAnnotations>() => g_resolve.SYNC.A.F.Resolve<GAnnotations>
    
    export type serialize = () => g_serialize.SYNC.A.P.Serialize
}

export type API = {
    readonly 'resolve': A.resolve
    readonly 'serialize': A.serialize
}
import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_alan from "../../unresolved"
import * as g_common from "glo-pareto-common"
import * as g_liana from "lib-liana/dist/submodules/resolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Map = ($: g_liana.T.Model) => g_alan.T.Root<g_common.T.Null>
        }
    }
}
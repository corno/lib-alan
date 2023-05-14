import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as a_serialize from "../../submodules/serialize"


import { A } from "../api.generated"

export const $$: A.serialize = () => {
    return a_serialize.$a.serialize()
}
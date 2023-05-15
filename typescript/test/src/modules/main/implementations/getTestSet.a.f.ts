import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'

import * as a_pub from "../../../../../pub"
import * as a_l2a from "../../../../../pub/dist/submodules/liana2alan"

import * as a_dictionary from "res-pareto-dictionary"
import * as a_liana from "lib-liana"
import * as a_fp from "lib-fountain-pen"

import { $ as d_data } from "../../../data/playground.data"

import { A } from "../api.generated"

export const $$: A.getTestSet = ($) => {

    const resolved = a_liana.$b.resolve()({
        'imports': pd.d({}),
        'root': d_data,
    })

    const alanAccountingUnresolved = a_l2a.$a.map({
        'addEntry': a_dictionary.$r.unsafeAddEntry()
    })(resolved)

    const alanAccounting = a_pub.$b.resolve()(alanAccountingUnresolved)

    a_fp.$b.createFile()(
        ($i) => {
            $i(pd.a([$.testDirectory, "alan.alan"]), ($i) => {

                a_pub.$b.serialize()(alanAccounting, $i)
            })
        },
        {
            'logError': () => {
                pv.logDebugMessage("fp error")
            }
        }
    )


    return pa.asyncValue({
        elements: pm.wrapRawDictionary({})
    })
}
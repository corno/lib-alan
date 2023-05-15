import * as pd from 'pareto-core-data'

import {
    boolean, data, dictionary, externalTypeReference, glossaryParameter, group, imp, member, null_, optional, procedure, ref,
    sExternalInterfaceReference, sfunction, sInterface, sInterfaceMethod, sInterfaceReference, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
    }),
    'imports': d({
        "alan": imp(),
        "common": imp(),
        "fp": imp(),
        "liana": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
     
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
            "Map": sfunction(externalTypeReference("alan", "Root", {"Annotation": externalTypeReference("common", "Null")}), data(externalTypeReference("liana", "Model"))),
        }),
    },

}
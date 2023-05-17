import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "lib-pareto-lang-data/dist/submodules/unresolved"

import {
    array, constrainedDictionary,
    dictionary,
    globalType,
    group,
    state,
    optional,
    prop,
    t_grp,
    t_sg,
    stateGroup,
    typeSelection,
    component,
    typeRef,
    cyclicReference,
    lookupReference,
    dictionaryReference,
    atom,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({
    }),
    'atom types': pd.d({
        "identifier": null,
    }),
    'global types': pd.d({
        "Node": globalType(group({
            "properties": prop(dictionary(group({
                "type": prop(stateGroup({
                    "collection": state(group({
                        "node": prop(component(typeRef("Node", true))),
                        "key": prop(atom("identifier")),
                    })),
                    "group": state(group({
                        "node": prop(component(typeRef("Node", true))),
                    })),
                    "text": state(group({
                        "constraint": prop(optional(group({
                            "path": prop(component(typeRef("Path", true))),
                            "dictionary": prop(atom("identifier"))
                        }))),
                    })),
                    "state group": state(group({
                        "states": prop(dictionary(group({
                            "constraints": prop(dictionary(group({
                                "path": prop(component(typeRef("Path", true)))
                            }))),
                            "node": prop(component(typeRef("Node", true)))
                        })))
                    }))
                }))
            })))
        })),
        "Path": globalType(group({
            "up steps": prop(array(group({}))),
            "context": prop(stateGroup({
                "sibling": state(group({})),
                "state constraint": state(group({
                    "name": prop(atom("identifier")),
                })),
            })),
            "selection steps": prop(array(stateGroup({
                // "dictionary": state(group({
                //     "name": prop(atom("identifier")),
                // })),
                "group": state(group({
                    "name": prop(atom("identifier")),
                })),
                "state constraint": state(group({
                    "name": prop(atom("identifier")),
                })),
                "reference": state(group({
                    "name": prop(atom("identifier")),
                })),
            })))
        })),
        "Root": globalType(group({
            "numerical types": prop(dictionary(group({

            }))),
            "root": prop(component(typeRef("Node")))
        }))
    }),
}
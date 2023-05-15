import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'

import * as g_this from "../glossary"
import * as g_in from "lib-liana/dist/submodules/resolved"
import * as g_out from "../../unresolved"

import { A } from "../api.generated"

namespace Select {
    export type Global__Type__Selection = ($: g_in.T.Global__Type__Selection) => g_in.T.Global__Type

}

namespace select {

    export const Global__Type__Selection: Select.Global__Type__Selection = ($) => {
        switch ($[0]) {
            case 'import': return pl.ss($, ($) => $.type.referent)
            case 'resolved sibling': return pl.ss($, ($) => $.type.referent)
            default: return pl.au($[0])
        }
    }
}

export const $$: A.map = ($d) => {

    return ($) => {
        function map_Type2Property($: g_in.T.Type): g_out.T.Node.properties.dictionary.D<null> {
            return pl.cc($.type, ($): g_out.T.Node.properties.dictionary.D<null> => {

                switch ($[0]) {
                    case 'atom': return pl.ss($, ($) => ({ //FIXME numbers and files
                        'type': ['text', {
                            'constraint': [false],
                        }]
                    }))
                    case 'array': return pl.ss($, ($) => ({ //FIXME arrays
                        'type': ['text', {
                            'constraint': [false],
                        }]
                    }))
                    case 'component': return pl.ss($, ($) => map_Type2Property(select.Global__Type__Selection($.type).type))
                    case 'dictionary': return pl.ss($, ($) => ({
                        'type': ['collection', {
                            'key': "ID",
                            'node': {
                                'properties': {
                                    'annotation': null,
                                    'dictionary': $d.addEntry({
                                        'dictionary': map_Type2Properties($.type),
                                        'keyValuePair': {
                                            'key': "ID",
                                            'value': {
                                                'type': ['text', {
                                                    'constraint': [false],
                                                }]
                                            }
                                        }
                                    })
                                }
                            }
                        }]
                    }))
                    case 'group': return pl.ss($, ($) => ({
                        'type': ['group', {
                            'node': {
                                'properties': {
                                    'annotation': null,
                                    'dictionary': $.properties.map<g_out.T.Node.properties.dictionary.D<null>>(($) => {
                                        return map_Type2Property($.type)
                                    })
                                }
                            }
                        }]
                    }))
                    case 'nothing': return pl.ss($, ($) => ({
                        'type': ['group', {
                            'node': {
                                'properties': {
                                    'annotation': null,
                                    'dictionary': pm.wrapRawDictionary({}),
                                }
                            }
                        }]
                    }))
                    case 'optional': return pl.ss($, ($) => ({
                        'type': ['state group', {
                            'states': {
                                'annotation': null,
                                'dictionary': pm.wrapRawDictionary({
                                    "no": {
                                        'constraints': {
                                            'annotation': null,
                                            'dictionary': pm.wrapRawDictionary({})
                                        },
                                        'node': {
                                            'properties': {
                                                'annotation': null,
                                                'dictionary': pm.wrapRawDictionary({}),
                                            }
                                        },
                                    },
                                    "yes": {
                                        'constraints': {
                                            'annotation': null,
                                            'dictionary': pm.wrapRawDictionary({})
                                        },
                                        'node': map_Type2Node($.type)
                                    },
                                })

                                // $.states.map(($) => {
                                //     return {
                                //         'constraints': {
                                //             'annotation': null,
                                //             'dictionary': pm.wrapRawDictionary({})
                                //         },
                                //         'node': map_Type2Node($.type)
                                //     }
                                // }),
                            }
                        }]
                    }))
                    case 'resolved reference': return pl.ss($, ($) => ({
                        'type': ['text', {
                            'constraint': [false],
                        }]
                    }))
                    case 'state group': return pl.ss($, ($): g_out.T.Node.properties.dictionary.D<null> => ({
                        'type': ['state group', {
                            'states': {
                                'annotation': null,
                                'dictionary': $.states.map(($) => {
                                    return {
                                        'constraints': {
                                            'annotation': null,
                                            'dictionary': pm.wrapRawDictionary({})
                                        },
                                        'node': map_Type2Node($.type)
                                    }
                                }),
                            }
                        }]
                    }))
                    default: return pl.au($[0])
                }
            })
        }
        function map_Type2Properties($: g_in.T.Type): g_out.T.Node.properties.dictionary<null> {
            const $x = $
            return pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'component': return pl.ss($, ($) => map_Type2Properties(select.Global__Type__Selection($.type).type))
                    case 'group': return pl.ss($, ($) => $.properties.map<g_out.T.Node.properties.dictionary.D<null>>(($) => {
                        return map_Type2Property($.type)
                    }))
                    case 'nothing': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                    default: {
                        return pm.wrapRawDictionary({
                            "x": map_Type2Property($x)
                        })
                    }
                }
            })
        }
        function map_Type2Node($: g_in.T.Type): g_out.T.Node<null> {
            const $x = $
            return {
                'properties': {
                    'annotation': null,
                    'dictionary': map_Type2Properties($)
                }
            }
        }

        return {
            'numerical types': {
                'annotation': null,
                'dictionary': pm.wrapRawDictionary({
                    "number": null,
                })
            },
            'root': map_Type2Node($.root.referent.type)
        }
    }
}
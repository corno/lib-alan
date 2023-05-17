import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

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
        function map_Value__Selection__Tail2Dictionary(
            $: g_in.T.Value__Selection__Tail,
            $p: {
                'current name': string
            }
        ): g_out.T.Node.properties.dictionary.D._ltype.text.constraint.O.dictionary<null> {
            switch ($[0]) {
                case 'component': return pl.ss($, ($) => pd.implementMe(`case`))
                case 'group': return pl.ss($, ($) => {
                    const prop = $.property
                    return pl.optional(
                        $.tail,
                        ($) => {
                            return map_Value__Selection__Tail2Dictionary($, {
                                'current name': prop.key
                            })
                        },
                        () => prop.key
                    )
                })
                case 'reference': return pl.ss($, ($) => {
                    const ref = $.reference

                    const referencedDict = pl.optional(
                        $.reference.dictionary.type.tail,
                        ($) => {
                            return map_Value__Selection__Tail2Dictionary($, {
                                'current name': ref.dictionary.type.start.key
                            })
                        },
                        () => ref.dictionary.type.start.key
                    )
                    return pl.optional(
                        $.tail,
                        ($) => {
                            return map_Value__Selection__Tail2Dictionary($, {
                                'current name': referencedDict
                            })
                        },
                        () => referencedDict
                    )
                })
                case 'state group': return pl.ss($, ($) => pd.implementMe(`case`))
                default: return pl.au($[0])
            }
        }
        function map_Value__Selection__Tail2Selection__Steps(
            $: g_in.T.Value__Selection__Tail,
            $p: {
                'current steps': pt.Array<g_out.T.Path.selection__steps.A<null>>,
                'add group': boolean,
                'current name': string
            }
        ): g_out.T.Path.selection__steps<null> {
            switch ($[0]) {
                case 'component': return pl.ss($, ($) => pd.implementMe(`case`))
                case 'group': return pl.ss($, ($) => {
                    if ($p['add group']) {
                        const prop = $.property
                        const x = $d.push<g_out.T.Path.selection__steps.A<null>>({
                            'array': $p['current steps'],
                            'element': ['group', {
                                'name': prop.key,
                            }]
                        })
                        return pl.optional(
                            $.tail,
                            ($) => {
                                return map_Value__Selection__Tail2Selection__Steps($, {
                                    'current steps': x,
                                    'current name': prop.key,
                                    'add group': true,
                                })
                            },
                            () => x
                        )

                    } else {
                        return $p['current steps']
                    }
                })
                case 'reference': return pl.ss($, ($) => {
                    const ref = $.reference

                    const stepsToReferencedDict = $d.push<g_out.T.Path.selection__steps.A<null>>({
                        'array': pl.optional(
                            $.reference.dictionary.type.tail,
                            ($) => {
                                return map_Value__Selection__Tail2Selection__Steps($, {
                                    'current steps': $p['current steps'],
                                    'add group': false,
                                    'current name': ref.dictionary.type.start.key
                                })
                            },
                            () => $p['current steps']
                        ),
                        'element': ['reference', {
                            'name': $p['current name']
                        }]
                    })
                    return pl.optional(
                        $.tail,
                        ($) => {
                            return map_Value__Selection__Tail2Selection__Steps($, {
                                'current steps': stepsToReferencedDict,
                                'add group': false,
                                'current name': map_Value__Selection__Tail2Dictionary($, {
                                    'current name': $p['current name']
                                })
                            })
                        },
                        () => stepsToReferencedDict
                    )
                })
                case 'state group': return pl.ss($, ($) => pd.implementMe(`case`))
                default: return pl.au($[0])
            }
        }
        function map_Variable2Context(
            $: g_in.T.Variable,
            $p: {
                'name': string,
            }
        ): g_out.T.Path.context<null> {
            switch ($[0]) {
                case 'dictionary constraint': return pl.ss($, ($) => pd.implementMe(`case`))
                case 'parameter': return pl.ss($, ($) => ['sibling', null])
                case 'parent variable': return pl.ss($, ($) => map_Variable2Context($.referent, {
                    'name': $p.name
                }))
                case 'sibling property': return pl.ss($, ($) => ['sibling', null])
                case 'state constraint': return pl.ss($, ($) => ['state constraint', {
                    'name': $p.name,
                }])
                default: return pl.au($[0])
            }
        }
        function map_Variable2Up__Steps(
            $: g_in.T.Variable,
            $p: {
                'current steps': pt.Array<null>,
            }
        ): g_out.T.Path.up__steps<null> {
            switch ($[0]) {
                case 'dictionary constraint': return pl.ss($, ($) => pd.implementMe(`case`))
                case 'parameter': return pl.ss($, ($) => $p['current steps'])
                case 'parent variable': return pl.ss($, ($) => map_Variable2Up__Steps(
                    $.referent,
                    {
                        'current steps': $d.push({
                            'array': $p['current steps'],
                            'element': null
                        })
                    }
                ))
                case 'sibling property': return pl.ss($, ($) => $p['current steps'])
                case 'state constraint': return pl.ss($, ($) => $p['current steps'])//FIXME
                default: return pl.au($[0])
            }
        }
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
                    case 'resolved reference': return pl.ss($, ($): g_out.T.Node.properties.dictionary.D<null> => ({
                        'type': ['text', {
                            'constraint': [true, {
                                'path': {
                                    'up steps': pl.cc($, ($): g_out.T.Path.up__steps<null> => {
                                        return map_Variable2Up__Steps(
                                            $.dictionary.type.start.referent,
                                            {
                                                'current steps': pm.wrapRawArray([]),
                                            }
                                        )
                                    }),
                                    'context': map_Variable2Context(
                                        $.dictionary.type.start.referent,
                                        {
                                            'name': $.dictionary.type.start.key
                                        }
                                    ),
                                    'selection steps': pl.cc($, ($): g_out.T.Path.selection__steps<null> => {
                                        const dict = $.dictionary
                                        return pl.optional(
                                            $.dictionary.type.tail,
                                            ($) => map_Value__Selection__Tail2Selection__Steps(
                                                $,
                                                {
                                                    'current steps': pm.wrapRawArray([]),
                                                    'add group': false,
                                                    'current name': dict.type.start.key
                                                }
                                            ),
                                            () => pm.wrapRawArray([]),
                                        )

                                    })
                                },
                                'dictionary': pl.cc($, ($) => {
                                    const dict = $.dictionary
                                    return pl.optional(
                                        $.dictionary.type.tail,
                                        ($) => map_Value__Selection__Tail2Dictionary(
                                            $,
                                            {
                                                'current name': dict.type.start.key
                                            }
                                        ),
                                        () => dict.type.start.key,
                                    )

                                })
                            }],
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
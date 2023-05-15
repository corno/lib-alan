import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as g_in from "../../resolved"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.serialize = () => {
    return ($, $i) => {
        function serialize_Path($: g_in.T.Path, $i: g_fp.SYNC.I.Line) {
            $['up steps'].__forEach(($) => {
                $i.snippet(` ^`)
            })
            $['selection steps'].__forEach(($) => {
                switch ($[0]) {
                    case 'dictionary':
                        pl.ss($, ($) => {
                            $i.snippet(` . '${$.name}' []`)
                        })
                        break
                    case 'group':
                        pl.ss($, ($) => {
                            $i.snippet(` . '${$.name}'`)
                        })
                        break
                    case 'reference':
                        pl.ss($, ($) => {
                            $i.snippet(` > '${$.name}'`)
                        })
                        break
                    case 'state constraint':
                        pl.ss($, ($) => {
                            $i.snippet(` .& '${$.name}'`)
                        })
                        break
                    default: pl.au($[0])
                }
            })
        }
        function serialize_Node($: g_in.T.Node, $i: g_fp.SYNC.I.Line) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                $.properties.__forEach(() => false, ($, key) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`'${key}': `)
                        pl.cc($.type, ($) => {
                            switch ($[0]) {
                                case 'collection':
                                    pl.ss($, ($) => {
                                        $i.snippet(`collection ['${$.key}'] `)
                                        serialize_Node($.node, $i)
                                    })
                                    break
                                case 'group':
                                    pl.ss($, ($) => {
                                        $i.snippet(`group `)
                                        serialize_Node($.node, $i)
                                    })
                                    break
                                case 'state group':
                                    pl.ss($, ($) => {
                                        $i.snippet(`stategroup (`)
                                        $i.indent(($i) => {
                                            $.states.__forEach(() => false, ($, key) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`'${key}' `)
                                                    serialize_Node($.node, $i)
                                                })
                                            })
                                        })
                                        $i.snippet(`)`)
                                    })
                                    break
                                case 'text':
                                    pl.ss($, ($) => {
                                        $i.snippet(`text`)
                                        pl.optional(
                                            $.constraint,
                                            ($) => {
                                                $i.snippet(` -> `)
                                                serialize_Path($.path, $i)
                                            },
                                            () => { }
                                        )
                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })
                    })
                })
            })
            $i.snippet(`}`)
        }


        $i.line(`users`)
        $i.line(`    anonymous`)
        $i.line(``)
        $i.line(`interfaces`)
        $i.line(``)
        $i.nestedLine(($i) => {
            $i.snippet(`root `)
            serialize_Node($.root, $i)
        })
        $i.line(``)
        $i.nestedLine(($i) => {
            $i.snippet(`numerical-types`)
            $i.indent(($i) => {
                $['numerical types'].__forEach(() => false, ($, key) => {
                    $i.line(`'${key}'`)
                })
            })
        })
    }
}
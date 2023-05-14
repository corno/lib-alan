import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

import { A, D } from "../api.generated"


function mapResultOptional<T, RT, Result>(
    $: pt.OptionalValue<T>,
    res: Result,
    a: ($: ReturningType<T, Result>) => ReturningType<RT, Result>,
): ReturningType<pt.OptionalValue<RT>, Result> {
    return pl.optional(
        $,
        ($): ReturningType<pt.OptionalValue<RT>, Result> => {
            const out = a({
                'content': $,
                'result': res,
            })
            return {
                'content': [true, out.content],
                'result': out.result
            }
        },
        () => ({
            'result': res,
            'content': [false]
        })
    )
}

type Reference<T> = {
    'referent': T,
    'key': string
}

type ReturningType<T, RT> = {
    'content': T,
    'result': RT,
}

function mapOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): pt.OptionalValue<RT> {
    return pl.optional($, ($): pt.OptionalValue<RT> => [true, a($)], () => [false])
}

namespace Resolve {
    export type Node<Annotation> = ($: g_in.T.Node<Annotation>) => g_out.T.Node
    export type Root<Annotation> = ($: g_in.T.Root<Annotation>) => g_out.T.Root
    export type Path<Annotation> = ($: g_in.T.Path<Annotation>) => g_out.T.Path
}

function mapOptional2NonOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): RT {
    return pl.optional($, ($): RT => a($), () => pl.panic("SFSDSFDF"))
}

export const $$: A.resolve = <Annotation>($d: D.resolve<Annotation>, $se: {
    readonly 'onError': g_this.SYNC.I.OnError<Annotation>
}) => {
    const resolve_Path: Resolve.Path<Annotation> = ($) => {
        return $//shortcut
    }
    const resolve_Node: Resolve.Node<Annotation> = ($) => {
        return {
            'properties': $.properties.dictionary.map(($) => {
                return {
                    'type': pl.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'collection': return pl.ss($, ($) => {
                                return ['collection', {
                                    'key': $.key,
                                    'node': resolve_Node($.node),
                                }]
                            })
                            case 'state group': return pl.ss($, ($) => {
                                return ['state group', {
                                    'states': $.states.dictionary.map(($) => {
                                        return {
                                            'constraints': $.constraints.dictionary.map(($) => {
                                                return {
                                                    'path': resolve_Path($.path)
                                                }
                                            }),
                                            'node': resolve_Node($.node)
                                        }
                                    })
                                }]
                            })
                            case 'text': return pl.ss($, ($) => {
                                return ['text', {
                                    'constraint': mapOptional(
                                        $.constraint,
                                        ($) => {
                                            return {
                                                'path': resolve_Path($.path)
                                            }
                                        },
                                    )
                                }]
                            })
                            default: return pl.au($[0])
                        }
                    })
                }
            })
        }
    }
    const resolve_Root: Resolve.Root<Annotation> = ($) => {
        return {
            'numerical types': $['numerical types'].dictionary.map(($) => {
                return null
            }),
            'root': resolve_Node($.root),
        }
    }

    return ($: g_in.T.Root<Annotation>) => {
        return resolve_Root($)
    }
}
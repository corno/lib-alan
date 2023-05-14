import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<null> = {
    'imports': d({}),
    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'types': d({
            "Node": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "properties": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "dictionary": {
                                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                    "type": {
                                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                            "collection": <g_glossary.T.Type<null>>['group', d({
                                                "key": {
                                                    'type': <g_glossary.T.Type<null>>['string', null],
                                                },
                                                "node": {
                                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                        'context': ['local', null],
                                                        'typeXX': "Node",
                                                        'tailXX': a([]),
                                                        'type arguments': d({}),
                                                    }]],
                                                },
                                            })],
                                            "state group": <g_glossary.T.Type<null>>['group', d({
                                                "states": {
                                                    'type': <g_glossary.T.Type<null>>['group', d({
                                                        "annotation": {
                                                            'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                                        },
                                                        "dictionary": {
                                                            'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                                                "constraints": {
                                                                    'type': <g_glossary.T.Type<null>>['group', d({
                                                                        "annotation": {
                                                                            'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                                                        },
                                                                        "dictionary": {
                                                                            'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                                                                "path": {
                                                                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                                                        'context': ['local', null],
                                                                                        'typeXX': "Path",
                                                                                        'tailXX': a([]),
                                                                                        'type arguments': d({}),
                                                                                    }]],
                                                                                },
                                                                            })]],
                                                                        },
                                                                    })],
                                                                },
                                                                "node": {
                                                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                                        'context': ['local', null],
                                                                        'typeXX': "Node",
                                                                        'tailXX': a([]),
                                                                        'type arguments': d({}),
                                                                    }]],
                                                                },
                                                            })]],
                                                        },
                                                    })],
                                                },
                                            })],
                                            "text": <g_glossary.T.Type<null>>['group', d({
                                                "constraint": {
                                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                                                        "path": {
                                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                                'context': ['local', null],
                                                                'typeXX': "Path",
                                                                'tailXX': a([]),
                                                                'type arguments': d({}),
                                                            }]],
                                                        },
                                                    })]],
                                                },
                                            })],
                                        })],
                                    },
                                })]],
                            },
                        })],
                    },
                })]
            },
            "Path": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['array', <g_glossary.T.Type<null>>['taggedUnion', d({
                    "dictionary": <g_glossary.T.Type<null>>['group', d({
                        "name": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                    })],
                    "group": <g_glossary.T.Type<null>>['group', d({
                        "name": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                    })],
                    "parent": <g_glossary.T.Type<null>>['group', d({})],
                    "reference": <g_glossary.T.Type<null>>['group', d({
                        "name": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                    })],
                    "state constraint": <g_glossary.T.Type<null>>['group', d({
                        "name": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                    })],
                })]]
            },
            "Root": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "numerical types": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "dictionary": {
                                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({})]],
                            },
                        })],
                    },
                    "root": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Node",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
        }),
        'namespaces': d({
            "Node": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "properties": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "type": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "collection": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "key": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "node": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "state group": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "states": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "D": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({
                                                                                                    "G": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({
                                                                                                            "constraints": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({
                                                                                                                    "D": {
                                                                                                                        'types': d({}),
                                                                                                                        'namespaces': d({
                                                                                                                            "G": {
                                                                                                                                'types': d({}),
                                                                                                                                'namespaces': d({
                                                                                                                                    "path": {
                                                                                                                                        'types': d({}),
                                                                                                                                        'namespaces': d({}),
                                                                                                                                    },
                                                                                                                                }),
                                                                                                                            },
                                                                                                                        }),
                                                                                                                    },
                                                                                                                }),
                                                                                                            },
                                                                                                            "node": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({}),
                                                                                                            },
                                                                                                        }),
                                                                                                    },
                                                                                                }),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "text": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "constraint": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "O": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({
                                                                                                    "G": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({
                                                                                                            "path": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({}),
                                                                                                            },
                                                                                                        }),
                                                                                                    },
                                                                                                }),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Path": {
                'types': d({}),
                'namespaces': d({
                    "A": {
                        'types': d({}),
                        'namespaces': d({
                            "TU": {
                                'types': d({}),
                                'namespaces': d({
                                    "dictionary": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "name": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "group": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "name": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "parent": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                    "reference": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "name": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "state constraint": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "name": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Root": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "numerical types": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "root": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}
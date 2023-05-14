import { API } from "./api.generated"
import { $$ as iresolve } from "./implementations/resolve.b"
import { $$ as iserialize } from "./implementations/serialize.b"

export const $api: API = {
    'resolve': iresolve,
    'serialize': iserialize,
}
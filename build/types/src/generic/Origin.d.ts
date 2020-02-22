import { Registry } from '../types';
import Null from '../primitive/Null';
/**
 * @name Origin
 * @description
 * Where Origin occurs, it should be ignored as an internal-only value, so it should
 * never actually be constructed
 */
export default class Origin extends Null {
    constructor(registry: Registry);
}

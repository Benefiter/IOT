import { API_PATH } from './constants'
import Orm from 'bigchaindb-orm';

// const Orm = require('bigchaindb-orm')

export default class DID extends Orm {
    constructor(entity) {
        super(API_PATH);
        this.entity = entity;
    }
}

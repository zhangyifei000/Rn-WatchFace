import _ from 'underscore'

DEFAULT_PROPS = {
    title: '',
    time: 0
}

class TimeRecord {
    constructor(props) {
        const {
            title,
            time
        } = props || {};

        Object.assign(this, {
            title,
            time
        });
        _.defaults(this, DEFAULT_PROPS)
    }
}

export default TimeRecord;
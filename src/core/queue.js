class Queue {
    constructor () {
        this.items = {};
    }

    add (obj) {
        if (!obj.id) throw new Error('Objects in a queue need to have an id');
        if (!obj.index) obj.index = 0;
        this.items[obj.id] = _.extend(this.items[obj.id] || {}, obj);
        return this;
    }

    disable (id) {
        this.items[id] = this.items[id] || {};
        this.items[id].disabled = true;
    }

    invoke (name, self, attributes) {
        attributes = [].concat(attributes);
        return _(this.items)
            .chain()
            .sortBy('index')
            .map(entry => {
                if (entry.disabled === true) return;
                if (!entry[name]) return;
                if (!_.isFunction(entry[name])) return;
                return entry[name].apply(self, attributes);
            })
            .compact()
            .value();
    }
}

export default Queue;

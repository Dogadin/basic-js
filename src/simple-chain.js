const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length
    },
    addLink(value) {
        const add = value === null ? 'null' : value
        this.chain.push(add)
        return this
    },
    removeLink(position) {
        if (typeof (position) !== 'number') {
            this.chain = []
            return new Throw('not a number')
        }
        if (Math.floor(position) !== position) {
            this.chain = []
            return new Throw('decimal number')
        }
        if (position < 1 || position > this.getLength()) {
            this.chain = []
            return new Throw('not a member')
        }
        this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position,)]
        return this
    },
    reverseChain() {
        const length = this.chain.length - 1
        for (let i = 0; i < length / 2; i++) {
            const sv = this.chain[length - i]
            this.chain[length - i] = this.chain[i]
            this.chain[i] = sv
        }
        return this
    },

    finishChain() {
        const ret = '( ' + this.chain.join(' )~~( ') + ' )'
        this.chain = []
        return ret
    }
}

module.exports = chainMaker;

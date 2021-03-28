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
        // Если removeLink принимает некорректную позицию (например, не являющуюся числом,
        //     или дробное число, или ссылающуюся на несуществующее звено), он должен выбросить ошибку
        if (typeof (position) !== 'number') return new Throw('not a number')
        if (Math.floor(position) !== position) return new Throw('decimal number')
        if (position < 1 || position > this.getLength()) return new Throw('not a member')
        this.chain = [...this.chain.slice(0, position-1), ...this.chain.slice(position ,)]
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
        this.chain.length = 0
        return ret
    }
}

module.exports = chainMaker;

// console.log(chainMaker.addLink('GHI').addLink('1111').finishChain())
// console.log(chainMaker.addLink('GHI').addLink('dfsdff').reverseChain().finishChain())
//
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(),
//     '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({
//     0: 'first',
//     1: 'second',
//     'length': 2
// }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain(), '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');

// console.log(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(),'( 3rd )~~( function() {} )');
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain(), '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');

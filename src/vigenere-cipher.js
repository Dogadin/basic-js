const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    type = true


    constructor(type = true) {
        this.type = type
    }

    encrypt(message, key) {
        return this.crypt(message, key, true)
    }

    decrypt(message, key) {
        return this.crypt(message, key, false)
    }

    crypt(message, key, cryptType = true) {
        if (typeof (message) === undefined || typeof (key) === undefined) return new Throw('no parameter')

        const m = message.toUpperCase().split('')
        const k = Array(m.length)
        const mCode = m.map(value => {
            const code = value.charCodeAt(0)
            return code >= 65 && code <= 90 ? code - 65 : value
        })
        let j = -1
        for (let i = 0; i < m.length; i++) {
            j += 1
            if (typeof (mCode[i]) !== "number") j -= 1
            j = j % key.length
            k[i] = j >= 0 ? key[j].toUpperCase() : ''
        }
        const kCode = k.map(value => {
            const code = value.charCodeAt(0)
            return code >= 65 && code <= 90 ? code - 65 : value
        })

        const cCode = Array(mCode.length)
        for (let i = 0; i < cCode.length; i++) {
            if (cryptType) {
                cCode[i] = typeof (mCode[i]) === "number" ? (mCode[i] + kCode[i]) % 26 : mCode[i]
            } else {
                cCode[i] = typeof (mCode[i]) === "number" ? (mCode[i] - kCode[i] + 26) % 26 : mCode[i]
            }
        }
        const c = cCode.map(value => {
            return typeof (value) === "number" ? String.fromCharCode(value + 65) : value
        })

        if (this.type === false) {
            const length = c.length - 1
            for (let i = 0; i < length / 2; i++) {
                const sv = c[length - i]
                c[length - i] = c[i]
                c[i] = sv
            }
        }

        return c.join('')

    }
}

module.exports = VigenereCipheringMachine;

const assetsTransformer = require("./assetsTransformer")
// @ponicode
describe("assetsTransformer.process", () => {
    test("0", () => {
        let callFunction = () => {
            assetsTransformer.process("http://placeimg.com/640/480", "index.js")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            assetsTransformer.process("http://placeimg.com/640/480", "install.deb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            assetsTransformer.process("http://placeimg.com/640/480", "image.png")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            assetsTransformer.process("http://placeimg.com/640/480", "script.py")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            assetsTransformer.process("http://placeimg.com/640/480", "note.txt")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            assetsTransformer.process(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

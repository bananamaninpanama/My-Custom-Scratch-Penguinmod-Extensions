class MyExtensionthing {
    getInfo() {
        return {
            "id": "AsciiTextBinaryHex",
            "name": "ASCII-TEXT-BIN-HEX",
            "color1": "#a875a9",
            "blocks": [{
                "opcode": "String2Bin",
                "text": "Convert String [Txt] to Binary",
                "blockType": "reporter",
                "arguments": {
                    "Txt": {
                        "type": "string",
                        "defaultValue": "String"
                    }
                }
            }, {
                "opcode": "Bin2String",
                "text": "Convert Binary [Bin] to String",
                "blockType": "reporter",
                "arguments": {
                    "Bin": {
                        "type": "string",
                        "defaultValue": "01000010 01101001 01101110 01100001 01110010 01111001"
                    }
                }
            }, {
                "opcode": "Hex2Bin",
                "text": "Convert Hex [Hex] to Binary",
                "blockType": "reporter",
                "arguments": {
                    "Hex": {
                        "type": "string",
                        "defaultValue": "48 65 78 61 64 65 63 69 6d 61 6c"
                    }
                }
            }, {
                "opcode": "Bin2Hex",
                "text": "Convert Binary [Bin] to Hex",
                "blockType": "reporter",
                "arguments": {
                    "Bin": {
                        "type": "string",
                        "defaultValue": "01000010 01101001 01101110 01100001 01110010 01111001"
                    }
                }
            }, {
                "opcode": "String2Hex",
                "text": "Convert String [Txt] to Hex",
                "blockType": "reporter",
                "arguments": {
                    "Txt": {
                        "type": "string",
                        "defaultValue": "String"
                    }
                }
            }, {
                "opcode": "Hex2String",
                "text": "Convert Hex [Hex] to String",
                "blockType": "reporter",
                "arguments": {
                    "Hex": {
                        "type": "string",
                            "defaultValue": "48 65 78 61 64 65 63 69 6d 61 6c"
                    }
                }
            }]
        }
    }
    //i think this is the right thing
    HEXBINMAP = {'0':'0000','1':'0001','2':'0010','3':'0011','4':'0100','5':'0101','6':'0110','7':'0111','8':'1000','9':'1001','A':'1010','B':'1011','C':'1100','D':'1101','E':'1110','F':'1111','a':'1010','b':'1011','c':'1100','d':'1101','e':'1110','f':'1111'}
    turnHexDigToDec(digittoconvert) {
        if (/^\d+$/.test(digittoconvert)) {
            return(Number(digittoconvert));
        } else if (/[a-fA-F]/.test(digittoconvert)) {
            return((((['A','B','C','D','E','F','a','b','c','d','e','f'].indexOf(digittoconvert)) % 6) + 10));
        } else {
            throw new Error("you put the wrong character in the function, you silly goose");
        }
    }
    async Hex2String(args) {
        if (!/^\s*([0-9a-fA-F]{2}(\s|$))*$/.test(args["Hex"]))
            return "INVALID";
        else {
            var banana = ''
            for (let indexthing of (args["Hex"].split(" "))) {
                var banana = `${banana}` + String.fromCharCode((this.turnHexDigToDec(indexthing.charAt(0)) * 16) + this.turnHexDigToDec(indexthing.charAt(1)));
            }
            return (banana);
        }
    }
    async Hex2Bin(args) {
        if (!/^\s*([0-9a-fA-F]{2}(\s|$))*$/.test(args["Hex"])) {
        return "INVALID";
        } else {
            var banana = ''
            for (let indexthing of (args["Hex"].split(" "))) {
                var banana = `${banana} ` + this.HEXBINMAP[indexthing.charAt(0)] + this.HEXBINMAP[indexthing.charAt(1)];
            }
            return (banana);
        }
    }
    async Bin2String(args) {
        return args["Bin"];
    }
    async Bin2Hex(args) {
        return args["Bin"];
    }
    async String2Hex(args) {
        return args["Txt"];
    }
    async String2Bin(args) {
        return args["Txt"];
    }
}Scratch.extensions.register(new MyExtensionthing());

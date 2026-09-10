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
        };
    }
    //i think this is the right way to do this thing
    HEXBINMAP = {'0':'0000','1':'0001','2':'0010','3':'0011','4':'0100','5':'0101','6':'0110','7':'0111','8':'1000','9':'1001','A':'1010','B':'1011','C':'1100','D':'1101','E':'1110','F':'1111','a':'1010','b':'1011','c':'1100','d':'1101','e':'1110','f':'1111'}
    BINHEXMAP = Object.fromEntries(Object.entries(this.HEXBINMAP).map(([key, value]) => [value, key]));
    turnHexDigToDec(digittoconvert) {
      if (args["Txt"] != ""){
        if (/^\d+$/.test(digittoconvert)) {
          return(Number(digittoconvert));
        } else if (/[a-fA-F]/.test(digittoconvert)) {
          return((((['A','B','C','D','E','F','a','b','c','d','e','f'].indexOf(digittoconvert)) % 6) + 10));
        } else {
          throw new Error("you put the wrong character in the function, you silly goose");
        } 
      } else {
        return '';
      }
    }
    async Hex2String(args) {
      if (args["Txt"] != ""){
        let hex = args["Hex"].trim();
        if (!/^\s*([0-9a-fA-F]{2}(\s|$))*$/.test(hex)) {
          return "INVALID";
        } else {
          var banana = '';
          for (let indexthing of (hex.split(" "))) {
            banana = `${banana}` + String.fromCharCode((this.turnHexDigToDec(indexthing.charAt(0)) * 16) + this.turnHexDigToDec(indexthing.charAt(1)));
          }
          return banana;
        }
      } else {
        return '';
      }
    }
    async Hex2Bin(args) {
      if (args["Txt"] != ""){
        let hex = args["Hex"].trim();
          if (!/^\s*([0-9a-fA-F]{2}(\s|$))*$/.test(hex)) {
          return "INVALID";
          } else {
            var banana = '';
            for (let indexthing of (hex.split(" "))) {
              banana = `${banana} ` + this.HEXBINMAP[indexthing.charAt(0)] + this.HEXBINMAP[indexthing.charAt(1)];
            }
            return (banana.trim());
        }
      } else {
        return '';
      }
    }
    async Bin2String(args) {
      if (args["Txt"] != ""){
        let bin = args["Bin"].trim();
        if (!/^\s*([0-1]{8}(\s|$))*$/.test(bin)) {
          return "INVALID";
          } else {
            var banana = '';
            for (let indexthing of (bin.split(" "))) {
              var idonwannakeepmakingvariablenamessssss = 0;
              for (let [manin, panama] of indexthing.split("").entries()) {
                if (panama === '1') {
                  idonwannakeepmakingvariablenamessssss += (2 ** (7 - manin));
                }
              }
              banana = `${banana}` + String.fromCharCode(idonwannakeepmakingvariablenamessssss);
            }
            return banana;
          }
      } else {
        return '';
      }
    }
    async Bin2Hex(args) {
      if (args["Txt"] != ""){
        let bin = args["Bin"].trim();
        if (!/^\s*([0-1]{8}(\s|$))*$/.test(bin)) {
          return "INVALID";
        } else {
          var banana = '';
          for (let indexthing of (bin.split(" "))) {
            banana = `${banana} ` + this.BINHEXMAP[indexthing.substring(0,4)] + this.BINHEXMAP[indexthing.substring(4,8)];
          }
          return (banana.trim());
        }
      } else {
        return '';
      }
    }
    async String2Hex(args) {
      if (args["Txt"] != ""){
        var banana = '';
        for (let indexthing of args["Txt"].split("")) {
          var OOOOOHHH = '';
          //this is a donkey kong refrence
          var AHHHHHHHHHHHH = indexthing.charCodeAt();
          //why must coding be so tedious
          for (let ENDMYSUFFERINGPLEASE = 0; ENDMYSUFFERINGPLEASE < 8; ENDMYSUFFERINGPLEASE++) {
            if (AHHHHHHHHHHHH % 2 === 1) {
            OOOOOHHH = 1 + `${OOOOOHHH}`;
            AHHHHHHHHHHHH = (AHHHHHHHHHHHH - 1) / 2;
            } else {
            OOOOOHHH = 0 + `${OOOOOHHH}`;
            AHHHHHHHHHHHH = (AHHHHHHHHHHHH) / 2;
            }
            //this isn't confusing at all
          }
          banana = `${banana} ` + this.BINHEXMAP[OOOOOHHH.substring(0,4)] + this.BINHEXMAP[OOOOOHHH.substring(4,8)];
        }
        return (banana.trim());
      } else {
         return '';
      }
    }
    async String2Bin(args) {
      if (args["Txt"] != ""){
        var orange = '';
        for (let indexthing of args["Txt"].split("")) {
          var OOOOOHHH = '';
          //this is a donkey kong refrence
          var AHHHHHHHHHHHH = indexthing.charCodeAt();
          //why must coding be so tedious
          for (let ENDMYSUFFERINGPLEASE = 0; ENDMYSUFFERINGPLEASE < 8; ENDMYSUFFERINGPLEASE++) {
            if (AHHHHHHHHHHHH % 2 === 1) {
            OOOOOHHH = 1 + `${OOOOOHHH}`;
            AHHHHHHHHHHHH = (AHHHHHHHHHHHH - 1) / 2;
            } else {
            OOOOOHHH = 0 + `${OOOOOHHH}`;
            AHHHHHHHHHHHH = (AHHHHHHHHHHHH) / 2;
            }
            //this isn't confusing at all
          }
        orange = `${orange} ` + `${OOOOOHHH}`;
        }
        return (orange.trim());
      } else {
         return '';
      }
      //something, something, orange you glad i didnt say banana?
    }
}Scratch.extensions.register(new MyExtensionthing());

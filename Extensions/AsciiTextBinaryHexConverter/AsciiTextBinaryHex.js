class MyExtensionthing {
    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }
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
    async Hex2String(args) {
    let hex = args["Hex"].trim();
      if (hex != ""){
        if (!(hex.split(/\s+/).every(block => /^[0-9a-fA-F]{2}$/.test(block)))) {
          return "INVALID";
        } else {
          var banana = '';
          for (let indexthing of (hex.split(" "))) {
            banana = `${banana}` + String.fromCharCode(parseInt(indexthing, 16));
          }
          return banana;
        }
      } else {
        return '';
      }
    }
    async Hex2Bin(args) {
      let hex = args["Hex"].trim();
      if (hex != ""){
          if (!(hex.split(/\s+/).every(block => /^[0-9a-fA-F]{2}$/.test(block)))) {
          return "INVALID";
          } else {
            var banana = '';
            for (let indexthing of (hex.split(" "))) {
              banana = `${banana} ` + ((parseInt(indexthing, 16)).toString(2)).padStart(8, '0');
            }
            return (banana.trim());
          }
      } else {
        return '';
      }
    }
    async Bin2String(args) {
      let bin = args["Bin"].trim();
      if (bin != ""){
        if (!(bin.split(/\s+/).every(block => /^[0-1]{8}$/.test(block)))) {
          return "INVALID";
          } else {
            var banana = '';
            for (let indexthing of (bin.split(" "))) {
              banana = `${banana}` + String.fromCharCode(parseInt(indexthing, 2));
            }
            return banana;
          }
      } else {
        return '';
      }
    }
    async Bin2Hex(args) {
      let bin = args["Bin"].trim();
      if (bin != ""){
        if (!(bin.split(/\s+/).every(block => /^[0-1]{8}$/.test(block)))) {
          return "INVALID";
        } else {
          var banana = '';
          for (let indexthing of (bin.split(" "))) {
            banana = `${banana} ` + ((parseInt(indexthing, 2)).toString(16)).padStart(2, '0');
          }
          return (banana.trim());
        }
      } else {
        return '';
      }
    }
    async String2Hex(args) {
      var txt = args["Txt"];
      if (txt != ""){
        var banana = '';
        for (let indexthing of txt.split("")) {
          banana = `${banana} ` + `${((indexthing.charCodeAt()).toString(16)).padStart(2, '0')}`;
        }
        return (banana.trim());
      } else {
         return '';
      }
    }
    async String2Bin(args) {
      var txt = args["Txt"];
      if (txt != ""){
        var orange = '';
        for (let indexthing of txt.split("")) {
          orange = `${orange} ` + `${((indexthing.charCodeAt()).toString(2)).padStart(8, '0')}`;
        }
        return (orange.trim());
      } else {
         return '';
      }
      //something, something, orange you glad i didnt say banana?
    }
}Scratch.extensions.register(new MyExtensionthing());

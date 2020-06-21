const fs = require('fs');

var str_charCode = 'utf-8';
var str_before = /<code>/g;
var str_onHoverColor = '#00ff0f';

var str_after = `
    <code onClick="
        (function(obj_this){
            var range = document.createRange(); 
            range.selectNodeContents(obj_this); 
            window.getSelection().addRange(range); 
            document.execCommand('copy'); 
            /* <for IE 11 only> */
            try{
                window.clipboardData.setData('text', obj_this.innerHTML);
            
            }catch(e){
                /* nothing to do */
            }
            /* </for IE 11 only> */
            console.log( 'String \`' + obj_this.innerHTML + '\` have been copied.'); 
        }(this));" 
        onMouseOver="this.style.background='${str_onHoverColor}'" 
        onMouseOut="this.style.background=''" 
        title="Click to Copy"
    >
`;

str_after = str_after.replace(/^ +/gm, '');
str_after = str_after.replace(/ +$/gm, ' ');
str_after = str_after.replace(/\n/g, '');

var str_inFilePath = process.argv[2];
var str_outFilePath = process.argv[2];

let str_wholeDocument = fs.readFileSync(str_inFilePath, str_charCode);

str_wholeDocument = str_wholeDocument.replace(str_before, str_after);

fs.writeFileSync(str_outFilePath, str_wholeDocument);


function changeColor(string, oldColor, newColor, withCase) {
    
    if (typeof string === 'string') {
        const str = string.split(" ");
        for (let i = 0; i < str.length; i++) {
            if (withCase === true) {
                if (str[i].toLowerCase() === oldColor.toLowerCase()) {
                    str[i] = newColor
                }
            } else {
                if (str[i] === oldColor) {
                    str[i] = newColor
                }
            } 
             
        }
        return str.join(' ');
        
    } else {
        return ''
    }
    
}




module.exports = changeColor;
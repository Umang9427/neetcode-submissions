class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for (const str of strs) {
            // Append length + delimiter + original string
            encodedString += `${str.length}#${str}`;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0; // Our pointer reading through the encoded string

        while (i < str.length) {
            // 1. Find the delimiter '#' starting from our current position 'i'
            let delimiterIndex = str.indexOf('#', i);
            
            // 2. Extract the digits before '#' to get the length of the string
            const length = parseInt(str.substring(i, delimiterIndex), 10);
            
            // 3. Jump our pointer past the '#' delimiter
            i = delimiterIndex + 1;
            
            // 4. Read 'length' characters to extract the original string
            const originalStr = str.substring(i, i + length);
            result.push(originalStr);
            
            // 5. Move the pointer 'i' past the extracted string
            i += length;
        }

        return result

    }
}

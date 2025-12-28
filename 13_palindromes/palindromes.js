const palindromes = function (string) {
    const alphaNumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    const cleanedString = string
        .toLowerCase()
        .split("")
        .filter((char) => alphaNumerical.includes(char))
        .join("");

    const reversedString = cleanedString.split("").reverse().join("");

    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

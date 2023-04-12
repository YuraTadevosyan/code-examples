// Check Readme.md file

Array.prototype.sameStructureAs = function (other) {
    let isSame = true

    function isSameStructure(current, others) {
        if(current.length !== others.length) return isSame = false;
        for(let i = 0; i < current.length; i++) {
            if(Array.isArray(current[i]) && Array.isArray(others[i])) {
                isSameStructure(current[i], others[i])
            } else if(Array.isArray(current[i]) || Array.isArray(others[i])) {
                isSame = false
            }
        }
    }

    isSameStructure(this, other)

    return isSame
};
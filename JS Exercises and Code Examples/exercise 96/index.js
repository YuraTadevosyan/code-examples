// Check Readme.md file
const grader = (score) => {
    switch (`${score}`.slice(0, 3)) {
        case '0.6':
            return 'D'
        case '0.7':
            return 'C'
        case '0.8':
            return 'B'
        case '0.9':
        case '1':
            return 'A'
        default:
            return 'F'
    }
}
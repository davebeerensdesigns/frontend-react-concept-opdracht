export function limitChar (string = '', limit = 0) {
    return string.length > limit ? string.substring(0, limit) + '...' : string.substring(0, limit)
}
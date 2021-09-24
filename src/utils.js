export const getEnv = key => {
    if (typeof window === 'undefined') {
        // node
        return process.env[key]
    }
    // browser
    return window.process.env[key]
}
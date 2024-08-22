export const useCleanObject = () => {
    const cleanObject = (obj) => {
        const newObj = {}

        if (obj instanceof Object) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    newObj[key] = ''
                }
            }
        }

        return newObj
    }

    return { cleanObject }
}

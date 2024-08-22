export const useDates = () => {
    const format = (dateStr) => {
        const date = new Date(dateStr)

        const formattedDate = new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
        }).format(date)

        return formattedDate
    }

    return { format }
}

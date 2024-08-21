import api from '@/lib/axios'

export default {
    async list() {
        try {
            const response = await api.get('https://cors-anywhere.herokuapp.com/https://picsum.photos/v2/list')
            return response.data
        } catch (err) {
            return err
        }
    },
}

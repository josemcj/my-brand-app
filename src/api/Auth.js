import api from '@/lib/axios'

export default {
    async login(data) {
        try {
            const response = await api.post('/login', data)
            return response.data
        } catch (err) {
            return err
        }
    },
}

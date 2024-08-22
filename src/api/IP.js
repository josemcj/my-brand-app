import api from '@/lib/axios'

export default {
    async getIpAddress() {
        try {
            const response = await api.get('https://api.ipify.org/?format=json')
            return response.data
        } catch (err) {
            return 'no ip'
        }
    },
}

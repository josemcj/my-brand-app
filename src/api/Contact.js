import api from '@/lib/axios'

export default {
    async list() {
        try {
            const response = await api.get('/contact')
            return response.data
        } catch (err) {
            return err
        }
    },

    async store(data) {
        try {
            const response = await api.post('/contact', data)
            return response
        } catch (err) {
            return err
        }
    },

    async update(id, data) {
        try {
            const response = await api.put(`/contact/${id}`, data)
            return response.data
        } catch (err) {
            return err
        }
    },

    async delete(id) {
        try {
            const response = await api.delete(`/contact/${id}`)
            return response.data
        } catch (err) {
            return err
        }
    },
}

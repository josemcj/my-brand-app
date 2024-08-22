import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import AuthAPI from '@/api/Auth'

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const user = ref(null)
    const isLogged = ref(false)
    const authError = ref(null)

    const setLoggedUser = (user) => {
        user.value = user
        isLogged.value = true
    }

    const cleanSession = () => {
        user.value = null
        localStorage.removeItem('token')
        isLogged.value = false
    }

    const login = async (data) => {
        const response = await AuthAPI.login(data)

        if (response.token) {
            setLoggedUser(response.user)
            localStorage.setItem('token', response.token)
            return
        }

        cleanSession()
        authError.value = response.error
    }

    const logout = async () => {
        await AuthAPI.logout()
        cleanSession()
        router.push('/')
    }

    const loggedUser = () => user.value

    const isLoggedUser = () => isLogged.value

    const error = () => authError.value

    return {
        loggedUser,
        isLoggedUser,
        login,
        logout,
        error,
    }
})

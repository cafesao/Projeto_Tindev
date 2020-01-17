import React from 'react'
import axios from 'axios'

export default api = axios.create({
    baseURL: 'http://192.168.0.109:3333'
})
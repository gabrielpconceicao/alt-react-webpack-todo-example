import routerOptions from './src/router/options.js'
import Client from 'react-engine/lib/client'

// mounting
document.addEventListener('DOMContentLoaded', () => Client.boot( routerOptions ))

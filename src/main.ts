// import { createApp } from 'vue'
import App from './App.vue'
import { game } from './game'
import { createApp } from './runtime-canvas'

// createApp(App).mount('#app')


createApp(App).mount(game.stage)
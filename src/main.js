import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import directives from "@/components/directives";


const app = createApp(App)

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.use(store).mount('#app')



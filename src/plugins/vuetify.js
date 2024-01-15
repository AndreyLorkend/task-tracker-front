import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const icons = {
  defaultSet: 'mdi'
}

const theme = {
  dark: false,
}

const vuetify = createVuetify({
  components: {
    ...components, 
  },
  directives,
  icons,
  theme
})

export default vuetify

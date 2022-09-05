import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

const vuetify = new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                main_color: "#282B4C",
                second_color: "#1A1D3C",
                button_color: "#00B7BE",
                file_edit_button: "#D334FF",
                file_publish_button: "#03D8E0",
                active_color: "#66e08f",
                progress_linear_color: "#1b9ca4",
                topic_color: "#FF568D",
                primary: "#14C6FF",
                secondary: "#424242",
                accent: "#82B1FF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
                lightblue: "#14c6FF",
                yellow: "#FFCF00",
                pink: "#FF1976",
                orange: "#FF8657",
                magenta: "#C33AFC",
                darkblue: "#1E2D56",
                gray: "#909090",
                neutralgray: "#9BA6C1",
                green: "#2ED47A",
                red: "#FF5c4E",
                darkblueshade: "#308DC2",
                lightgray: "#BDBDBD",
                lightpink: "#FFCFE3",
                white: "#FFFFFF"
            }
        }
    }
});

export default vuetify
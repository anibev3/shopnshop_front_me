// plugins/v-calendar.js
import Vue from 'vue';
import VCalendar from 'v-calendar';
// import 'v-calendar/dist/style.css';

if (process.client) {
    Vue.use(VCalendar);
}

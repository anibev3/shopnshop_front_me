// plugins/vue2-slot-calendar.js
import Vue from 'vue';
import 'vue2-slot-calendar/lib/calendar.min.css';
import Calendar from 'vue2-slot-calendar';

if (process.client) {
    Vue.component('Calendar', Calendar);
}

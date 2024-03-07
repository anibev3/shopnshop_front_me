<template>
    <div
        class="newsletter-popup mfp-hide bg-img"
        id="newsletter-popup-form"
        style="
            background: #f1f1f1 no-repeat center/cover
                url(https://www.d-themes.com/vue/porto/demo-36/images/newsletter_popup_bg.jpg);
        "
    >
        <div class="newsletter-popup-content">
            <img
                src="~/static/images/logo-black.png"
                alt="Logo"
                class="logo-newsletter"
                width="101"
                height="40"
            />
            <h2>Planifier une consultation</h2>

            <p>
                Commencer par entrer la date ainsi que l'heure de la
                consultation souhaité
            </p>

            <form action="#">
                <div class="input-group">
                    <input
                        type="email"
                        class="form-control"
                        id="newsletter-email"
                        name="newsletter-email"
                        placeholder="Your email address"
                        required
                    />
                    <input
                        type="submit"
                        class="btn btn-primary"
                        value="Submit"
                    />
                </div>
            </form>
            <div class="newsletter-subscribe">
                <div class="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        class="custom-control-input"
                        value="0"
                        id="show-again"
                        @change="removeNewsletter($event)"
                    />
                    <label for="show-again" class="custom-control-label"
                        >Don't show this popup again</label
                    >
                </div>
            </div>
        </div>

        <button
            title="Close (Esc)"
            type="button"
            class="mfp-close"
            @click="$emit('close')"
        >
            ×
        </button>
    </div>
</template>

<script>
import { setCookie } from '~/utils/index';

export default {
    methods: {
        removeNewsletter: function (e) {
            setCookie('newsletter', !e.target.checked);
        },
    },
};
</script>

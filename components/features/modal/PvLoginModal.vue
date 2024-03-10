<!-- <div class="modal-wrapper login-popup">
		<div class="container">
			<h2 class="title">Login</h2>

			<form
				action="#"
				class="mb-0"
			>
				<label for="login-email">
					Username or email address
					<span class="required">*</span>
				</label>

				<input
					type="email"
					class="form-input form-wide mb-2"
					id="login-email"
					required
				/>
				<label for="login-password">
					Password
					<span class="required">*</span>
				</label>

				<input
					type="password"
					class="form-input form-wide mb-2"
					id="login-password"
					required
				/>

				<div class="form-footer">
					<div class="custom-control custom-checkbox ml-0">
						<input
							type="checkbox"
							class="custom-control-input"
							id="lost-password"
						/>
						<label
							class="custom-control-label form-footer-right"
							for="lost-password"
						>Remember me</label>
					</div>
					<div class="form-footer-right">
						<nuxt-link
							to="/pages/forgot-password"
							class="forget-password text-dark"
						>Forgot Password?</nuxt-link>
					</div>
				</div>

				<div class="text-center">
					<button
						type="submit"
						class="btn btn-dark btn-block btn-md"
					>LOGIN</button>

					<nuxt-link
						to="/pages/login"
						class="btn btn-regist bg-transparent text-transform-none p-0"
					>Register Now!</nuxt-link>
				</div>
			</form>
		</div>

		<button
			title="Close (Esc)"
			type="button"
			class="mfp-close"
			@click="$emit('close')"
		>×</button>
	</div> -->
<template>
    <div class="login-register-tabs">
        <div class="tabs">
            <a
                :class="{ active: activeTab === 'login' }"
                @click.prevent="activeTab = 'login'"
            >
                CONNEXION
            </a>
            <a
                :class="{ active: activeTab === 'register' }"
                @click.prevent="activeTab = 'register'"
            >
                JE N'AI PAS DE COMPTE
            </a>
        </div>
        <div class="tab-content">
            <div v-if="activeTab === 'login'">
                <!-- Contenu de l'onglet Login -->
                <p>Formulaire de connexion ici</p>
            </div>
            <div v-if="activeTab === 'register'">
                <!-- Contenu de l'onglet Register -->
                <p>Formulaire d'inscription ici</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'login', // Onglet actif par défaut
        };
    },
};
</script>

<style scoped>
.login-register-tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tabs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
}

.tabs a {
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: rgb(150, 147, 147);
    cursor: pointer;
    padding: 10px 0;
    border-bottom: 3px solid transparent;
    transition: color 0.3s ease, border-bottom-color 0.3s ease; /* Ajout de la transition */
}

.tabs a.active {
    color: black;
    border-bottom-color: #007bff;
}

.tab-content {
    width: 100%;
    padding: 20px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <div class="ad-auth">
    <div class="ad-si-form-container shadow">
      <!-- <navbar-logo class="ad-si-form-logo" /> -->
      <h2 style="margin: 10px 0">Day Planner</h2>
      <p class="text--dark">
        Sign in to continue.
      </p>
      <form @submit.prevent="handleSubmit">
        <label for="email" class="text--dark" style="margin-bottom: 4px">Email</label>
        <input v-model="email" name="email" type="email" style="margin-bottom: 20px" />
        <label for="password" class="text--dark" style="margin-bottom: 4px">Password</label>
        <input v-model="password" name="password" type="password" />
        <button class="button" style="margin-top: 20px;">Sign in</button>
      </form>
    </div>
    <devyne-logo />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
import DevyneLogo from '../components/svgs/DevyneLogo.vue'

export default {
  components: {
    DevyneLogo,
  },
  setup() {
    const email = ref('');
    const password = ref('');

    const store = useStore()

    const handleSubmit = () => {
      store.dispatch('signInUser', {
        email: email.value,
        password: password.value,
      })
    }

    return {
      email,
      password,
      handleSubmit,
    }
    
  }

}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.ad-auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: $color-background;
  width: 100vw;
  height: 100vh;
}

.ad-si-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 440px;
  width: 90%;
  margin: 50px 5%;
  padding: 30px 20px;
  box-sizing: border-box;

  background-color: $color-card;
  box-shadow: $card-shadow;
}

.ad-si-form-container form {
  margin-top: 20px;
  align-items: center;
}


.ad-si-form-logo >>> * {
  fill: var(--c-primary);
}
</style>
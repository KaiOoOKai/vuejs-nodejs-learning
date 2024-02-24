<template>
  <div>
    <div id="g_id_onload"
         :data-client_id="clientID"
         data-callback="handleCredentialResponse">
    </div>
    <div class="g_id_signin" data-type="standard"></div>
  </div>
</template>

<script>
import axios from 'axios';

const clientId = process.env.VUE_APP_GOOGLE_CLIENT_ID;

export default {
  data() {
    return {
      clientID: clientId
    };
  },
  mounted() {
    this.loadGoogleSignInClient();
  },
  methods: {
    loadGoogleSignInClient() {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    },
    handleCredentialResponse(response) {
      // Handle the credential response here
      // Response includes the credential, such as the ID token
      console.log(response);

      // Now, you can send the ID token to your backend for verification
      this.sendTokenToServer(response.credential);
    },
    async sendTokenToServer(token) {
      try {
        const response = await axios.post('https://your-backend-api.com/login/google', {
          idToken: token
        });
        
        // Handle successful response from your backend, e.g., update UI or store user data
        console.log(response.data);

      } catch (error) {
        // Handle error response, e.g., display error message
        console.error('Error during login:', error.response.data);
      }
    }
  }
}
</script>

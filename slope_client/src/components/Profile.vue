<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import notFoundImg from '@/assets/NotFound.jpg'
import { fetchAuth } from '@/api/fetchAuth'

const router = useRouter()

// --- State ---
const profile = ref(null)
const creditCard = ref(null)
const subscription = ref(null)
const rebuySub = ref(false)
const subscriptionValue = ref(0)
const subscriptionDiscount = ref(0)
const loading = ref(true)
const error = ref(null)

// --- Fetch profile data from Spring Boot ---
onMounted(async () => {
  try {
    // TODO: replace with your actual Spring Boot endpoints
    const profileRes = await fetchAuth('/api/v1/users/1/user')

    if (!profileRes.ok) throw new Error('Failed to load profile')

    profile.value = await profileRes.json()

    if (creditCardRes.ok) {
      const ccData = await creditCardRes.json()
      creditCard.value = ccData ?? null
    }

    if (subscriptionRes.ok) {
      const subData = await subscriptionRes.json()
      subscription.value = subData?.subscription ?? null
      rebuySub.value = subData?.rebuySub ?? false
      subscriptionValue.value = subData?.value ?? 0
      subscriptionDiscount.value = subData?.discount ?? 0
    }
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

// --- Actions ---
const handleDeleteCard = async () => {
  // TODO: call DELETE /api/user/credit-card
  try {
    await fetch('/api/user/credit-card', { method: 'DELETE' })
    creditCard.value = null
  } catch (err) {
    console.error('Failed to delete card:', err)
  }
}

const handleLogout = () => {
  // TODO: implement logout with Spring Boot session/token invalidation
  router.push('/login')
}
</script>

<template>
  <section id="starter-section" class="starter-section section">
    <div class="container profileInfo" data-aos="fade-up">

      <!-- Loading / Error -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status" />
      </div>

      <div v-else-if="error" class="alert alert-danger">
        {{ error }}
      </div>

      <template v-else>

        <!-- Profile Info -->
        <div class="profile-container">
          <div class="profile-info">
            <h2>INFORMAZIONI PROFILO</h2>
            <p><strong>Nome utente:</strong> {{ profile.username }}</p>
            <p><strong>Nome:</strong> {{ profile.name }}</p>
            <p><strong>Cognome:</strong> {{ profile.surname }}</p>
            <p><strong>Email di conferma:</strong> {{ profile.email }}</p>
            <p><strong>Numero di telefono:</strong> {{ profile.phoneNumber }}</p>
            <p><strong>Data nascita:</strong> {{ profile.birthDate }}</p>
          </div>

          <div class="profile-image">
            <img
              v-if="profile.imageUrl"
              class="profile-pic"
              :src="profile.imageUrl"
              loading="lazy"
              alt="Profile picture"
            />
            <img
              v-else
              class="profile-pic"
              :src="notFoundImg"
              loading="lazy"
              alt="No profile picture"
            />
          </div>
        </div>

        <div class="button-container">
          <router-link to="/profile/edit">
            <button class="edit-button">Modifica profilo</button>
          </router-link>
        </div>

        <!-- Credit Card -->
        <div v-if="creditCard" class="creditCard">
          <h2>Metodo di Pagamento</h2>
          <div class="card-details">
            <p><strong>Nome:</strong> {{ creditCard.cardHolderName }}</p>
            <p><strong>Cognome:</strong> {{ creditCard.cardHolderSurname }}</p>
            <p><strong>Numero Carta:</strong> **** **** **** {{ creditCard.cardNumber.slice(-4) }}</p>
            <p><strong>Scadenza:</strong> {{ creditCard.expiryDate }}</p>
            <p><strong>CVV:</strong> ***</p>
          </div>
          <div class="card-actions">
            <router-link to="/profile/credit-card/edit">
              <button class="btn edit">Modifica</button>
            </router-link>
            <button class="btn remove" @click="handleDeleteCard">
              Rimuovi Carta
            </button>
          </div>
        </div>

        <!-- Active Subscription -->
        <div v-if="subscription" class="subscription-box">
          <h2>Abbonamento</h2>
          <p>Data inizio: {{ subscription.startDate }}</p>
          <p>Data fine: {{ subscription.endDate }}</p>
          <div v-if="rebuySub" class="button-container">
            <router-link to="/subscription/rebuy">
              <button class="edit-button">Acquista nuovamente</button>
            </router-link>
          </div>
        </div>

        <!-- No Subscription — Buy CTA -->
        <div v-else class="containerSubscription">
          <h1>Abbonamento Stagionale</h1>
          <div class="price-box">
            <p>
              Acquista l'abbonamento stagionale a
              <strong>€{{ subscriptionValue }}</strong> e ottieni uno
              <strong>sconto del {{ subscriptionDiscount }}%</strong>
              su tutti gli skipass giornalieri durante la stagione.
            </p>
          </div>
          <div class="button-container">
            <router-link to="/subscription/buy">
              <button class="super-button">Acquista abbonamento</button>
            </router-link>
          </div>
        </div>

      </template>
    </div>
  </section>
</template>
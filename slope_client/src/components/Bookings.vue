<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const bookings = ref([]);
const oldBookings = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    try {
        const [bookingsRes, oldBookingsRes] = await Promise.all([
            fetch('/api/bookings'),
            fetch('/api/bookings/old'),
        ]);

        if (!bookingsRes.ok) throw new Error('Failed to load bookings');

        bookings.value = await bookingsRes.json();

        if (oldBookingsRes.ok) {
            oldBookings.value = await oldBookingsRes.json();
        }
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
})

const handleModify = (idSkipassBooking) => {
    router.push(`/bookings/modify/${idSkipassBooking}`);
}

const handleDelete = async (idSkipassBooking) => {
    try {
        const res = await fetch(`/api/bookings/${idSkipassBooking}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete booking');
        bookings.value = bookings.value.filter(
            (e) => e.booking.idSkipassBooking !== idSkipassBooking
        );
    } catch (err) {
        console.error('Delete error:', err);
    }
}

const handleBuyInsurance = async (idSkipassBooking) => {
    try {
        const res = await fetch('/api/insurance/buy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idSkipassBooking }),
        });
        if (!res.ok) throw new Error('Failed to buy insurance');
        const updated = await fetch('/api/bookings');
        bookings.value = await updated.json();
    } catch (err) {
        console.error('Insurance error:', err);
    }
}
</script>

<template>
    <section id="starter-section" class="starter-section section">
        <div class="container showBookings" data-aos="fade-up">

            <!-- Loading -->
            <div v-if="loading" class="text-center py-5">
                <div class="spinner-border text-primary" role="status" />
            </div>

            <!-- Error -->
            <div v-else-if="error" class="alert alert-danger">
                {{ error }}
            </div>

            <template v-else>

                <!-- No bookings -->
                <template v-if="bookings.length === 0">
                    <p>Non hai ancora prenotato nulla. Vuoi dare un'occhiata alle strutture disponibili?</p>
                    <router-link to="/" class="btn btn-primary">Vai alla ricerca</router-link>
                </template>

                <!-- Active bookings -->
                <template v-else>
                    <h1>Dati prenotazione</h1>
                    <div class="card-booking-wrapper">

                        <div v-for="e in bookings" :key="e.booking.idSkipassBooking" class="booking-card"
                            :id="`booking-${e.booking.idSkipassBooking}`">
                            <p><strong>Nome:</strong> {{ e.booking.name }}</p>
                            <p><strong>Cognome:</strong> {{ e.booking.surname }}</p>
                            <p><strong>Email:</strong> {{ e.booking.email }}</p>
                            <p><strong>Data:</strong> {{ e.booking.startDate }}</p>
                            <p>
                                <strong>Periodo:</strong>
                                {{ e.booking.period }}
                                {{ e.booking.period >= 1 ? 'giorno' : 'giorni' }}
                            </p>
                            <p><strong>Tipo:</strong> {{ e.booking.type }}</p>
                            <p><strong>Prezzo totale:</strong> {{ e.booking.value }} euro</p>
                            <p><strong>Impianto sci:</strong> {{ e.facility.name }}</p>

                            <!-- Insurance -->
                            <template v-if="e.insurance">
                                <p><strong>Assicurazione:</strong></p>
                                <img class="imagePreview" src="" alt="Assicurazione acquistata" />
                            </template>
                            <template v-else>
                                <div class="flex">
                                    <p><strong>Assicurazione:</strong></p>
                                    <button class="btn-insurance"
                                        @click="handleBuyInsurance(e.booking.idSkipassBooking)">
                                        Acquista
                                    </button>
                                </div>
                            </template>

                            <!-- Actions -->
                            <div class="booking-actions">
                                <button class="btn-mod" @click="handleModify(e.booking.idSkipassBooking)">
                                    Modifica
                                </button>
                                <button class="btn-er" @click="handleDelete(e.booking.idSkipassBooking)">
                                    Elimina
                                </button>
                            </div>
                        </div>

                        <!-- Old / expired bookings -->
                        <template v-if="oldBookings.length > 0">
                            <h2>Prenotazioni scadute</h2>
                            <div v-for="e in oldBookings" :key="e.booking.idSkipassBooking" class="booking-card"
                                :id="`booking-${e.booking.idSkipassBooking}`">
                                <p><strong>Nome:</strong> {{ e.booking.name }}</p>
                                <p><strong>Cognome:</strong> {{ e.booking.surname }}</p>
                                <p><strong>Email:</strong> {{ e.booking.email }}</p>
                                <p><strong>Data:</strong> {{ e.booking.startDate }}</p>
                                <p><strong>Tipo:</strong> {{ e.booking.type }}</p>
                                <p><strong>Prezzo totale:</strong> {{ e.booking.value }} euro</p>
                                <p><strong>Impianto sci:</strong> {{ e.facility.name }}</p>
                            </div>
                        </template>

                    </div>
                </template>

            </template>
        </div>
    </section>
</template>
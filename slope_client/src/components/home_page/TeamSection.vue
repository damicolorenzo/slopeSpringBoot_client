<script setup>
import notFoundImg from '@/assets/NotFound.jpg';

const members = [
  {
    imageUrl: 'http://localhost:9194/api/v1/images/image/download/3',
    name: 'Andrea Esposito',
    role: 'Ski Instructor',
    bio: 'Whether it\'s your first run or you want to refine your technique, I\'ll guide you with passion and fun.',
    social: {
      twitter: 'https://x.com/',
      facebook: 'https://facebook.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    imageUrl: 'http://localhost:9194/api/v1/images/image/download/4',
    name: 'Giordana Di Fabio',
    role: 'Snowboard Instructor',
    bio: 'Live snowboarding to the fullest! With passion, energy, and experience, I\'ll help you find your style on the board.',
    social: {
      twitter: 'https://x.com/',
      facebook: 'https://facebook.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    imageUrl: 'http://localhost:9194/api/v1/images/image/download/5',
    name: 'Lorenzo D\'Amico',
    role: 'Alpine Ski Instructor',
    bio: 'Passionate about snow and high-altitude silence, I\'ll introduce you to alpine skiing with care, patience, and a deep love for the mountains.',
    social: {
      twitter: 'https://x.com/',
      facebook: 'https://facebook.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/'
    }
  }
];

const onImgError = (e) => {
  e.target.src = notFoundImg
};
</script>

<template>
  <section id="team" class="team section">

    <div class="container section-title">
      <h2>Team</h2>
      <p>We turn ideas into code and code into digital experiences.</p>
    </div>

    <div class="container">

      <div class="row gy-4 justify-content-center">

        <div v-for="(member, index) in members" :key="index" class="col-lg-4 col-md-6 d-flex">
          <div class="member">
            <div class="member-img-wrapper">
              <img :src="member.imageUrl" :alt="member.name" class="member-img" @error="onImgError" />
            </div>

            <div class="member-content">
              <h4>{{ member.name }}</h4>
              <span>{{ member.role }}</span>
              <p>{{ member.bio }}</p>
              <div class="social">
                <a :href="member.social.twitter" target="_blank"><i class="bi bi-twitter-x"></i></a>
                <a :href="member.social.facebook" target="_blank"><i class="bi bi-facebook"></i></a>
                <a :href="member.social.instagram" target="_blank"><i class="bi bi-instagram"></i></a>
                <a :href="member.social.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>
.team {
  padding: 80px 0;
}

/* Section title */
.section-title {
  text-align: center;
  margin-bottom: 48px;
}

.section-title span {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #63b3f5;
  margin-bottom: 8px;
}

.section-title h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a3a5c;
  margin-bottom: 12px;
}

.section-title p {
  color: #5a7a9a;
  font-size: 15px;
}

/* Member card */
.member {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(42, 82, 152, 0.1);
  box-shadow: 0 4px 24px rgba(26, 58, 92, 0.08);
  text-align: center;
  width: 100%;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(26, 58, 92, 0.16);
}

/* Image */
.member-img-wrapper {
  background: linear-gradient(135deg, #1a3a5c 0%, #2a5298 100%);
  padding: 32px 0 20px 0;
  display: flex;
  justify-content: center;
}

.member-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;
}

.member:hover .member-img {
  transform: scale(1.06);
}

/* Content */
.member-content {
  padding: 24px 24px 28px;
}

.member-content h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a3a5c;
  margin-bottom: 4px;
}

.member-content span {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #63b3f5;
  margin-bottom: 14px;
}

.member-content p {
  font-size: 14px;
  line-height: 1.7;
  color: #5a7a9a;
  margin-bottom: 20px;
}

/* Social icons */
.social {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid rgba(42, 82, 152, 0.2);
  color: #2a5298;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social a:hover {
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  border-color: transparent;
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(26, 58, 92, 0.3);
}
</style>
<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/kdompy-saing.png" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Kdompy Saing">
          Kdompy Saing
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Manager</span>
          <span>Mobile Application Development</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-twitter" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              X
            </p>

            <a href="https://twitter.com/saingkdompy" class="contact-link" target="_blank">Saing Kdompy</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-electron" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Telegram
            </p>

            <a href="https://t.me/kdompy_saing" class="contact-link" target="_blank">Kdompy Saing</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/saing-kdompy-637580140/" class="contact-link" target="_blank">Kdompy Saing</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Phnom Penh</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="mailto:saingkdompy@email.com" class="social-link" target="_blank">
            <ion-icon name="mail-outline" />
          </NuxtLink>
        </li>
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>

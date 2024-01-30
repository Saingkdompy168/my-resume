<script setup>
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";

useHead({});

onMounted(() => {
  useLocaleStore();
});

const { locale } = useI18n({ useScope: "global" });

/* Testimonials */
const { data: testimonials } = await useFetch("/api/testimonials");

const testimonialItem = ref({});
const activeModal = ref(false);
const activeOverlay = ref(false);

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find((item) => item.id === id);
  activeModal.value = true;
  activeOverlay.value = true;
}

function closeTestimonaial() {
  testimonialItem.value = {};
  activeModal.value = false;
  activeOverlay.value = false;
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch("/api/services");

/* Services */
const { data: about } = await useFetch("/api/about");
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <meta name="description" content="Kdompy Saing">
      <meta property="og:image" content="https://media.licdn.com/dms/image/C5603AQGJgO-m4howxg/profile-displayphoto-shrink_800_800/0/1646530680969?e=2147483647&v=beta&t=0sgeZ4Dj3Vu7fsY1FuUyT2Ls_ARfr2-YUSBVjBTgiPc">
      <h2 class="h2 article-title">
        {{ $t("pageTitles.about") }}
      </h2>
    </header>

    <section class="about-text">
      <ul class="about-list">
        <AboutItem v-for="about in about" :key="about.id" :about="about" />
      </ul>
    </section>
<!-- Education History -->
    <section class="education-margin">
      <h4 class="h4 timeline-item-title education-margin history-article-title">
        EDUCATION HISTORY
      </h4>
    </section>


    <section class="timeline">
 <!-- SETEC Education -->
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Master's degree, MIT
          </h4>
          <span>SETEC Intitute    &emsp; &emsp; Dec-2023 — Present</span>
        </li>
<!-- RUPP Education -->
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Bachelor's degree, Computer Science
          </h4>
          <span>Royal University of Phnom Penh &emsp;  2013 — 2018</span>
        </li>
<!-- AEU Education -->
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Bachelor's degree, English Language and Literature General
          </h4>
          <span>Asia Euro University &emsp; 2018-Present (Hang up a name)</span>
        </li>
 <!-- Hunsen chompouvon Education -->       
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Completed High School
          </h4>
          <span>Hunsen chompouvon &emsp; &emsp; 2008 - 2013</span>
        </li>
      </ol>
    </section>


    <!-- Achievement  History -->
    <section class="education-margin">
      <h4 class="h4 timeline-item-title education-margin history-article-title">
        ACHIEVEMENT PROJECT
      </h4>
    </section>

    <section class="timeline">
 <!-- SETEC Education -->
      <ol class="timeline-list">
        <li class="timeline-item">
          <p class="timeline-text">
            • Yes Seatel by Seatel <br>
            • Yes Daiku by Seatel<br>
            • Star pathmazing R&D <br>
            • Kazoo by USA client <br>
            • DMS by khmer beverages <br>
            • IQPS by Big cola<br>
            • Firearm by USA client<br>
            • Pukmak by Cellcard<br>
            • Sathapana Consumer, Merchant by Sathapana Bank<br>
            • SBI Ly Hour Consumer by SBILH Bank<br>
            • Loan Application by Woori Bank<br>
            • Loan Collection by Woori Bank<br>
            • Tab-Banking by Woori Bank<br>
          </p>
        </li>
      </ol>
    </section>


    <!-- service -->

    <!-- <section class="service">
      <br />
      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section> -->

    <!-- testimonials -->

    <!-- <section class="testimonials">
      <h3 class="h3 testimonials-title">
        Testimonials
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="testimonials-item" @click="showTestimonial(testimonial.id)">
          <div class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="testimonial.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ testimonial.title }}
            </h4>

            <div class="testimonials-text">
              <p>{{ locale === 'en' ? testimonial.content?.en : testimonial.content?.id_ID }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section> -->

    <!-- testimonials modal -->

    <!-- <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2021</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.id_ID" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div> -->

    <!-- clients -->

    <!-- <section class="clients">
      <h3 class="h3 clients-title">
        Clients
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="https://example.com" target="_blank">
            <img src="/.png" alt="Company">
          </a>
        </li>

      </ul>
    </section> -->
  </article>
</template>
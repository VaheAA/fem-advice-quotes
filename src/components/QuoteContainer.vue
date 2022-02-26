<template>
  <div class="quote">
    <transition name="fade">
      <div class="quote__content" v-if="quote">
        <span class="quote__number">Advice # {{ quote.id }}</span>
        <blockquote class="quote__text">"{{ quote.advice }}"</blockquote>
      </div>
    </transition>

    <div class="quote__elements">
      <img
        class="quote-devider desktop"
        src="../assets/images/pattern-divider-desktop.svg"
        alt=""
      />
      <img
        class="quote-devider mobile"
        src="../assets/images/pattern-divider-mobile.svg"
        alt=""
      />
    </div>
    <div class="quote__button">
      <button class="btn" @click="getRandomAdvice" aria-label="Get New Advice">
        <img src="../assets/images/icon-dice.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const quote = ref(null);
const isLoading = ref(false);

const getRandomAdvice = async () => {
  isLoading.value = true;
  const response = await fetch('https://api.adviceslip.com/advice', {
    cache: 'no-cache'
  });
  const data = await response.json();
  quote.value = data.slip;
  isLoading.value = false;
};

onMounted(async () => {
  await getRandomAdvice();
});
</script>

<style lang="scss">
.quote {
  background-color: rgba($color: $grayishBlue, $alpha: 0.5);
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  position: relative;

  &__number {
    color: $neonGreen;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-size: 14px;
    display: inline-block;
    padding-bottom: 40px;

    @include breakpoint(small) {
      font-size: 13px;
    }
  }
  &__text {
    color: $lightCyan;
    font-size: 28px;
    padding-bottom: 40px;

    @include breakpoint(small) {
      font-size: 24pxpx;
    }
  }
  &__elements {
    width: 100%;
    padding-bottom: 20px;

    .mobile {
      display: none;
    }

    @include breakpoint(small) {
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
  }
  &__button {
    position: absolute;
    left: 50%;
    bottom: -48px;
    transform: translate(-50%, -50%);

    .btn {
      border: none;
      background: $neonGreen;
      padding: 15px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 0 30px 15px $neonGreen;
      }
    }
  }
}
</style>

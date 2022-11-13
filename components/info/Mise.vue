<template>
  <div>
    <p>
      Cílem stránek je prevence dopravních nehod skrze výměnu názorů a vzdělávání.
      <nuxt-link to="/pages/mise">Naše mise</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'InfoBoxContent',
};
</script>

<style scoped>
p {
  font-size: 1rem;
}
a {
  color: var(--link-blue);
}
</style>

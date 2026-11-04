<script setup lang="ts">
useHead({
  script: [
    {
      key: 'theme-init',
      tagPosition: 'head',
      tagPriority: 'critical',
      innerHTML:
        "try{var t=localStorage.getItem('pd-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}",
    },
  ],
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

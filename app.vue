<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtLoadingIndicator :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

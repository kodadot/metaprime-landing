<template>
  <section class="relative overflow-hidden h-[34.25rem] py-20 after:absolute after:top-0 after:left-0 after:bg-lines after:bg-no-repeat after:bg-cover after:w-full after:h-[37rem] after:-z-10">
    <div class="relative flex flex-col justify-center container mx-auto h-full">
      <h2 class="font-semibold uppercase flex flex-col mb-6">
        <span class="text-secondary text-[5.125rem] leading-none">Unlock the</span>
        <span class="text-primary text-[5.125rem] leading-none">Metaverse</span>
      </h2>
      <p class="font-semibold text-2xl max-w-sm leading-normal">
        Your vehicle for exploring and
        building immersive realities.
      </p>
      <img class="absolute right-0 top-1/2 -translate-y-1/2" src="@/assets/images/triangle.png" alt="">
    </div>
  </section>
  <section class="relative py-20">
    <div class="relative flex flex-col justify-center container mx-auto h-full">
      <h2 class="font-semibold uppercase flex flex-col mb-6">
        <span class="text-secondary text-[5.125rem] leading-none">What is this</span>
        <span class="text-primary text-[5.125rem] leading-none">Buzzword</span>
      </h2>
      <p class="font-semibold text-2xl max-w-xl leading-normal">
        <span class="flex mb-4">
          noun | ˈmɛtəvɜː(ɹ)s/
        </span>

        A hypothetical future (counterpart or continuation of the) Internet, created by
        the convergence of virtually enhanced
        physical reality and physically persistent
        virtual space.
      </p>
      <Group class="absolute right-0 top-1/2 -translate-y-1/2" />
    </div>
  </section>
  <section class="relative overflow-hidden h-[34.25rem] py-20 after:absolute after:top-0 after:left-0 after:bg-lines-secondary after:bg-no-repeat after:bg-cover after:w-full after:h-[37rem] after:-z-10">
    <div class="relative flex flex-col justify-center container mx-auto h-full">
      <h2 class="font-semibold text-[5.125rem] leading-none uppercase mb-6">
        <span>An</span>
        <span class="text-primary">Experimental</span>,
        <span class="text-primary">Open</span>
        <span>Metaverse</span><br>
        <span class="text-primary">Blockchain</span>
      </h2>
    </div>
  </section>
</template>

<script>
import Group from '@/assets/images/group.svg'
export default {
  components: {
    Group
  },
  setup () {


    return {}
  }
}
</script>

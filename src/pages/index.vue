<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'Index',
})
const name = ref('')
const router = useRouter()
function go() {
  if (name.value)
    router.push(`/run/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div i-game-icons:jupiter inline-block text-6xl />

    <div>
      <p i-ic:outline-arrow-upward inline-block />
    </div>
    <p text-xs>
      This is Jupiter
    </p>
    <br>
    <br>
    <p>
      <a rel="noreferrer" href="https://github.com/eternity-666/" target="_blank">
        Cr-template
      </a>
    </p>
    <p>
      <em text-sm op75>Have a good time</em>
    </p>

    <div py-4 />

    <Input
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Ready
      </button>
    </div>
  </div>
</template>

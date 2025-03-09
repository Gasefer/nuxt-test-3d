<script setup>
import {
  Viewer,
  DefaultViewerParams,
  SpeckleLoader,
  UrlHelper,
} from "@speckle/viewer";
import { CameraController, SelectionExtension } from "@speckle/viewer";

const Load = ref(true);
async function main() {
  const container = document.getElementById("renderer");

  const params = DefaultViewerParams;
  params.showStats = true;
  params.verbose = true;

  const viewer = new Viewer(container, params);
  await viewer.init();

  viewer.createExtension(CameraController);
  viewer.createExtension(SelectionExtension);

  const urls = await UrlHelper.getResourceUrls(
    "https://app.speckle.systems/projects/7591c56179/models/32213f5381"
  );
  for (const url of urls) {
    const loader = new SpeckleLoader(viewer.getWorldTree(), url, "");
    await viewer.loadObject(loader, true);
  }
  Load.value = false;
}

onMounted(() => {
  main();
});
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-16 overflow-hidden">3D Візуалізація</h1>
    <div id="speckle-viewer" class="w-auto relative border">
      <div
        v-if="Load"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="flex items-center space-x-2">
          <div
            class="w-4 h-4 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"
          ></div>
          <span class="text-lg font-semibold text-gray-700"
            >Завантаження 3D моделі...</span
          >
        </div>
      </div>
      <div
        id="renderer"
        style="
          width: 100%;
          height: 500px;
          left: 0px;
          top: -50px;
          position: relative;
        "
      />
    </div>
    <NuxtLink to="/" class="text-blue-500 hover:underline mt-4"
      >Перейти на головну</NuxtLink
    >
  </div>
</template>

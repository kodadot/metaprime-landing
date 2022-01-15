<template>
  <div class="model-viewer">
    <model-viewer
      id="model-viewer"
      alt="Sierpinski triangle"
      src="/assets/models/sierpinski.gltf"
      ar
      ar-modes="webxr scene-viewer quick-look"
      poster="/assets/images/triangle.webp"
      shadow-intensity="1"
      camera-controls
    >
      <div class="poster" slot="poster" style="background-image: url(/assets/images/triangle.webp);">
        <Picture
          class="poster"
          v-bind="poster"
          img-class="max-w-xs md:max-w-md object-contain mx-auto md:mx-0"
        />
        <Prompt />
      </div>

      <button class="ar-button" slot="ar-button">
        View in your space
      </button>

      <div class="ar-prompt">
        <img src="/assets/images/hand.png">
      </div>
    </model-viewer>
  </div>
</template>

<script>
import Picture from '@/components/atoms/Picture.vue'
import Prompt from '@/assets/images/prompt.svg'

export default {
  components: {
    Picture,
    Prompt
  },
  props: {
    poster: {
      type: Object,
      required: true
    }
  },
  setup () {


    return {}
  }
}
</script>

<style>
    html {
      height:100%;
    }

    body {
      height: 100%;
      margin: 0;
      background-color: #f7f7f7;
      font-family: 'Rubik', sans-serif;
      font-size: 16px;
      line-height: 24px;
      color: rgba(0,0,0,.87);
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
    }

    p {
      max-width: 700px;
      margin: 1em;
      text-align: left;
    }

    model-viewer {
      display: block;
      width: 100vw;
      height: 100vw;
      max-width: 600px;
      max-height: 600px;
    }

    model-viewer::part(default-progress-mask) {
      display: none;
    }

    /* This keeps child nodes hidden while the element loads, except the poster */
    .model-viewer :not(:defined) > :not(.poster) {
      display: none;
    }

    .model-viewer defined > .poster > .pre-prompt {
      display: none;
    }

    /* This CSS should always be used at minimum for any slotted poster */
    .poster {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      top: 0;
      left: 0;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    @keyframes wiggle {
      10%, 12% { transform: translateX(-25px); }
      30%, 32% { transform: translateX(25px); }
      0%, 45%, 100% { transform: translateX(0%); }
    }

    @keyframes fade {
      5%, 40% {	opacity: 1; }
      0%, 45%, 100% {	opacity: 0; }
    }

    .pre-prompt {
      position: absolute;
      pointer-events: none;
      animation-name: wiggle, fade;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    .progress-bar {
      display: block;
      width: 33%;
      height: 10%;
      max-height: 2%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      border-radius: 25px;
      box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.5), 0px 0px 5px 1px rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.9);
      background-color: rgba(0, 0, 0, 0.5);
    }

    .progress-bar.hidden {
      visibility: hidden;
      transition: visibility 0.3s;
    }

    .update-bar {
      background-color: rgba(255, 255, 255, 0.9);
      width: 0%;
      height: 100%;
      border-radius: 25px;
      float: left;
      transition: width 0.3s;
    }

    .ar-button {
      background-image: url(../assets/ic_view_in_ar_new_googblue_48dp.png);
      background-repeat: no-repeat;
      background-size: 20px 20px;
      background-position: 12px 50%;
      background-color: #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      bottom: 16px;
      padding: 0px 16px 0px 40px;
      font-family: Roboto Regular, Helvetica Neue, sans-serif;
      font-size: 14px;
      color:#4285f4;
      height: 36px;
      line-height: 36px;
      border-radius: 18px;
      border: 1px solid #DADCE0;
    }

    .ar-button:active {
      background-color: #E8EAED;
    }

    .ar-button:focus {
      outline: none;
    }

    .ar-button:focus-visible {
      outline: 1px solid #4285f4;
    }

    @keyframes circle {
      from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }
      to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }
    }

    @keyframes elongate {
      from { transform: translateX(100px); }
      to   { transform: translateX(-100px); }
    }

    model-viewer > .ar-prompt {
      position: absolute;
      left: 50%;
      bottom: 175px;
      animation: elongate 2s infinite ease-in-out alternate;
      display: none;
    }

    model-viewer[ar-status="session-started"] > .ar-prompt {
      display: block;
    }

    model-viewer > .ar-prompt > img {
      animation: circle 4s linear infinite;
    }
    .icon-modelviewer-black {
    background-image: url(../assets/ic_modelviewer.svg);
    }
    .icon-button {
      margin-left: -4px;
      margin-right: 8px;
      width: 34px;
      height: 34px;
      background-size: 34px;
    }
    .inner-home {
      display: flex;
      align-items: center;
      font-size: 1.1em;
      text-decoration: none;
    }
    .home {
      padding: 20px;
      overflow: auto;
      white-space: nowrap;
    }
    .lockup {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      color: rgba(0,0,0,.87);
    }
    .attribute {
      white-space: pre-wrap !important;
      font-family: 'Roboto Mono', monospace;
      color: black;
    }
    .attribute:hover {
      text-decoration: underline;
      color: #444444;
    }
  </style>

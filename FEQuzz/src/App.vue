<script setup lang="ts"></script>

<template>
  <div id="appHeader">
    <a href="/">
      <img alt="Vue logo" src="./assets/logo.svg" />
    </a>
  </div>
  <div id="appContent">
      <router-view></router-view>
  </div>
  <div id="appFooter">
    <a href="https://marswiz.com" target="_blank">Marswiz</a> @2022
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
div {
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
#app {
  transition: all .25s ease-in-out;
  font-size: 20px;
  font-family: 'PingFangSC-Regular', "Microsoft Yahei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
  width: 100%;
}
#appHeader {
  display: flex;
  height: 25vh;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
}
#appContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#appFooter {
  font-size: 1em;
  font-weight: bold;
  height: 5vh;
  width: 100%;
  text-align: right;
  padding-right: 10vw;
}

/* scroll bar */
::-webkit-scrollbar {
width: 6px;
height: 6px;
}
::-webkit-scrollbar-track {
width: 6px;
background-color: rgba(204,204,204, 0.1);
-webkit-border-radius: 2em;
-moz-border-radius: 2em;
border-radius: 2em;
}
::-webkit-scrollbar-thumb {
background-color: gray;
background-clip: padding-box;
min-height: 28px;
-webkit-border-radius: 2em;
-moz-border-radius: 2em;
border-radius: 2em;
}
::-webkit-scrollbar-thumb:hover {
background-color: rgba(204,204,204, 1);
}
</style>

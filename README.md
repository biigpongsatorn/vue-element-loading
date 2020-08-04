<a href="https://www.buymeacoffee.com/biigpongsatorn" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

<p>
  <a href="https://npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/v/vue-element-loading.svg?style=flat" alt="NPM version"></a>
  <a href="https://npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/dm/vue-element-loading.svg?style=flat" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/l/vue-element-loading.svg?style=flat" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-element-loading"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Build Status"></a>
</p>

# vue-element-loading

⏳ Loading inside a container or full screen for Vue.js

# 👀 Document & Demo Page

- [Docs & Live demo](https://biigpongsatorn.github.io/#/vue-element-loading)
- [Fully feature live demo](https://vue-element-loading.netlify.com/)

# 💻 Install

```sh
npm install --save vue-element-loading
```
or
```sh
yarn add vue-element-loading
```

# 🕹 Usage
```javascript
import Vue from 'vue'
import VueElementLoading from 'vue-element-loading'

Vue.component('VueElementLoading', VueElementLoading)
```
or
```javascript
import VueElementLoading from 'vue-element-loading'

export default {
  components: {
    VueElementLoading
  }
}
```

# 🔎 Example

## Inside container
```html
<div class="parent">
  <vue-element-loading :active="show" spinner="bar-fade-scale"/>
  <span>
    This is my content.
  </span>
</div>
```

## Full screen
```html
<body>
  <vue-element-loading :active="show" is-full-screen/>
</body>
```

## Adjust Spinner Color
Use the `color` parameter to set the color of the displayed spinner (does not affect custom spinner images).
```html
<div class="parent">
  <vue-element-loading :active="show" spinner="bar-fade-scale" color="#FF6700"/>
  <span>
    This is my content.
  </span>
</div>
```

## Set text
Use the `text` parameter to set the text which will appear below loader.
```html
<div class="parent">
  <vue-element-loading :active="show" spinner="bar-fade-scale" color="#FF6700" text="Please wait..."/>
  <span>
    This is my content.
  </span>
</div>
```

## Set text style
Use the `textStyle` parameter to set the style of text( you need to pass css-in-js way using camelCase exp. fontSize, backgroundColor etc).
```html
<div class="parent">
  <vue-element-loading :active="show" spinner="bar-fade-scale" color="#FF6700" text="Please textStyle={fontSize: '25px'}  wait..."/>
  <span>
    This is my content.
  </span>
</div>
```

## Adjust Spinner Size
Use the `size` parameter to set the size of the displayed spinner (does not affect custom spinner images).
```html
<div class="parent">
  <vue-element-loading :active="show" spinner="bar-fade-scale" size="128"/>
  <span>
    This is my content.
  </span>
</div>
```

## Adjust Spinner Animation Speed
Use the `duration` parameter to set the animation loop duration in seconds (does not affect custom spinner images).
```html
<div class="parent">
  <vue-element-loading :active="show" spinner="bar-fade-scale" duration="1.0"/>
  <span>
    This is my content.
  </span>
</div>
```

## Customize loader
```html
<div class="parent">
  <vue-element-loading :active="show">
    <img src="/static/pikachu.gif" width="55px" height="55px">
  </vue-element-loading>
</div>
```

# 🌀 Spinner

<img src="https://raw.githubusercontent.com/biigpongsatorn/vue-element-loading/HEAD/static/spinner.png">

[See full document here.](https://biigpongsatorn.github.io/#/vue-element-loading)

# ⚙️ Props
| Props       | Type          | Default  | Description  |
| ----------- |:--------------| ---------|--------------|
| active      | Boolean       | -        | Status for show/hide loading |
| spinner    | String        | spinner   | Spinner icon name: `spinner`, `mini-spinner`, `ring`, `line-wave`, `line-scale`, `line-down`, `bar-fade`, `bar-fade-scale` |
| color    | String        | #000        | Color of spinner icon |
| background-color    | String        | rgba(255, 255, 255, .9)        | Background color of spinner icon (for overlay) |
| size    | String        | "40"        | The size to display the spinner in pixels  (**NOTE:** this will not affect custom spinner images) |
| duration    | String        | "0.6"        | The duration of one 'loop' of the spinner animation, in seconds  (**NOTE:** this will not affect custom spinner images) |
| delay    | Number \| String        | 0        | The minimum appearing duration of loading in seconds |
| is-full-screen    | Boolean        | false        | Loader will overlay the full page |
| text   | String    | -  | Text will appear below loader |
| text-style | Object | {} | Change style of the text below loader |


# 🤝 Contributing
1. Fork this repository.
2. Create new branch with feature name.
3. Run `npm install` and `npm run dev`.
4. Create your feature.
5. Commit and set commit message with feature name.
6. Push your code to your fork repository.
7. Create pull request. 🙂

# ⭐️ Support

If you like this project, You can support me with starring ⭐ this repository.

# 📄 License

[MIT](LICENSE)

Developed with ❤️ and ☕️

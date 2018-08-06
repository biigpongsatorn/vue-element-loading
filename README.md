<p>
  <a href="https://npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/v/vue-element-loading.svg?style=flat" alt="NPM version"></a>
  <a href="https://npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/dm/vue-element-loading.svg?style=flat" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/l/vue-element-loading.svg?style=flat" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-element-loading"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Build Status"></a>
</p>

# vue-element-loading

⏳ Loading inside a container or full screen for Vue.js

# 👀 Document & Demo Page

[Docs & Live demo](https://biigpongsatorn.github.io/#/vue-element-loading)

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

Vue.component('VueElementLoading', ElementLoading)
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
<div>
  <vue-element-loading :active="show" spinner="bar-fade-scale" color="#FF6700"/>
  <span>
    This is my content.
  </span>
</div>
```

## Full screen
```html
<div>
  <vue-element-loading :active="show" is-full-screen/>
</div>
```

## Customize loader
```html
<div>
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
| color    | String        | #ccc        | Color of spinner icon |
| is-full-screen    | Boolean        | false        | Loader will overlay the full page |

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

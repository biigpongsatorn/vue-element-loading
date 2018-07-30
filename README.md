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
import ElementLoading from 'vue-element-loading'

Vue.component('ElementLoading', ElementLoading)
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

```html
<div>
  <vue-element-loading :active="show" spinner="spinner" color="#FF6700"/>
  <span>
    This is my content.
  </span>
</div>
```

# ⚙️ Props
| Props       | Type          | Default  | Description  |
| ----------- |:--------------| ---------|--------------|
| active      | Boolean       | -        | Status for show/hide loading |
| spinner    | String        | spinner        | Spinner icon name |
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

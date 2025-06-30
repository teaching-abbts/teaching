---
transition: slide-left
layout: two-cols-header
---

# Vue.js - Class und Style Bindings

::left::

```html {monaco}
<!-- Object binding -->
<div :class="{ active: isActive }"></div>
<!-- Rendering wenn 'isActive' truthy -->
<div class="active"></div>

<!-- Object binding mit statischer Eigenschaft -->
 <div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
<!-- Mögliches Rendering -->
<div class="static active text-danger"></div>

<!-- Array binding -->
<div :class="[activeClass, errorClass]"></div>
<!-- Mögliches Rendering -->
<div class="active text-danger"></div>

<!-- Setzen via (computed) reactive -->
<div :class="computedClass"></div>
<!-- Mögliches Rendering -->
<div class="active text-danger"></div>
```

::right::

```js {monaco}
import { ref, computed } from 'vue'

const isActive = ref(true)
const hasError = ref(false)
const activeClass = ref('active')
const errorClass = ref('text-danger')

const computedClass = computed(() => {
  return {
    active: isActive.value,
    'text-danger': hasError.value
  }
})
```

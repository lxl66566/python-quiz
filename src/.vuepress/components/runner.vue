<template>
  <div>
    <textarea v-model="pythonCode" rows="5" @input="adjustHeight" ref="codearea"></textarea>
    <button @click="runCode">Run</button>
    <button @click="show_ans = !show_ans">Show Answer</button>
    <div>Output:</div>
    <textarea v-model="output" rows="7" ref="codearea2"></textarea>
    <div v-if="show_ans">Answer: {{ ans }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";

// 传入初始代码
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  ans: {
    type: String,
    required: false,
  },
});

const pythonCode = ref(props.code.trim());
const output = ref("Initializing...\n");
const show_ans = ref(false);
let pyodide = null;

const codearea = ref(null);
const codearea2 = ref(null);
const adjustHeight = () => {
  if (codearea.value) {
    codearea.value.style.height = "auto";
    codearea.value.style.height = codearea.value.scrollHeight + "px";
  }
};
const adjustHeight2 = () => {
  if (codearea2.value) {
    codearea2.value.style.height = "auto";
    codearea2.value.style.height = codearea2.value.scrollHeight + "px";
  }
};
watchEffect(() => {
  adjustHeight();
  adjustHeight2();
});

const loadPyodideAndPackages = async () => {
  await import("https://cdn.jsdelivr.net/pyodide/v0.26.3/full/pyodide.js");
  pyodide = await loadPyodide();
};

const runCode = async () => {
  if (!pyodide) return;
  try {
    const result = pyodide.runPython(pythonCode.value.trim());
    if (result) {
      output.value += "Result:\n" + result + "\n";
    }
  } catch (err) {
    output.value += "Error: " + err + "\n";
  }
  adjustHeight2();
};

onMounted(async () => {
  await loadPyodideAndPackages();
  output.value += "Ready!\n";
});
</script>

<style scoped>
textarea {
  width: 100%;
  height: auto;
}
</style>

<template>
  <ValidationProvider
    v-slot="{ errors, required, ariaMsg }"
    mode="eager"
    class="w-50"
    tag="div"
    :vid="vid"
    :rules="rules"
    :name="name || label"
  >
    <div>
      <label
        :for="name"
        @click="$refs.input.focus()"
      >
        <span v-if="label">{{ label }}</span>
        <span v-if="label && required" class="text-danger"> *</span>
      </label>
      <b-form-input
        :id="name"
        ref="input"
        v-model="innerValue"
        :class="{ 'is-invalid':errors[0], 'has-value': hasValue }"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <div
        v-if="errors[0]"
        class="p-1 text-danger"
        v-bind="ariaMsg"
      >
        {{ errors[0] }}
      </div>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { BFormInput } from 'bootstrap-vue'

export default {
  name: 'TextInput',
  components: {
    BFormInput,
    ValidationProvider
  },
  props: {
    vid: {
      type: String,
      default: undefined
    },
    mode: {
      type: String
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return [
          'url',
          'text',
          'password',
          'tel',
          'search',
          'number',
          'email'
        ].includes(value)
      }
    },
    value: {
      type: null,
      default: ''
    }
  },
  data: () => ({
    innerValue: ''
  }),
  computed: {
    hasValue () {
      return !!this.innerValue
    }
  },
  watch: {
    innerValue (value) {
      this.$emit('input', value)
    },
    value (val) {
      if (val !== this.innerValue) {
        this.innerValue = val
      }
    }
  },
  created () {
    if (this.value) {
      this.innerValue = this.value
    }
  }
}
</script>

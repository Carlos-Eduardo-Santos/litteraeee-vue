<template>
  <div class="container-form">
    <form action="" class="form-word" @submit.prevent="onSubmit()">
      <label for="input_word">Digite uma palavra em Inglês começando com a letra: <span class="next-letter">{{next_letter}}</span></label>
      <input type="text" name="input_word" id="input_word" v-model="word" autofocus autocomplete="off" autocapitalize="none"  v-validate data-vv-rules="required|next_letter|min:3|max:30|alpha" :class="{'is-error': errors.has('input_word') }" data-vv-as="acima">
      <p class="is-error line-error" v-show="errors.has('input_word')">{{ errors.first('input_word') }}</p>
    </form>
  </div>
</template>

<script>
export default {
  props: ['next_letter'],
  data () {
    return {
      word: '',
      letter: ''
    }
  },
  updated () {
    this.$validator.extend('next_letter', {
      getMessage: `Comece com a letra ${this._props.next_letter}.`,
      validate: value => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            valid: value.charAt(0) === this._props.next_letter.toLowerCase() || value.charAt(0) === this._props.next_letter.toUpperCase()
          }, 500)
        })
      })
    })
  },
  methods: {
    onSubmit () {
      this.$validator
        .validateAll()
        .then(success => {
          if (success) {
            // send the word for father component
            this.$emit('newWord', this.word)
            this.word = ''
          }
        }, err => console.log(err))
      this.$el.querySelector('#input_word').blur()
    }
  }
}
</script>

<style lang="scss">

@import './../assets/scss/components/FormWord';
</style>

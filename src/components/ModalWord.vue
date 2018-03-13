<template>
  <div>
    <div class="modal-word">
      <div class="btn-close" @click="closeModal"><span title="fechar">X</span></div>
      <div class="modal-container">
        <div class="modal-content" v-if="wordModal.word">
          <p> <span class="category">palavra</span> <span class="word">{{wordModal.word.headword}}</span><span class="pronounce" v-if="wordModal.word.pronunciations"> - “{{wordModal.word.pronunciations[0].ipa}}” - {{wordModal.word.pronunciations[0].lang}} - {{wordModal.word.part_of_speech}}</span>
          </p>
          <div v-if="wordModal.word.senses">
            <div class="box-translate" v-if="wordModal.word.senses[0].examples">
              <p class="title-translate">"{{wordModal.word.senses[0].examples[0].text}}" <span>"{{wordModal.word.senses[0].examples[0].translation.text[0]}}"</span>
              </p>
            </div>
            <div class="box-translate" v-if="wordModal.word.senses[0].translations">
              <p class="title-translate" v-if="wordModal.word.senses[0].translations[0].example">"{{wordModal.word.senses[0].translations[0].example[0].text}}" <span>"{{wordModal.word.senses[0].translations[0].text[0]}}"</span>
              </p>
            </div>
            <div v-if="wordModal.word.senses[0].definition">
              <p><span class="category">definição</span>{{wordModal.word.senses[0].definition[0]}}</p>
            </div>
            <div v-if="wordModal.word.senses[0].translations">
              <p><span class="category">tradução</span>"{{wordModal.word.senses[0].translations[0].text[0]}}"</p>
            </div>
            <div v-if="wordModal.word.senses[0].translation">
              <p><span class="category">tradução</span>"{{wordModal.word.senses[0].translation[0].text[0]}}"</p>
            </div>
            <div v-if="wordModal.word.senses[0].examples">
              <p><span class="category">Exemplo</span>"{{wordModal.word.senses[0].examples[0].translation.text[0]}}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['wordModal'],
  methods: {
    closeModal () {
      this.$el.querySelector('.modal-word').style.display = 'none'
    }
  }
}
</script>

<style lang="scss">
  @import './../assets/scss/components/ModalWord';
</style>

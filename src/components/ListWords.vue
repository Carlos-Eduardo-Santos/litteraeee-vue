<template>
  <div id="list-words-parent">
    <transition name="fade">
      <div v-if="list.length > 0" class="total">{{list.length}}</div>
    </transition>
    <div class="list-words">
      <div class="container-list">
        <ul>
          <li v-for="list of list" :key="list.id">
            <a :href="list.word.headword" :title="list.word.headword" class="item" @click.prevent="openModal($event)"><span :class="{new: list.new}">{{list.word.headword}}</span></a>
          </li>
        </ul>
      </div>
    </div>
      <div class="options-word" :class="{show: word_similar}">
        <p>Não encontramos a palavra <span class="featured">"{{word_similar}}"</span>. <br> Você quis dizer: <a v-for="list_similar of arr_similar" :key="list_similar.id" :href="list_similar.headword" :title="list_similar.headword" class="option-item">
          <span @click.prevent="chooseWord($event)"> {{list_similar.headword}}</span>,
          </a>
        </p>
      </div>
    <div id="container-form-parent">
      <form-word @newWord="inputWord" :next_letter="next_letter"></form-word>
    </div>
  </div>
</template>

<script>

import FormWord from './../components/FormWord'

export default {
  components: {
    'form-word': FormWord
  },
  data () {
    return {
      list: [],
      next_letter: '',
      word_similar: '',
      arr_similar: [],
      aboutWord: {}
    }
  },
  created () {
    this.init()
  },
  updated () {
    this.nextLetter()

    setTimeout(() => {
      var elList = document.querySelector('.list-words')
      elList.scrollTop = elList.scrollHeight
    }, 400)
  },
  methods: {
    // check the value typed and add in the list
    inputWord (inputWord) {
      this.$http
        .get(`http://api.pearson.com/v2/dictionaries/brep/entries?headword=${inputWord}`)
        .then(res => res.json())
        .then(list => {
          if (list.results.length > 0) {
            let newObj = list.results.find(function (newObj) {
              return newObj.headword === inputWord
            })

            if (newObj === undefined) {
              this.word_similar = inputWord
              this.arr_similar = list.results
            } else {
              this.list.push({
                word: newObj,
                new: false
              })
            }
          }
        }, err => console.log(err))
    },
    // choose a similar word
    chooseWord (e) {
      let similarWord = e.currentTarget.innerText

      let newObj = this.arr_similar.find(function (newObj) {
        return newObj.headword === similarWord
      })

      this.list.push({
        word: newObj,
        new: true
      })
      this.word_similar = ''
      this.$el.querySelector('#input_word').focus()
    },
    numRandom (number) {
      return Math.floor(Math.random() * number)
    },
    // Start with a value in the list
    init () {
      let offset = this.numRandom(6000)

      this.$http
        .get(`http://api.pearson.com/v2/dictionaries/brep/entries?offset=${offset}`)
        .then(res => res.json())
        .then(list => {
          let length = list.results.length
          let index = this.numRandom(length)

          this.list.push({
            word: list.results[index],
            new: true
          })
        }, err => console.log(err))
    },
    // define the next letter
    nextLetter () {
      let length = this.list.length
      this.next_letter = this.list[length - 1].word.headword.split('').slice(-1).pop()
      this.$emit('next_letter', this.next_letter)
    },
    // send obj about the word for father component
    openModal (e) {
      let href = e.currentTarget.innerText

      let obj = this.list.find(function (obj) {
        return obj.word.headword === href
      })

      this.aboutWord = {}
      this.aboutWord = obj

      this.$emit('aboutWord', this.aboutWord)
    }
  }
}
</script>

<style lang="scss">

@import './../assets/scss/components/ListWords';
</style>

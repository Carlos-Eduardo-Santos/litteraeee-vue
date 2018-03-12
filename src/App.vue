<template>
  <div id="app">
    <div class="sidebar" role="sidebar">
      <div class="container">
        <img src="/static/litteraeee-letras.png" class="img-top" alt="Litteraeee" @mouseover="hoverImg($event)" @mouseout="outImg($event)">
        <h1 class="title-logo">Litteraeee!</h1>
        <div class="description">
          <h3 class="description-title">Pratique o <br> vocabulário:</h3>
          <p class="lang-choose">{{lang}}</p>
        </div>
      </div>
    </div>
    <div class="main" role="main">
      <div class="bar"></div>
      <modal-word :wordModal="wordModal"></modal-word>
      <list-words @aboutWord="aboutWord"></list-words>
    </div>
  </div>
</template>

<script>
import ModalWords from './components/ModalWord'
import ListWords from './components/ListWords'

export default {
  components: {
    'list-words': ListWords,
    'modal-word': ModalWords
  },

  data () {
    return {
      lang: 'English',
      wordModal: {}
    }
  },
  methods: {
    hoverImg (e) {
      e.currentTarget.setAttribute('src', '/static/litteraeee-letras.gif')
    },
    outImg (e) {
      e.currentTarget.setAttribute('src', '/static/litteraeee-letras.png')
    },
    aboutWord (aboutWord) {
      this.wordModal = {}
      this.wordModal = aboutWord
      this.$emit('wordModal', this.wordModal)
      this.$el.querySelector('.modal-word').style.display = 'block'
    }
  }
}
</script>

<style lang="scss">

@import './assets/scss/layout/base';
@import './assets/scss/helper/colors';

.sidebar {
  .container {
    padding: 20px 0;
    text-align: center;
    width: 100%;
    @include bp($desktop) {
      width: 60%;
      margin: 0 auto;
    }
  }
  .obs {
    position: absolute;
    bottom: 40px;
    left: 20%;
    font-family: $bold;
    color: color($gray, 400);
    @include em(16);
  }
  a {
    color: color($gray, 400);
    &:hover {
      color: color($white, 100);
    }
  }
}

.title-logo {
  display: block;
  @include em(22);

  @include bp($desktop) {
    font-family: $lato;
  }
}

.img-top {
  display: none;
  @include bp($desktop) {
    border: 2px solid color($blue, 200);
    border-radius: 50%;
    padding: 10px;
    width: 90%;
    margin: 20px auto;
    display: block;
  }
}

.description {
    position: absolute;
    width: 70%;
    padding: 11px;
    border-radius: 6px;
    box-shadow: 1px 1px 6px 1px rgba(218, 217, 217, 0.8);
    background-color: color($white, 100);
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -40px;

   @include bp($desktop) {
    display: table-cell;
    height: 18rem;
    vertical-align: middle;
    padding: inherit;
    border-radius: inherit;
    box-shadow: inherit;
    left: inherit;
    right: inherit;
    margin: inherit;
    bottom: inherit;
    background-color: inherit;
    text-align: left;
   }

  .description-title {
    @include em(16);
    font-family: $bold;
    color: color($pink, 100);
    display: inline-block;

    br {
      display: none;
    }

    @include bp($desktop) {
      @include em(28);
      display: block;

      br {
        display: block;
      }
    }
  }

  .lang-choose {
    display: inline-block;
    @include em(16);
    color: color($gray, 400);

    @include bp($desktop) {
      display: block;

      br {
        display: block;
      }
    }
  }
}

.bar {
  display: none;
  width: 100%;
  height: 90px;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  opacity: .6;
  z-index: 1;
  @include bp($desktop) {
    display: block;
  }
}

</style>

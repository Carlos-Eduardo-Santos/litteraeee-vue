webpackJsonp([1],{0:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("7+uW"),n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"modal-word"},[r("div",{staticClass:"btn-close",on:{click:t.closeModal}},[r("span",{attrs:{title:"fechar"}},[t._v("X")])]),t._v(" "),r("div",{staticClass:"modal-container"},[t.wordModal.word?r("div",{staticClass:"modal-content"},[r("p",[r("span",{staticClass:"category"},[t._v("palavra")]),t._v(" "),r("span",{staticClass:"word"},[t._v(t._s(t.wordModal.word.headword))]),t.wordModal.word.pronunciations?r("span",{staticClass:"pronounce"},[t._v(" - “"+t._s(t.wordModal.word.pronunciations[0].ipa)+"” - "+t._s(t.wordModal.word.pronunciations[0].lang)+" - "+t._s(t.wordModal.word.part_of_speech))]):t._e()]),t._v(" "),t.wordModal.word.senses?r("div",[t.wordModal.word.senses[0].translations[0].example?r("div",{staticClass:"box-translate"},[r("p",{staticClass:"title-translate"},[t._v('"'+t._s(t.wordModal.word.senses[0].translations[0].example[0].text)+'" '),r("span",[t._v('"'+t._s(t.wordModal.word.senses[0].translations[0].example[0].translation.text[0])+'"')])])]):t._e(),t._v(" "),t.wordModal.word.senses[0].examples?r("div",{staticClass:"box-translate"},[r("p",{staticClass:"title-translate"},[t._v('"'+t._s(t.wordModal.word.senses[0].examples[0].text)+'" '),r("span",[t._v('"'+t._s(t.wordModal.word.senses[0].examples[0].translation.text[0])+'"')])])]):t._e(),t._v(" "),t.wordModal.word.senses[0].definition?r("div",[r("p",[r("span",{staticClass:"category"},[t._v("definição")]),t._v(t._s(t.wordModal.word.senses[0].definition[0]))])]):t._e(),t._v(" "),t.wordModal.word.senses[0].translations?r("div",[r("p",[r("span",{staticClass:"category"},[t._v("tradução")]),t._v('"'+t._s(t.wordModal.word.senses[0].translations[0].text[0])+'"')])]):t._e(),t._v(" "),t.wordModal.word.senses[0].translation?r("div",[r("p",[r("span",{staticClass:"category"},[t._v("tradução")]),t._v('"'+t._s(t.wordModal.word.senses[0].translation[0].text[0])+'"')])]):t._e(),t._v(" "),t.wordModal.word.senses[0].examples?r("div",[r("p",[r("span",{staticClass:"category"},[t._v("Exemplo")]),t._v('"'+t._s(t.wordModal.word.senses[0].examples[0].translation.text[0])+'"')])]):t._e()]):t._e()]):t._e()])])])},staticRenderFns:[]};var a=r("VU/8")({props:["wordModal"],methods:{closeModal:function(){this.$el.querySelector(".modal-word").style.display="none"}}},n,!1,function(t){r("PTP5")},null,null).exports,s=r("//Fk"),i=r.n(s),d={props:["next_letter"],data:function(){return{word:"",letter:""}},updated:function(){var t=this;this.$validator.extend("next_letter",{getMessage:"Comece com a letra "+this._props.next_letter+".",validate:function(e){return new i.a(function(r,o){setTimeout(function(){r({valid:e.charAt(0)===t._props.next_letter.toLowerCase()||e.charAt(0)===t._props.next_letter.toUpperCase()},500)})})}})},methods:{onSubmit:function(){var t=this;this.$validator.validateAll().then(function(e){e&&(t.$emit("newWord",t.word),t.word="")},function(t){return console.log(t)}),this.$el.querySelector("#input_word").blur()}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-form"},[r("form",{staticClass:"form-word",attrs:{action:""},on:{submit:function(e){e.preventDefault(),t.onSubmit()}}},[r("label",{attrs:{for:"input_word"}},[t._v("Digite uma palavra em Inglês começando com a letra: "),r("span",{staticClass:"next-letter"},[t._v(t._s(t.next_letter))])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"},{name:"validate",rawName:"v-validate"}],class:{"is-error":t.errors.has("input_word")},attrs:{type:"text",name:"input_word",id:"input_word",autofocus:"",autocomplete:"off",autocapitalize:"none","data-vv-rules":"required|next_letter|min:3|max:30|alpha","data-vv-as":"acima"},domProps:{value:t.word},on:{input:function(e){e.target.composing||(t.word=e.target.value)}}}),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("input_word"),expression:"errors.has('input_word')"}],staticClass:"is-error line-error"},[t._v(t._s(t.errors.first("input_word")))])])])},staticRenderFns:[]};var c={components:{"form-word":r("VU/8")(d,l,!1,function(t){r("vA0f")},null,null).exports},data:function(){return{list:[],next_letter:"",word_similar:"",arr_similar:[],aboutWord:{}}},created:function(){this.init()},updated:function(){this.nextLetter(),setTimeout(function(){var t=document.querySelector(".list-words");t.scrollTop=t.scrollHeight},400)},methods:{inputWord:function(t){var e=this;this.$http.get("http://api.pearson.com/v2/dictionaries/brep/entries?headword="+t).then(function(t){return t.json()}).then(function(r){if(r.results.length>0){var o=r.results.find(function(e){return e.headword===t});void 0===o?(e.word_similar=t,e.arr_similar=r.results):e.list.push({word:o,new:!1})}},function(t){return console.log(t)})},chooseWord:function(t){var e=t.currentTarget.innerText,r=this.arr_similar.find(function(t){return t.headword===e});this.list.push({word:r,new:!0}),this.word_similar="",this.$el.querySelector("#input_word").focus()},numRandom:function(t){return Math.floor(Math.random()*t)},init:function(){var t=this,e=this.numRandom(6e3);this.$http.get("http://api.pearson.com/v2/dictionaries/brep/entries?offset="+e).then(function(t){return t.json()}).then(function(e){var r=e.results.length,o=t.numRandom(r);t.list.push({word:e.results[o],new:!0})},function(t){return console.log(t)})},nextLetter:function(){var t=this.list.length;this.next_letter=this.list[t-1].word.headword.split("").slice(-1).pop(),this.$emit("next_letter",this.next_letter)},openModal:function(t){var e=t.currentTarget.innerText,r=this.list.find(function(t){return t.word.headword===e});this.aboutWord={},this.aboutWord=r,this.$emit("aboutWord",this.aboutWord)}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"list-words-parent"}},[r("transition",{attrs:{name:"fade"}},[t.list.length>0?r("div",{staticClass:"total"},[t._v(t._s(t.list.length))]):t._e()]),t._v(" "),r("div",{staticClass:"list-words"},[r("div",{staticClass:"container-list"},[r("ul",t._l(t.list,function(e){return r("li",{key:e.id},[r("a",{staticClass:"item",attrs:{href:e.word.headword,title:e.word.headword},on:{click:function(e){e.preventDefault(),t.openModal(e)}}},[r("span",{class:{new:e.new}},[t._v(t._s(e.word.headword))])])])}))])]),t._v(" "),r("div",{staticClass:"options-word",class:{show:t.word_similar}},[r("p",[t._v("Não encontramos a palavra "),r("span",{staticClass:"featured"},[t._v('"'+t._s(t.word_similar)+'"')]),t._v(". "),r("br"),t._v(" Você quis dizer: "),t._l(t.arr_similar,function(e){return r("a",{key:e.id,staticClass:"option-item",attrs:{href:e.headword,title:e.headword}},[r("span",{on:{click:function(e){e.preventDefault(),t.chooseWord(e)}}},[t._v(" "+t._s(e.headword))]),t._v(",\n        ")])})],2)]),t._v(" "),r("div",{attrs:{id:"container-form-parent"}},[r("form-word",{attrs:{next_letter:t.next_letter},on:{newWord:t.inputWord}})],1)],1)},staticRenderFns:[]};var p={components:{"list-words":r("VU/8")(c,u,!1,function(t){r("SSlm")},null,null).exports,"modal-word":a},data:function(){return{lang:"English",wordModal:{}}},methods:{hoverImg:function(t){t.currentTarget.setAttribute("src","static/litteraeee-letras.gif")},outImg:function(t){t.currentTarget.setAttribute("src","static/litteraeee-letras.png")},aboutWord:function(t){this.wordModal={},this.wordModal=t,this.$emit("wordModal",this.wordModal),this.$el.querySelector(".modal-word").style.display="block"}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"sidebar",attrs:{role:"sidebar"}},[r("div",{staticClass:"container"},[r("img",{staticClass:"img-top",attrs:{src:"static/litteraeee-letras.png",alt:"Litteraeee"},on:{mouseover:function(e){t.hoverImg(e)},mouseout:function(e){t.outImg(e)}}}),t._v(" "),r("h1",{staticClass:"title-logo"},[t._v("Litteraeee!")]),t._v(" "),r("div",{staticClass:"description"},[t._m(0),t._v(" "),r("p",{staticClass:"lang-choose"},[t._v(t._s(t.lang))])])])]),t._v(" "),r("div",{staticClass:"main",attrs:{role:"main"}},[r("div",{staticClass:"bar"}),t._v(" "),r("modal-word",{attrs:{wordModal:t.wordModal}}),t._v(" "),r("list-words",{on:{aboutWord:t.aboutWord}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"description-title"},[this._v("Pratique o "),e("br"),this._v(" vocabulário:")])}]};var v=r("VU/8")(p,m,!1,function(t){r("W16c")},null,null).exports,_=r("8+8L"),f=r("sUu7"),w=r("d7EF"),h=r.n(w),g={after:function(t,e){return"O campo "+t+" deve estar depois do campo "+h()(e,1)[0]+"."},alpha_dash:function(t){return"O campo "+t+" deve conter letras, números e traços."},alpha_num:function(t){return"O campo "+t+" deve conter somente letras e números."},alpha_spaces:function(t){return"The "+t+" só pode conter caracteres alfabéticos e espaços."},alpha:function(t){return"O campo "+t+" deve conter somente letras."},before:function(t,e){return"O campo "+t+" deve estar antes do campo "+h()(e,1)[0]+"."},between:function(t,e){var r=h()(e,2);return"O campo "+t+" deve estar entre "+r[0]+" e "+r[1]+"."},confirmed:function(t,e){return"O campo "+t+" e "+h()(e,1)[0]+" devem ser iguais."},credit_card:function(t){return"O campo "+t+" é inválido."},date_between:function(t,e){var r=h()(e,2);return"O campo "+t+" deve estar entre "+r[0]+" e "+r[1]+"."},date_format:function(t,e){return"O campo "+t+" deve estar no formato "+h()(e,1)[0]+"."},decimal:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["*"],r=h()(e,1)[0];return"O campo "+t+" deve ser numérico e deve conter "+("*"===r?"":r)+" casas decimais."},digits:function(t,e){return"O campo "+t+" deve ser numérico e ter "+h()(e,1)[0]+" dígitos."},dimensions:function(t,e){var r=h()(e,2);return"O campo "+t+" deve ter "+r[0]+" pixels de largura por "+r[1]+" pixels de altura."},email:function(t){return"O campo "+t+" deve ser um email válido."},ext:function(t){return"O campo "+t+" deve ser um arquivo válido."},image:function(t){return"O campo "+t+" deve ser uma imagem."},in:function(t){return"O campo "+t+" deve ter um valor válido."},ip:function(t){return"O campo "+t+" deve ser um endereço IP válido."},max:function(t,e){return"O campo "+t+" não deve ter mais que "+h()(e,1)[0]+" caracteres."},max_value:function(t,e){return"O campo "+t+" precisa ser "+h()(e,1)[0]+" ou menor."},mimes:function(t){return"O campo "+t+" deve ser um tipo de arquivo válido."},min:function(t,e){return"O campo "+t+" deve conter pelo menos "+h()(e,1)[0]+" caracteres."},min_value:function(t,e){return"O campo "+t+" precisa ser "+h()(e,1)[0]+" ou maior."},not_in:function(t){return"O campo "+t+" deve ser um valor válido."},numeric:function(t){return"O campo "+t+" deve conter apenas números"},regex:function(t){return"O campo "+t+" possui um formato inválido."},required:function(t){return"O campo "+t+" é obrigatório."},size:function(t,e){return"O campo "+t+" deve ser menor que "+h()(e,1)[0]+" KB."},url:function(t){return"O campo "+t+" não é uma URL válida."}};o.a.config.productionTip=!1,o.a.use(f.a,{locale:"pt_BR",dictionary:{pt_BR:{messages:g}}}),o.a.use(_.a),o.a.http.options.root="http://api.pearson.com/v2/dictionaries/brep/",new o.a({el:"#app",components:{App:v},template:"<App/>"})},PTP5:function(t,e){},SSlm:function(t,e){},W16c:function(t,e){},vA0f:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.js.map
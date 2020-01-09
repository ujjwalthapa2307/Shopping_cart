<template>
  <div class="demo">
    <div v-if="selected" style="padding-top:10px; width: 100%;">
      You have selected <code>{{selected.title}}</code>
    </div>
    <div class="autosuggest-container">
      <vue-autosuggest
        v-model="query"
        :suggestions="filteredOptions"
        @focus="focusMe"
        @click="clickHandler"
        @input="onInputChange"
        @selected="onSelected"
        :get-suggestion-value="getSuggestionValue"
        :input-props="{id:'autosuggest__input', placeholder:'Search Items'}">
          <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
            <img :style="{ display: 'flex', width: '25px', height: '25px', borderRadius: '15px', marginRight: '10px'}" :src="suggestion.item.image" />
            <div style="{ display: 'flex', color: 'navyblue'}">{{suggestion.item.title}}</div>
          </div>
      </vue-autosuggest>
    </div>
  </div>
</template>

<script>
import { VueAutosuggest } from "vue-autosuggest";
export default {
  components: {
    VueAutosuggest
  },
  data() {
    return {
      query: "",
      selected: "",
      suggestions: [
        {
          data: [
            {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2,  "image": require('@/assets/images/product-images/ipad_mini4.jpg')},
            {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": require('@/assets/images/product-images/H&M T-Shirt White.jpg')},
            {"id": 3, "title": "Charli Songs CD", "price": 19.99, "inventory": 5, "image": require('@/assets/images/product-images/Charli Songs CD.jpg')},
            {"id": 4, "title": "Iphone11 pro", "price": 1119.99, "inventory": 7, "image": require('@/assets/images/product-images/iphonepro11.jpg') },
            {"id": 5, "title": "Kanji 2500", "price": 25.73, "inventory": 17, "image": require('@/assets/images/product-images/kanji2500.jpg')},
            {"id": 6, "title": "Blue Jeans", "price": 22.77, "inventory": 10, "image": require('@/assets/images/product-images/jeans.jpg')},
            {"id": 7, "title": "timberlandShoes", "price": 244.77, "inventory": 6, "image": require('@/assets/images/product-images/timberlandshoe.jpg')},
            {"id": 8, "title": "RubyOnRails", "price": 20.77, "inventory": 16, "image": require('@/assets/images/product-images/rubyonrails.jpg')},
            {"id": 9, "title": "Mac BookPro", "price": 2500.77, "inventory": 16, "image": require('@/assets/images/product-images/macbookpro.jpg')},
          ]
        }
      ],
      showitems: false,
    };
  },
  computed: {
    filteredOptions() {
      if(this.query == ''){
        return [];
      }
      return [
        {
          data: this.suggestions[0].data.filter(option => {
            return option.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          })
        }
      ];
    }
  },
  methods: {
    clickHandler(item) {
      // event fired when clicking on the input
    },
    onSelected(item) {
      this.selected = item.item;
    },
    onInputChange(text) {
      // event fired when the input changes
      console.log(text)
    },
    /**
     * This is what the <input/> value is set to when you are selecting a suggestion.
     */
    getSuggestionValue(suggestion) {
      return suggestion.item.title;
    },
    focusMe(e) {
      console.log(e) // FocusEvent
    }
  }
}
</script>

<style>
.demo {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input {
  width: 180px;
  padding: 0.5rem;
}

ul {
  width: 100%;
  color: rgba(30, 39, 46,1.0);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 .5rem 0;
}
li {
  margin: 0 0 0 0;
  border-radius: 5px;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: flex;
  align-items: center;
}
li:hover {
  cursor: pointer;
}

.autosuggest-container {
  display: flex;
  justify-content: center;
  width: 200px;
}

#autosuggest { width: 100%; display: block;}
.autosuggest__results-item--highlighted {
  background-color: rgba(51, 217, 178,0.2);
}
.autosuggest__results {
  background-color: #80ced6;
    font-weight: 300;
    margin: 0;
    position: absolute;
    z-index: 10000001;
    width: 100%;
    border: 1px solid #e0e0e0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 0;
    overflow: scroll;
    max-height: 400px;
}
</style>

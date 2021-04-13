var app = new Vue({
  el: "#app",
  data: {
    num: 1
  },
  methods: {
    add: function() {
      if(this.num < 10) {
        this.num++;
      } else {
        alert('It has been top!');
      }
    },
    sub : function() {
      if(this.num > 0) {
        this.num--;
      } else {
        alert('It has been bottom!');
      }
    }
  }
})

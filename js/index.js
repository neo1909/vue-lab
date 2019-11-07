
var app = new Vue({
    el: "#app",
    data: {
        message: "Học Vue.js"
    },
    methods: {
        changeTitle : function () {
            this.message = "Cố lên Neo";
        }
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "Bạn đang hover" + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        isSeen: true
    }
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        arrTxt: [
            { text: "Text 01"},
            { text: "Text 02"},
            { text: "Text 03"},
            { text: "Text 04"},
            { text: "Text 05"}
        ]
    }
});

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Luong Ngoc Phu"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split(' ').reverse().join(' ');
        }
    } 
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "two-way binding"
    }
});

// Khai bao Global Component
// Tat ca Vue-app (new Vue()) duoc khoi tao o duoi Global component se duoc - 
// - register Global Component (app7, app 8 se su dung dung component tag-02)
Vue.component('tag-02', {
    template: '<p>Noi dung trong tag-new 02</p>'
});

// Khai bao Local Component (chi app7 su dung duoc component tag-01)
var localComp =  {
    template: '<p>Noi dung trong tag-new 01</p>'
};

var app7 = new Vue({
    el: "#app-7",
    components: {   // => Register Local component
        "tag-01": localComp 
    }
});

var app8 = new Vue({
    el: "#app-8"
});

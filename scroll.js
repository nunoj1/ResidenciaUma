var app = new Vue({
    el: '#app',
    data: {
        i: 1,
        j: 1
    },
    methods:{
        fo(){
            this.i = 1
        },
        so(){
            this.i = 2,
            $(".num1").counterUp({ delay: 10, time: 500 }),
            $(".num2").counterUp({ delay: 10, time: 1500 }),
            $(".num3").counterUp({ delay: 10, time: 2000 }),
            $(".num4").counterUp({ delay: 10, time: 2500 }),
            $(".num5").counterUp({ delay: 10, time: 3000 })
        },
        to(){
            this.i = 3
        },
        fuo(){
            this.i = 4
        },
        ffo(){
            this.i = 5
        },
        hide(){
            this.j=0
        }
    }
})
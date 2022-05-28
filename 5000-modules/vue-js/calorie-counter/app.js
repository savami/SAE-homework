var app = new Vue({
    el: '#app',
    data() {
        return {
            newItem:{
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            },
            food: [

                {
                    name: 'Pudding',
                    calories: '34',
                    carbs: '234',
                    fat: '43',
                    protein: '234'
                },
                {
                    name: 'Icecream',
                    calories: '123',
                    carbs: '23',
                    fat: '12',
                    protein: '214'
                },
                {
                    name: 'Chicken 500gr',
                    calories: '123',
                    carbs: '31',
                    fat: '46',
                    protein: '145'
                }
            ]
        }
    },
    computed: {
        totals: function(){
            var totalsCalculated = {
                calories: 0,
                carbs: 0,
                fat: 0,
                protein: 0
            }
            for (let i = 0; i < this.food.length; i++) { 
                totalsCalculated.calories += Number(this.food[i].calories);
                totalsCalculated.carbs += Number(this.food[i].carbs);
                totalsCalculated.fat += Number(this.food[i].fat);
                totalsCalculated.protein += Number(this.food[i].protein);
            }
            return totalsCalculated;
        },
    },
    methods: {
        addNewItem(){

            if (this.newItem.name == "" || this.newItem.calories == "") {
                alert('Name and calories cannot be empty')
                return
            }

            this.food.push({
                name: this.newItem.name,
                calories: Number(this.newItem.calories),
                fat: Number(this.newItem.fat),
                carbs: Number(this.newItem.carbs),
                protein: Number(this.newItem.protein)
            })

            this.newItem = {};
        },
        removeItem(itemIndex){
            this.food.splice(itemIndex, 1);
        },
    }
})
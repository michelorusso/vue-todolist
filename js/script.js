// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
var app = new Vue(
    {
    el: '#root',
    data: {  
        inputTextUser: '',
        todolist: [
            {
                text: 'Fare i compiti',
                time: dayjs().format('HH:mm:ss'),
                checked: false
            },
            {
                text: 'Fare la spesa',
                time: dayjs().format('HH:mm:ss'),
                checked: false
            },
            {
                text: 'Fare il bucato',
                time: dayjs().format('HH:mm:ss'),
                checked: false
            }
        ]
    }, 
    methods: {
        // - stampare in pagina un item per ogni elemento contenuto in un array
        addTodo() {

            // se il valore di inputTextUser è maggiore di 0 allora stampiamo
            if( this.inputTextUser.length > 0 ) {
                this.todolist.push( {
                    text: this.inputTextUser,
                    time: dayjs().format('HH:mm:ss'),
                    checked: false
                });
                this.inputTextUser = '';
            }

        },
        // - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
        deleteTodoList(index) {
            // console.log(index);
            this.todolist.splice(index, 1);
            // console.log(this.todolist);
        },
        // BONUS
        checkTodoList(index) {
            this.todolist[index].checked = !this.todolist[index].checked;
        },
        deleteAllTodoList() {
            this.todolist = [] ;
        }
    }
});
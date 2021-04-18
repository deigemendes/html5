/*
Função de manipulação de tarefa
*/

let data = [{
    id : 1 , 
    title : "PHP"
}, 
{
    id : 2 , 
    title : "HTML"
},
{
    id : 3 , 
    title : "Elixir"
}];


data.forEach(task => {

    // rotina 

    let li = document.createElement('li'); 
    li.innerHTML = `
    <li> <input type="checkbox" id="task-${task.id}"><label for="task-${task.id}">${task.title}</label></li>
    `;

    document.querySelector('.todo').append(li); 

})


document.querySelector('#new-task').addEventListener('keyup' , e => {

    if(e.key === "Enter") {
        console.log(e.target.value);
    }

}

)



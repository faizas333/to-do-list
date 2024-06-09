import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "EID ki shopping kia ki hai"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Aur kya khareeda",
            default: "false"
        }
    ]);
    todos.push(addtask.todos);
    condition = addtask.addMore;
    console.log(todos);
}

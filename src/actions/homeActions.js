//Actions for redux
//add hobby
export const addTask = (task, description) =>{
    return{
        type:"ADD_TASK",
        payload:{
            id: new Date().getTime().toString(),
            task : task,
            description:description
        }
    }
}
//delete hobby
export const deleteTask = (id) =>{
    return{
        type:"DELETE_TASK",
        id
    }
}


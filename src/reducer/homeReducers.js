const initialData ={
    list : []
}
//reducer for redux
const todoReducers = (state = initialData, action) =>{
//for add hobby
    switch(action.type){
        case "ADD_TASK":
            const {id, task, description} = action.payload;
            return{
                ...state,
                list: [
                    ...state.list,
                    {
                      id:id,
                      task : task,
                      description:description
                    }
                ]
            }

            case "DELETE_TASK":
               const newList = state.list.filter((elem) => elem.id != action.id)
                return{
                    ...state,
                    list: newList
                }
        default : return state;  
    }
}
export default todoReducers;
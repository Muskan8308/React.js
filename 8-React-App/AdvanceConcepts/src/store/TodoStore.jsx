import { createContext, useReducer } from "react";
// creating the context api
export const TodoContext = createContext();

// Now using Reducers

// Pure function are - 1. Har bar same i/p pe same o/p dega.
//  2.  Koi side effects na ho (Jaise ki DOM manipulate karna, API call karna, ya global variable modify karna) therefore ye State ko directly modify nahi kar raha, balki naya object return kar raha hai.

const todosReducer = (currItem, action) => {
  let newTodoItems = currItem;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currItem,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currItem.filter(
      (item) => item.name != action.payload.itemName
    );
  }
  return newTodoItems;
};


const TodoContextProvider = ({children}) => {
   
    const [todoItems, dispatchTodoItems] = useReducer(todosReducer, []);
   // const [todoItems, setTodoItems] = useState([])

   const addNewItem = (itemName, itemDate) => {
     /*
        setTodoItems((currValue) => {
            const newTodoItems = [...currValue,{
            name : itemName,
            dueDate : itemDate
            }]
            return newTodoItems;
        })
    */

     const newItemAction = {
       type: "NEW_ITEM",
       payload: {
         itemName,
         itemDate,
       },
     };
     dispatchTodoItems(newItemAction);
   };

    // To delete items
    function deleteItem(todoName) {
        /*
        const newTodoItems = todoItems.filter((item) => item.name != todoName);
        setTodoItems(newTodoItems);
        */

     const deleteItemAction = {
       type: "DELETE_ITEM",
       payload: {
         itemName: todoName,
       },
     };
     dispatchTodoItems(deleteItemAction);
   }
    return <>
        {/* Accessing Context API */}
        <TodoContext.Provider
        value={{
            todoItems: todoItems,
            addNewItem: addNewItem,
            deleteItem: deleteItem,
        }}
        >
        {children}
        </TodoContext.Provider>
    </>
};

export default TodoContextProvider;
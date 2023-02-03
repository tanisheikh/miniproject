export const formModel = {
  state: {
    todoObj: {},
    todoList: [],
  },
  reducers: {
    createRecord(state, payload) {
      debugger;
      console.info("create record >> ", payload);
      const tmpTodoList = state.todoList || [];
      payload.Id = Math.floor(Math.random() * 100 + 100);
      debugger;

      console.log(" data id ", payload.Id);
      debugger;

      tmpTodoList.push(payload);
      debugger;
      return {
        ...state,

        todoObj: { payload },

        todoList: [...tmpTodoList],
      };
    },

    updateRecord(state, payload) {
      const tmpTodoList = state.todoList || [];
      tmpTodoList.push(payload);

      return {
        ...state,
        todoObj: { payload },

        todoList: [...tmpTodoList],
      };
    },
  },
  effects: (dispatch) => ({
    createRecordAsync(payload) {
      console.info("value===", payload);
      dispatch.formModel.createRecord(payload);
    },
    deleteRecordAsync(payload, state) {
      debugger;

      const index = state.formModel.todoList.findIndex((arrayItem) => {
        return arrayItem.Id === payload;
      });
      console.log("state.todoList===", state.formModel.todoList);

      debugger;

      if (index > -1) {
        state.formModel.todoList.splice(index, 1);
        // const todoListItem = state.formModel.todoList.splice(index, 1);
        // return state.formModel.todoList;
        dispatch.formModel.updateRecord(state.formModel.todoList);
      }
    },
    updateRecordAsync(payload, state, id_number) {
      const id = state.formModel.todoList.filter((arrayItem) => {
        return arrayItem.id === id_number;
      });
      console.log("id==", id);
      debugger;
      if (id === state.formModel.todoList) {
        return state.formModel.todoList;
      }
    },
  }),
};

//todo list ne filter karvanu che function mathi id pass kari ne???

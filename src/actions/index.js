export const CREATE_TODO = 'CREATE_TODO';

export function onSubmitCall(todoName){
	return{
		type : CREATE_TODO,
		payload : todoName
	}
}

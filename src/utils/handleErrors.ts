interface IErrorResponse {
  message: string[];
  error: any;
}

export default function handleErrors(err: any): IErrorResponse {
  let error: any;
  let message: string[];

  if (err.data.messages) {
    const { erros } = err.data.messages;
    error = erros;
    message = Object.values(erros);
  } else {
    error = err;
    message = ['Problemas com o servidor, contate o administrador!'];
  }

  return { error, message };
}

interface toastError {
  type: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

export default function messageErrorForgotPassword(
  messageError: string,
): toastError {
  if (messageError === '') {
    return {
      type: 'error',
      title: 'Erro na recuperação de senha',
      description:
        'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente.',
    };
  }

  return {
    type: 'error',
    title: 'E-mail não encontrado',
    description:
      'O e-mail fornecido não foi encontrado, cheque se foi escrito corretamente',
  };
}

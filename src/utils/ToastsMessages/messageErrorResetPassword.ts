interface toastError {
  type: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

export default function messageErrorForgotPassword(
  messageError: string,
): toastError {
  if (messageError === 'Token expired') {
    return {
      type: 'error',
      title: 'Reset de senha expirou',
      description:
        'Seu reset de senha dura por 2h, por favor, faça um novo pedido de reset',
    };
  }

  return {
    type: 'error',
    title: 'Erro ao resetar senha',
    description: 'Ocorreu um erro ao tentar resetar a senha, tente novamente',
  };
}

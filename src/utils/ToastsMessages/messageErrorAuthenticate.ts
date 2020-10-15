interface toastError {
  type: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

export default function messageErrorAuthenticate(
  messageError: string,
): toastError {
  if (messageError === '') {
    return {
      type: 'error',
      title: 'Erro na autenticação',
      description: 'Ocorreu um erro ao fazer login, tente novamente',
    };
  }

  return {
    type: 'error',
    title: 'Credenciais incorretas',
    description:
      'O e-mail ou a senha estão incorretos, verifique e tente novamente',
  };
}

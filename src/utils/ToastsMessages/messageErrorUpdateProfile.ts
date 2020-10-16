interface toastError {
  type: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

export default function messageErrorUpdateProfile(
  messageError: string,
): toastError {
  switch (messageError) {
    case 'Email already in use.':
      return {
        type: 'error',
        title: 'E-mail em uso',
        description: 'Este e-mail ja está sendo usado, tente outro!',
      };
    case 'Old password does not match':
      return {
        type: 'error',
        title: 'Senha atual incorreta',
        description:
          'A senha atual está incorreta, caso não lembre, peça uma redefinição de senha na tela de login',
      };
    default:
      return {
        type: 'error',
        title: 'Erro na atualização',
        description:
          'Ocorreu um erro na atualização do seu perfil, tente novamente!',
      };
  }
}

# Cadastro de Carro #
**Requisitos funcionais** => RF
-Deve ser possível cadastrar um novo carro

**Requisitos não funcionais** => RNF
-Não há
**Regra de Negocio** => RN
-Não deve ser possível cadastrar um carro com a placa ja existente.
-O carro deve ser cadastrado com a disponibilidade ja disponível
*Só os usuarios com permissões de admin podem cadastrar carros

--------------------------------------------------------------------------------
# Listagem de carros
**RF**
Deve ser possível listar todos os carros disponíveis
deve ser possivel listar todos carros disponiveis pelo nome da categoria
deve ser possivel listar todos carros disponiveis pelo nome da marca
deve ser possivel listar todos carros disponiveis pelo nome do modelo
**RN**
O usuário não precisa estar logado no sistema para ver os carros disponíveis

# cadastro de especificação de carro
**RF**
Deve ser possível cadastrar uma especificação para um carro

 **RN**
 Não deve ser possível cadastrar uma especificação para 1 carro nao cadastrado
 Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro
 Só os usuarios com permissões de admin podem cadastrar cadastrar especificações

 -------------------------------------------------------------------------------

 # Cadastro de imagem  do carro 

**RF**
deve ser possivel cadastrar a imagem do carro

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
o usuario deve poder cadastrar mais de uma imagem para o mesmo carro
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Aluguel de carro
**RF**
deve ser possivel cadastrar aluguel

**RN**
o aluguel deve ter duração minima de 24hrs
não deve ser possivel cadastrar um novo aluguel caso exista um aberto para o mesmo carro.
o usuario deve estar logado na aplicação
Ao realizar o aluguel do carro, o carro deve estar indisponível 


# Listagem de Alugueis para usuario

**RF**
Deve ser possivel realizar a busca de todos os alugueis para o usuario

**RN**
O usuário deve estar logado na aplicação

# Recuperar Senha
**RF**
-Deve ser possivel o usuario recuperar a senha informando o email
-O usuario deve receber um e-mail com o passo a passo para recuperação da senha
-O usuario deve conseguir inserir uma nova senha

**RN** 
-O usuario precisa informar uma nova senha
-O link enviado para recuperação deve expirar dentro de 3horas 


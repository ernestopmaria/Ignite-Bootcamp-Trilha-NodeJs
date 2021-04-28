# Cadastro de Carro #
**Requisitos funcionais** => RF
-Deve ser possível cadastrar um novo carro
-Deve ser possivel listar todas as categorias

**Requisitos não funcionais** => RNF
-Não há
**Regra de Negocio** => RN
-Não deve ser possível cadastrar um carro com a placa ja existente.
-Não deve ser possível alterar a placa de um carro ja cadastrado
-O carro deve ser cadastrado com a disponibilidade ja disponível
Só os usuarios com permissões de admin podem cadastrar carros

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
Deve ser possivel listar todas as especificações 
Deve ser possivel listar todos os carros com 
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


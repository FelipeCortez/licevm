LICEVM
======

Um sistema interativo para aprendizado de História.

Codificado com Python 3 e Django 1.11.

Instruções
----------

Crie um novo virtual environment (fora do repositório!):

`python3 -m venv /path/licevm_env`, onde /path/ é o diretório em que você deseja manter o ambiente virtual.

No Windows, algo como

`c:\>c:\Python35\python -m venv c:\path\to\myenv`

Ative o virtual environment

`source licevm_env/bin/activate`

Instale as dependências:

`pip install -r requirements.txt`

Rode o servidor com `python manage.py runserver`

Talvez seja necessário realizar as migrações para o banco de dados, mas o Django te dirá como fazer isso.

Pronto.

Criando conteúdo
----------------

### Acesso
Você pode acessar a interface de admin criando uma conta de superusuário com `python django-admin createsuperuser`, rodando o servidor e indo a `127.0.0.1:8000/admin`

### Formatação
O texto pode ser formatado usando [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Questões
Usando `<quiz>` como um elemento HTML é possível gerar automaticamente questões com correção automática. A alternativa correta é marcada com letra maiúscula.

```
<quiz>
Qual é a resposta certa?

a) Não é esta
b) Nem esta
c) Muito menos esta
D) É esta aqui!
</quiz>
```

### Imagens
As imagens devem ser adicionadas manualmente no diretório `licevm/classroom/static/img` e usadas no texto como `<img src="/static/img/tanque.png">`, por exemplo.

### Elementos ocupando 100% da página
É possível quebrar as margens com um pequeno hack:
```
</div>
Tudo que estiver aqui poderá ocupar todo o espaço horizontal da página
<div class="container">
```

### Exemplo
Um exemplo com todos esses recursos está disponível no tópico "Segunda Guerra Mundial", acessível através do admin

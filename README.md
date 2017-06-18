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

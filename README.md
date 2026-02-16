🏎️ Swheel

    Onde a paixão automotiva encontra o próximo match.

Swheel é um marketplace disruptivo para entusiastas de carros. Inspirado na dinâmica de "swipes", o projeto facilita o encontro entre quem quer vender uma "lasca" e quem está pronto para acelerar um novo projeto. 

🛠️ Tecnologias

    Backend: FastAPI (Python)

    Frontend: React + Vite

    Banco de Dados: PostgreSQL

    Infraestrutura: Podman (Rootless/Daemonless)

    Migrações: Alembic

🚀 Configuração do Ambiente

Este guia foca em sistemas Arch Linux (como o que utilizo no meu setup pessoal).
1. Dependências do Sistema

Instale as ferramentas base globalmente para garantir que o motor tenha todas as peças:
Bash

# Instalação via pacman
sudo pacman -S python-pip podman podman-compose postgresql-libs nodejs npm

2. Clonando e Preparando o Terreno

`git clone https://github.com/seu-usuario/swheel.git`

`cd swheel`

3. Backend e Isolamento (venv)

Diferente do ambiente global, isolamos as dependências do Swheel para evitar conflitos: 

`cd backend`

`python -m venv .venv`

`source .venv/bin/activate  # No Linux/Bash`

`pip install -r requirements.txt`

4. Orquestração com Podman

Não é preciso instalar o banco de dados diretamente no sistema. Usa-se o Podman para rodar tudo em containers:

# Sobe o banco de dados e os serviços necessários

`podman-compose up -d`

    Note que não utilizamos sudo para o Podman. Ele está configurado em modo rootless, garantindo mais segurança e conformidade com ambientes corporativos restritos.

📈 Próximos Passos

    [ ] Implementar o algoritmo de match.

    [ ] Finalizar a integração com Alembic para versionamento do banco.

    [ ] Criar os primeiros componentes de UI do Swheel.
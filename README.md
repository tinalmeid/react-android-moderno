# 📱 React Android Moderno: Modernização de Legado

![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=tinalmeid_react-android-moderno&metric=alert_status)
![Coverage](https://sonarcloud.io/api/project_badges/measure?project=tinalmeid_react-android-moderno&metric=coverage)
![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=tinalmeid_react-android-moderno&metric=duplicated_lines_density)
![Build Status](https://github.com/tinalmeid/react-android-moderno/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

### Desenvolvimento

![React Native](https://img.shields.io/badge/Mobile-React_Native-61DAFB?style=flat&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Core-Expo-000020?style=flat&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/Lang-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Jest](https://img.shields.io/badge/Testes-Jest-C21325?style=flat&logo=jest&logoColor=white)
![VS Code](https://img.shields.io/badge/IDE-VS_Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Github Copilot](https://img.shields.io/badge/AI-Copilot-000000?style=flat&logo=githubcopilot&logoColor=white)

### Gestão & DevOps

![Jira](https://img.shields.io/badge/Gestão-Jira-0052CC?style=flat&logo=jira&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![SonarCloud](https://img.shields.io/badge/Quality-SonarCloud-F3702A?style=flat&logo=sonarcloud&logoColor=white)
![Clean Code](https://img.shields.io/badge/Prática-Clean_Code-green?style=flat&logo=geocaching&logoColor=white)
![SOLID](https://img.shields.io/badge/Design-SOLID-brightgreen?style=flat)

### Produtividade & Aprendizado

![WakaTime](https://img.shields.io/badge/Produtividade-Wakatime-000000?style=flat&logo=wakatime&logoColor=white)
![Udemy](https://img.shields.io/badge/Plataforma-Udemy-EC5252?style=flat&logo=udemy&logoColor=white)

Este repositório hospeda o projeto de **Modernização Tecnológica** de aplicativos Android.

O objetivo é aplicar a **Engenharia de Software** para traduzir conceitos de desenvolvimento nativo (Java/XML) para a stack moderna de **React Native (Eco-sistema Expo)**. O projeto funciona como um **Monorepo**, contendo múltiplos aplicativos isolados, porém governados pelo mesmo padrão de qualidade e pipeline de CI/CD.

## 📚 Curso de Referência

Udemy: [Curso Completo do Desenvolvedor Android (Java)](https://www.udemy.com/course/curso-completo-do-desenvolvedor-android/learn/lecture/18770738?start=15#overview)

> **Desafio:** Replicar as regras de negócio e interfaces ensinadas em Java, utilizando React Native e boas práticas atuais.

## 🚀 Como Rodar (Quick Start)

### Pré-requisitos

- Node.js (LTS)
- App **Expo Go** instalado no celular (Android/iOS)

### Instalação

1. 📥 **Clone o repositório:**

   ```bash
   git clone [https://github.com/tinalmeid/react-android-moderno.git](https://github.com/tinalmeid/react-android-moderno.git)
   cd react-android-moderno
   ```

2. 📱 **Escolha o App para rodar:**
    O projeto é um Monorepo. Navegue até a pasta do App desejado:

   ```bash
    cd 01-AppSorteio
    # ou
    cd 02-AppNoticias
    ```

3. 📦 **Instale as dependências:**
    ```bash
    npm install
    ```

4. 🔬 **Rode a Aplicação:**
    ```bash
    npx expo start
    ```
    Leia o QR Code com o aplicativo Expo Go no seu celular.

## 🧪 Padrões de Qualidade (QA Engineering)
Para garantir a excelência do código, este projeto utiliza um Quality Gate rigoroso:

1. Linting (ESLint): O código deve seguir padrões estritos de JavaScript/React.

2. Testes (Jest): Cobertura mínima de 80% exigida (validada via GitHub Actions antes do Sonar).

3. Clean Code: Componentes funcionais, Hooks customizados e princípios SOLID.

4. Code Review: Nenhum código entra na main sem passar pela pipeline de CI automatizada.

## 📝 Development Guidelines
Para manter a qualidade e a rastreabilidade do projeto, seguimos estritamente:

1. 🌿 Branching Strategy:

    * Toda branch deve começar com a chave do Jira: ENG-XXX-nome-da-tarefa.

    * Ex: ENG-645-feat/app1-sorteador.

2. 💾 Padrão de Commit (Conventional Commits):

    * Formato: ENG-XXX tipo: Descrição breve.

    * Tipos permitidos:

        - feat: Nova funcionalidade.

        - fix: Correção de bug.

        - docs: Documentação.

        - test: Testes.

        - chore: Configurações e manutenção (CI, Grunt, etc).

    * Ex: ENG-641 chore: Configura pipeline inicial.

3. 🧪 Testes & TDD:

    * Toda lógica de negócio deve ter teste unitário (.test.js).

    * O Pipeline falha se a cobertura for inferior a 80%.

    * Cobertura de testes
        ```bash
        | App            | Statements | Branch    | Functions | Lines | Status |
        |----------------|------------|-----------|-----------|-------|--------|
        | 01-AppSorteio  | 100%       | 100%      | 100%      | 100%  | ✅     |
        | 02-AppNoticias | 100%       | 100%      | 100%      | 100%  | ✅     |
        | 03-AppNetflix  | 100%       | 100%      | 100%      | 100%* | ✅     |
        ```

4. 🛡️ Quality Gate:

    * Para aceite de Pull Requests será necessário aprovação do checklist de QA (Sonar).

    * Código sem JSDoc (documentação de função) será reprovado.

    * Mantenha o SonarCloud feliz: Zero "Bugs", Zero "Vulnerabilities".

 ## 🏗️ Estrutura do Monorepo
 ```bash
 react-android-moderno/
 ├── .github/workflows/          # 🤖 CI/CD (Quality Gate)
 ├── 01-AppSorteio/              # 📱 App 1: Lógica Básica
 ├── 02-AppNoticias/             # 📰 App 2: Layouts Flexbox
 ├── ...                         # 📂 Outros Apps...
 ├──  sonar-project.properties   # 📡 Configuração de Qualidade Global
 └── README.md
   ```

## 🗺️ Roadmap & Entregas (Jira)
Monitoramento de tarefas de conversão e modernização.
```bash
ID Jira       Módulo / Tarefa                                  Branch                          Status
ENG-641	     ⚙️ Configuração Projeto CI, Actions e Sonar	   ENG-641-chore/config-inicial	  ✅ Concluído
ENG-645	     🎲 Fundamentos e App 1 (Sorteador Numérico)	   ENG-645-feat/app1-sorteador	  ✅ Concluído
ENG-646	     📰 Layouts Básicos e App 2 (Portal de Notícias)   ENG-646-feat/app2-noticias	  ✅ Concluído
ENG-647	     🎬 Layouts Complexos e App 3 (Clone Netflix UI)   ENG-647-feat/app3-netflix	  ✅ Concluído
ENG-648	     💬 Lógica JavaScript e App 4 (Frases do Dia)	   ENG-648-feat/app4-frases	      📅 Planejado
ENG-649	     ✊ Componentização e App 5 (Jokenpo)	           ENG-649-feat/app5-jokenpo	  📅 Planejado
ENG-650	     ⛽ Formulários e Inputs (App Álcool ou Gasolina) ENG-650-feat/app6-combustivel  📅 Planejado
ENG-651	     💰 Interatividade Real-time (App Gorjetas)	       ENG-651-feat/app7-gorjetas	  📅 Planejado
ENG-652	     🪙 Navegação Stack (App Cara ou Coroa)	           ENG-652-feat/app8-cara-coroa	  📅 Planejado
ENG-653	     🏦 Navegação Drawer e Inst. (ATM Consultoria)	   ENG-653-feat/app9-atm	      📅 Planejado
ENG-654	     🇺🇸 Mídia e Abas (App Aprenda Inglês)	           ENG-654-feat/app10-ingles      📅 Planejado
ENG-655	     📝 Persistência de Dados (Minhas Anotações)	   ENG-655-feat/app11-anotacoes	  📅 Planejado
ENG-656	     ✅ Banco de Dados Local (Lista de Tarefas)	       ENG-656-feat/app12-tarefas     📅 Planejado
```
> **Legenda:** ✅ Concluído | 🔄 Em Andamento | 📅 Planejado

## 📄 Licença

Este projeto faz parte de um curso de aprendizagem. Sinta-se à vontade para utilizá-lo para fins educacionais.

👩🏽‍💻 Desenvolvido por **Cristina de Almeida** como parte do plano de desenvolvimento técnico.

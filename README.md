# ♻️ Recicle-Me

O aplicativo tem como objetivo ajudar os usuários a identificar se um objeto é reciclável, facilitando o descarte correto dos materiais. Por meio de uma barra de busca, é possível digitar o nome do item e descobrir sua categoria de reciclagem, incentivando um consumo mais consciente e sustentável.

## 📱 O App 

![bg-recicleme](https://github.com/user-attachments/assets/2949a5e3-c5aa-4ccd-aa74-6895f0aac672)


## 👩🏻‍💻 Tecnologias Utilizadas

- *React Native*: Biblioteca para construir aplicativos móveis.
- *Expo*: Ferramenta para desenvolvimento rápido de aplicações React Native.
- *Axios*: Biblioteca para realizar requisições HTTP, utilizada para consumir a API simulada e buscar os dados dos funcionários.
- *NativeWind (TailwindCSS)*: Biblioteca que permite o uso das classes utilitárias do Tailwind para estilizar componentes em React Native.
- *TypeScript*: Superset do JavaScript que adiciona tipagem estática, proporcionando maior segurança e facilidade na manutenção do código.
- *React Navigation*: Responsável pelo gerenciamento de rotas e navegação entre as telas do aplicativo.
- *Phosphor Icons*: Biblioteca de ícones utilizada para compor a interface e melhorar a experiência visual.
- *React Native Reanimated & Carousel*: Utilizados para criar animações e o carrossel de banners do aplicativo.

## Pré-requisitos para rodar o app: 

- [Node.js](https://nodejs.org/).
- Npm ou [Yarn](https://yarnpkg.com/getting-started/install)
- Expo CLI 
    - Para instalar globalmente usando **npm**:
       ```bash
       npm install -g expo-cli
       ```
    - Já usando **Yarn**:
       ```bash
       yarn global add expo-cli
       ```
**Alternativa**: Use o Expo CLI local no projeto com `npx expo start`, sem instalação global.

- **Um dispositivo móvel (iOS/Android) ou um emulador**:

Para testar o app, você pode usar:
  - **Dispositivo físico**: Precisa ter instalado o app Expo Go (disponível na [App Store](https://apps.apple.com/br/app/expo-go/id982107779) / [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share)).
  - **Emulador Android/iOS**: Para iOS, será necessário Xcode instalado (macOS), e para Android, o Android Studio.


# ⚙️ Instruções para Rodar o Projeto

## 1. Clone o repositório
```bash
git clone https://github.com/Mariana-Gomes/recicleme.git
cd recicleme
```

## 2. Instale as dependências

Você pode usar **npm** ou **yarn** para instalar as dependências do projeto.

- Usando **npm**:
  ```bash
  npm install
  ```

- Ou, se preferir usar **Yarn**:
  ```bash
  yarn install
  ```

## 3. Inicie a API simulada

Para rodar o servidor da API simulada (`json-server`), certifique-se de estar na pasta raiz do projeto no seu terminal e execute o seguinte comando:

  ```bash
  npx json-server --watch server/db.json --port 3000
  ```

### 🚨 Importante!

Para que o aplicativo se conecte corretamente ao servidor da API simulada, é necessário configurar o endereço base da API (seu IP local) antes de rodar o projeto.

No repositório, há um arquivo de exemplo chamado `src/config.example.ts`:

Esse arquivo contém o seguinte formato:

```typescript
export const API_BASE_URL = "http://SEU_IP_AQUI:3000";
```

## Passo a passo:

- Duplique o arquivo `config.example.ts`
- Renomeie a cópia para `config.ts`
- Substitua o valor `SEU_IP_AQUI` pelo IPv4 do seu computador — o mesmo IP usado para rodar o servidor da API (via json-server ou outro).

#### Como localizar o IPv4:

- **Windows**: Abra o `cmd` e execute `ipconfig`. O `IPv4 Address` estará listado.
- **macOS**: Abra o Terminal e execute `ifconfig`. Procure por `inet` na interface de rede (Wi-Fi ou Ethernet).
- **Linux**: Abra o Terminal e execute `ip a` ou `ifconfig`. O `inet` será exibido na interface de rede.

## 4. Rodar o app

Após ajustar o IP e garantir que o servidor esteja rodando, abra um segundo terminal, também na pasta raiz do projeto, e execute o seguinte comando para rodar o app:

- Usando **npm**:
  ```bash
  npm start
  ```

- Ou, usando **Yarn**:
  ```bash
  yarn start
  ```

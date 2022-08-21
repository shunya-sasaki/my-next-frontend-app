
Next.jsアプリ開発環境のセットアップ
===================================

Node.jsのインストール
---------------------

MacOSXの場合
^^^^^^^^^^^^

homebrewを使用してvoltaをインストールする。

.. code-block::

    brew install volta

voltaからnodeをインストールする。

.. code-block:: shell

    volta install node

環境変数設定ファイル"~/.zshrc"にvoltaによってインストールされるnodeのディレクトリを追加する。

.. code-block:: shell

    export PATH=${HOME}/.volta/bin:$PATH


VS Code拡張機能のインストール
-----------------------------

以下の拡張機能をインストールする。

* `PostCSS Language Support <https://marketplace.visualstudio.com/items?itemName=csstools.postcss>`__
* `Prettier - Code formatter <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>`__
* `React Native Tools <https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native>`__ 
* `Tailwind CSS IntelliSense <https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss>`__


プロジェクトフォルダのセットアップ
----------------------------------

プロジェクトの作成
^^^^^^^^^^^^^^^^^^

1. プロジェクトフォルダを作成する。

    .. code-block:: shell 

        mkdir <project folder>

2. プロジェクトフォルダの中で次のコマンドを実行して、Next.jsアプリのフォルダを作成する。

    .. code-block:: shell

        npx create-next-app --ts --use-npm


パッケージのインストール
^^^^^^^^^^^^^^^^^^^^^^^^

**tailwindcss**

参考: `<https://tailwindcss.com/docs/guides/nextjs>`__

tailwindcssと関係パッケージをプロジェクトフォルダにインストールする。

.. code-block::

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

tailwindcss.config.jsを編集する。

.. code-block:: js

    /** @type {import('tailwindcss').Config} */ 
    module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

./styles/global.cssに以下を追記してtailwindcssを有効化する。

.. code-block:: 

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

**axious**

.. code-block:: shell

    npm install axious

**file-saver**

.. code-block:: shell

    npm install file-saver
    npm install --dev @types/file-saver
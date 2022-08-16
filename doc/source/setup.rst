
Next.js開発環境のセットアップ
=============================

Node.jsのインストール
---------------------

MacOSXの場合
^^^^^^^^^^^^

nodebrewをインストールする。

.. code-block::

    brew install nodebrew


プロジェクトフォルダのセットアップ
----------------------------------

プロジェクトの作成
^^^^^^^^^^^^^^^^^^

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

./styles/globa.cssを編集する。

.. code-block:: 

    



# self_analysis

READMEは適当にしか書いていないです、気が向いたら追記するかもしれない。

## 開発

### 準備

Node.jsをインストールしておいてください。v10.16.0で動作確認してます。 [nodenv](https://github.com/nodenv/nodenv) が入っていると楽かもしれない。

#### 必要なパッケージのインストール

```
npm install
```

#### 質問の作成

`data/questions.csv`を適当に弄ってください、以下コマンドでCSVファイルの内容を元にjsonファイルが`src/data/questions.json`に書き出されます。

```
npm run generate
```

### 開発用サーバの起動

```
npm run serve
```

デフォルトでは http://localhost:8080 でアクセスできるはずです。

### 解説

色々解説しておきたいけど力尽きたので後日でお願いします。

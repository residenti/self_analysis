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

### テスト

```
npm run test:unit
```

### 解説

まだ中途半端です。

### アーキテクチャ

アーキテクチャという程大袈裟なものではないけれど(且つそんなにちゃんと設計もできてませんが)、各コンポーネントの関係について。大体ディレクトリ構造に対応して以下のようなコンポーネントで構成しています。

```
                                   master
                                +----------------+
                                |                |
     store                      |  questions     |
   +----------------+           |                |
   |                |           +----------------+
   |  User          |               ^      ^
   |  AnswerSheet   +---------------+      |
   |                |                      |
   +----------------+                      |
         ^                                 |
         |                                 |
         |                                 |
         |       components                |
         |    +----------------------+     |
         |    |                      |     |
         |    |  App.vue             |     |
         |    |  Top.vue             |     |
         +----+  Question.vue        +-----+
              |  ...                 |
              |                      |
              +----------------------+
```

* master: 静的なデータを司る、今回で言うとアンケート(質問)
* store: 動的なデータ(状態)を司る、ユーザーIDやユーザーがどう回答したかのデータを管理する
* components: Vue.jsのコンポーネント、masterとstoreのデータを見た目に反映する

上図の矢印が重要です、矢印の入ってくるコンポーネントは矢印の出てくるコンポーネントのことを知らないようにしています。例えばstoreはmasterのことは知っているけれど、componentsのことは知りません。言い換えれば、storeはmasterさへ存在すればcomponentsなしに責任(動的なデータ(状態)の管理)を満たすことができます。さらに言えば、storeはmasterさへ存在すればcomponentsなしにテスト可能です。

基本的には、(将来の)ライフサイクルを予想してより変更の頻度が多いコンポーネント程この矢印の下位に所属するようにしています(componentsが一番変更が入りそう)。より上位のコンポーネントはアプリの根幹を成すビジネスロジック - 今回で言うと、ユーザーの回答に関するロジックなどを担うようにしています、ビジネスロジックはcomponentsなど見た目を担当するコンポーネントい比べ変更の頻度が低いと考えられるからです。またこうして見ると、見た目の表現にVue.jsを使おうが、Reactを使おうが、ビジネスロジック部分はそれらフレームワークに関しては感知していないことが分かります(フレームワークが何かとかってそんなに重要なことじゃないということ)。

こうすることで、上位に位置する程アプリとして重要な部分を担うようになります。また上位に位置する程他のコンポーネントへの依存が少ないため、テストも書き易くなります。こうやってなるべく(将来も踏まえた)保守性や拡張性を担保したいんだと思う、多分(まぁ今回のプログラムに関しては言うほど上手く設計できてはいないと思いますが…)。

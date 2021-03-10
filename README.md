## 使用技術(Frontend)

- [React](https://ja.reactjs.org/)
  - Facebook 製 UI ライブラリ。
- [Next.js](https://nextjs.org/)
  - React のフレームワーク。
- [TypeScript](https://www.typescriptlang.org/)
  - 型を使うことでバグを防いだり、ドキュメント代わりになったり、チーム開発において便利。
- [ESLint](https://eslint.org/)
  - コードを分析し問題点を指摘してくれるツール。これがあることでメンバー同士のコード差異が少なくなったり、独自ルールを追加して書き方を統一できる。
- [Prettier](https://prettier.io/)
  - コードフォーマッター。改行やクォーテーションなどを統一できる。ESLint とあわせて使うのが一般的で、ESLint だけでは実現できない部分をカバーする。
- [Jest](https://jestjs.io/ja/)
  - Facebook 製の JavaScript のテスティングフレームワークです。テストに関する様々な機能を提供しており、ドキュメントも豊富かつ実績もある。

### 状態管理

- グローバルにアクセスできる状態の管理にはApollo ClientのInMemoryCacheによるcache機構で行い、特定のcomponent内に閉じている局所的な状態の管理にはuseState等のReact Hooksを使って行っている。
- 状態管理の必要性が生じた際、アプリケーションの複雑性を上げないように、なるべくuseState等のhooksを用いたlocal stateだけで済ませられないかどうかを検討する
- 親子関係ではないcomponent同士でのやりとりが必要になった時や、サーバーのデータと関連する場合などで、ローカルのデータを一元管理しておいた方が良いケースでは、Apollo Clientのcacheを利用する。

### Next.jsの採用ポイント
- webpackにおける、バンドルやコンパイル、ホットリロード等の設定に時間を費やすことなく、ビジネスロジックの実装に集中できる。
  - 必要があれば、next.config.jsで設定を拡張できる
  - CRA(Create React App)とは異なり、拡張性に優れている
- pages配下に置くReact Componentのディレクトリ構成が、自動的にルーティングとして定義される
  - ルーティングに関する設計作業が不要になる
- 自動コード分割等によるパフォーマンス最適化を行ってくれる

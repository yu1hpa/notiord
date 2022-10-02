<div align="center">
	<h1>Notiord</h1>
	<p>
		<b>Save a word to Notion database.</b>
	</p>
	<br>
</div>

![Notiord](https://user-images.githubusercontent.com/56914289/193429870-1cfbb870-16b3-4b7b-afcf-7a55470a1578.png)

## デモ

![demo](https://user-images.githubusercontent.com/56914289/193430161-e044d912-bffe-439d-bf23-bebb25d07157.gif)

## 使い方

```
git clone https://github.com/yu1hpa/notiord.git && cd notiord
yarn install && yarn build
```

### 1. Notion Integration を用意

- https://www.notion.so/my-integrations にアクセスして integration を作成
- 基本情報を入力
- `Internal Integration Token`は、この拡張機能を使う際の`Token`に相当

### 2. Notion Database を用意

- https://www.notion.so/ にアクセスして、`full screen database`で新しいページを作成（`/database`）
- `DATABASE_ID`をコピー
  - `https://www.notion.so/DATABASE_ID?v=...`
- integration でデータベースを共有（参考：https://developers.notion.com/docs/getting-started ）

### 3. Notiord を準備

- Chrome extensions (chrome://extensions/)に移動
  - `Load unpacked`を押して、ビルド出力先の`notiord/dist`を選択
- `Ctrl + Shift + N`を押して、`DATABASE_ID`と`Token`を入力

### 4. Notiord を使う

保存したい単語を右クリックして、`Save`を選ぶ

## Dependencies

Node `v17.1.0`  
npm `8.18.0`  
Notion API v1 (https://developers.notion.com/)  
Other see [package.json](https://github.com/yu1hpa/notiord/blob/master/package.json)

## LICENSE

MIT LICENSE

## Author

yu1hpa

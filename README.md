* https://qiita.com/IganinTea/items/aec8f2b15b203946a2c4
* https://github.com/iga-yamaguchi/php-docker-sample

上記URLのDocker laravel環境を元に調整しました。


# 環境構築
```
git clone ???
cd ???
docker-compose build
docker-compose up
```

`http://localhost:8080/` にアクセスし、laravelのトップページが表示されればOK

## DBマイグレーション
```
docker-compose exec php php ./sample/artisan migrate
```

## 上記マイグレーション実行で「SQLSTATE[HY000] [2054] The server requested authentication method unknown to the client のエラー表示される場合

https://symfoware.blog.fc2.com/blog-entry-2160.html



# LaravelにReactを導入する

https://www.ritolab.com/entry/34

## scaffoldをVueからReactに変更

```
docker-compose exec php bash

// == Reactに変更したものはCommit済みのため動かす必要なし ==
cd sample
php artisan preset react
// ==================================================

npm install
```

## npm installした際にpngquant-binパッケージでエラーが表示される

Webpack内?で画像圧縮してるっぽい。圧縮に必要な`libpng-dev`がlinux osにないため別途インストールする

```
npm install // pngquant-binの箇所でERR

apt-get install libpng-dev
rm -rf node_modules // 途中までpackageのダウンロードされていたため一応削除

npm install // Success
```
（そもそも画像圧縮をWebpackでする必要がないような...）

## laravelのルーティング・コントローラー作成

ルーティング情報は`routes/web.php`に追加してCommit済み


```
// == 作成したコントローラーはCommit済みのため動かす必要なし ===
// php artisan make:controller SampleController
// =====================================================
```


## ビルド設定

`webpack.mix.js`に追記してCommit済み


## ビルド実行

```
cd sample
npm run dev
```


## 動作確認
http://localhost:8080/sample/react

> Example Component
> I'm an example component!

が表示されれば成功

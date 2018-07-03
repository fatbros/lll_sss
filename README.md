* https://qiita.com/IganinTea/items/aec8f2b15b203946a2c4
* https://github.com/iga-yamaguchi/php-docker-sample

Dockerは上記環境を参考にしました。

* https://github.com/spatie/laravel-server-side-rendering-examples

laravelは上記環境を元に作成しました。


## 環境構築
```
git clone ???
cd ???

docker-compose build
docker-compose up

// up後PHPコンテナの中に入る
docker-compose exec php bash

cd sample
composer install

// libpng-devがlinux os上になくpngquant-binのインストールが失敗するため
apt-get install libpng-dev

npm install
npm run production
```

* `http://localhost:8080/`
* `http://localhost:8080/react`


にアクセスし、表示されれば環境構築完了


### DBマイグレーション(SSRの動作確認までならマイグレーションしなくてもいいかも)
```
docker-compose exec php php ./sample/artisan migrate
```


### 上記マイグレーション実行で「SQLSTATE[HY000] [2054] The server requested authentication method unknown to the client のエラー表示される場合

https://symfoware.blog.fc2.com/blog-entry-2160.html

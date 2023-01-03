##  [111-1] Web Programming Final
### Group 21 Gros Patisserie 胖胖製甜所
***
### 專題介紹
* 這個服務在做什麼？ <br>
因為我們有位組員的姊姊會在網路上販售甜點，目前主要以 IG 的帳號為主要的對外窗口，我們便想到能夠利用這學期所學，為她架設一個網站，能夠讓她的顧客能夠以更方便的介面去查看商品及購買。
* 使用之第三方套件、框架、程式碼
我們使用的是課堂中使用的 Node.js, React.js，連接後端的部分使用的是 express。在登入的功能中，我們使用了 Google 的 api 讓使用者能夠以 Google 帳號登入。

### 操作說明
1. 將 .env.default 改為 .env，並將內容改成 <br> `PASSWORD＝"b097050030415" `
2. 分別至 frontend, backend 目錄底下 yarn，並以 yarn start, yarn server 開啟。<br>
```
# under frontend
yarn
yarn start

# under backend
yarn
yarn server
```
3. 接著就能在 localhost:3000 使用我們的服務。

### 功能說明
#### 可先觀賞 demo 影片再進行操作
1. 基本操作：點選畫面上方中間的 logo 可以回到主頁，主要功能欄也都可以點選進到相應服務，若再未登入的狀況下點選會員專區，會跳到登入、註冊畫面。
2. 註冊功能：可以使用 Google 帳號註冊也可以使用一般註冊，或是使用這組帳密，功能都是一樣的，不註冊也能瀏覽網頁。
3. 在商品總覽中，左側可以選擇想要瀏覽的商品種類，並透過左上方的 selector 選擇排序方式。
4. 登入過後，可以將商品加入購物車，此紀錄會被保留，之後登出再登入，購物車中會有紀錄。在購物車中也可以調整商品的數量或刪除。
5. 在購物車中，可以勾選欲下單的商品後點選訂購按鈕，會送出訂單，之後便可在會員專區中的訂單查詢中看見自己的訂單。訂單查詢中的訂單，可以點選並展開，會顯示此筆訂單購買的商品，同樣地，下次登入也能看見此訂單。
6. 會員專區中，有另一個會員資料的頁面，此頁面可讓使用者更改會員資料，並加入一些當時登入並未留下的資料，不過信箱的部分是不能更改的，更動資料後按下右下角的儲存變更即可。

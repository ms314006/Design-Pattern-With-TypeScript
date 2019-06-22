<h1 align="center">裝飾者模式 Decorate Pattern</h1>

## 重點

### 反覆對某類別產生出來的實體加以裝飾，讓同一個 Method 得出來的值能夠經過每一個裝飾者。

## 筆記
1. 裝飾者模式運用了「開放/封閉原則」，不去改變類別中原有的功能，而是以擴展的方式得到我們要的結果。
2. 如果裝飾者和被裝飾者擁有相同的超類型，那被裝飾者就可以一直被裝飾，就算是已經被裝飾過。
3. 裝飾不是繼承，而是用目前創建出來的實體，成為另外一個實體的過程，因此同樣的 Method 不會被取代，而是逐層依序執行（委託上一層裝飾）。
4. 裝飾者可以再委託上一層裝飾執行的前後加上自己的行為。

## 執行
1. clone 到專案資料夾。
2. 輸入 `npm install` 安裝套件。
3. 輸入 `npm run tscBuild` 編譯 `index.js` 檔案。
4. 輸入 `node index.js` 執行程式。
5. 如果要編譯 `exercise.ts` ，要進入 `package.json` 中，將 `index.ts` 改為  `exercise.ts` 。
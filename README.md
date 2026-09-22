# 第八章｜登山隊伍管理與領隊決策｜亞馬遜國家山岳協會

本專案為亞馬遜國家山岳協會登山教育教材第八章（`/chapter08/` 子目錄架構）。

## SEO 與 Sitemap 整合說明

本頁的 `sitemap.xml`（路徑：`/chapter08/sitemap.xml`）需要被整合進網域根目錄：
- `https://amazon-hike.com/sitemap.xml`（或 sitemap index）
- 並由根目錄的 `https://amazon-hike.com/robots.txt` 統一宣告

> **注意**：搜尋引擎爬蟲只會在根網域（`https://amazon-hike.com/robots.txt`）讀取 robots 規則與 Sitemap 指引，這兩個檔案不會在子目錄層級單獨生效，需在主網域專案統一配置。

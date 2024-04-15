// deno.landに公開されているモジュールをimport
// denoではURLを直に記載してimportできます
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";

// localhostにDenoのHTTPサーバを展開
serve(request => {
    return new Response(
        // Responseの第一引数にレスポンスのbodyを設置
        "<h1>H1見出しです</h1>",
        // Responseの第二引数にヘッダ情報等の付加情報を設置
        {
            // レスポンスにヘッダ情報を付加
            headers: {
                // text/html形式のデータで、文字コードはUTF-8であること
                "Content-Type": "text/html; charset=utf-8"
            }
        }
    );
});
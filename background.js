chrome.runtime.onInstalled.addListener(function() {  //インストール時、バージョンアップ時に実行されるコールバック登録
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    /*多分、ルールの初期化の定型*/
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {  //ルールを外す.arg1が空なのですべて。(特定する場合はarray)
      //コールバック
      chrome.declarativeContent.onPageChanged.addRules([{ //ルール追加
        /*ルールについて https://developer.chrome.com/extensions/declarativeContent */
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},  // URLマッチ
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]  // pageAction(右上のやつ)を表示させる
      }]);
    });
});
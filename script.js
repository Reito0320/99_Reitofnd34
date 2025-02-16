"use strict";
///////////////////////////花々菜花関連のjs////////////////////////////////////

//商品一覧の花々菜花のカートに入れるボタンの要素を抽出;
const firstButton = document.getElementsByClassName("fourth-button-first");

//商品一覧の花々菜花をカートに入れた際に出てくるdiv;
const firstitem = document.getElementsByClassName("first-shopping-item");

//商品一覧の花々菜花をクリックした際に、関数を動かす;
firstButton[0].addEventListener("click",firstbuttonCountup);

let firstButtonCount = 0;
function firstbuttonCountup () {
    window.alert("花々菜花がカートに追加されました");
    firstButtonCount++;
    firstitem[0].style.color = "black";
    firstitem[0].innerText = "花々菜花 5kg ¥5000 ×"+ firstButtonCount + "個 ¥" + firstButtonCount * 5000;
    return firstButtonCount;
};

//////////////////////////菜花の漬物関連のjs///////////////////////////////////////

//商品一覧の菜花の漬物のカートに入れるボタンの要素を抽出;
const secondButton = document.getElementsByClassName("fourth-button-second");

//商品一覧の菜花の漬物をカートに入れるボタンを押した際に出現するdivの要素を抽出;
const seconditem = document.getElementsByClassName("second-shopping-item");

//商品一覧の菜花の漬物をクリックした際に、関数を動かす;
secondButton[0].addEventListener("click",secondButtonCountup);

let secondButtonCount = 0;
function secondButtonCountup () {
    window.alert("菜花の漬物がカートに追加されました");
    secondButtonCount++;
    seconditem[0].style.color = "black";
    seconditem[0].innerText = "菜花の漬物 5kg ¥5000 ×"+ secondButtonCount + "個 ¥" + secondButtonCount * 5000;

    return secondButtonCount;
};

///////////////////////////////宮原さんの絵関連のjs///////////////////////////////////////////

//商品一覧の宮原さん絵のカートに入れるボタンの要素を抽出;
const thredButton = document.getElementsByClassName("fourth-button-thred");

//商品一覧の宮原さんの絵をカートに入れた際に出てくるdiv;
const threditem = document.getElementsByClassName("thred-shopping-item");

//商品一覧の宮原さんの絵をクリックした際に、関数を動かす;
thredButton[0].addEventListener("click",thredButtonCountup);

let thredButtonCount = 0;
function thredButtonCountup () {
    window.alert("宮原さんの絵がカートに追加されました");
    thredButtonCount++;
    threditem[0].style.color = "black";
    threditem[0].innerText = "宮原さんの絵 ¥5000 ×"+ thredButtonCount + "個 ¥" + thredButtonCount * 5000;
    return thredButtonCount;
};

////////////////////////////////////購入するボタン関連のjs  //////////////////////////////////////////////////

//購入するボタンの要素を抽出;
const decideButton = document.getElementsByClassName("decide-button");
//購入するボタンをclickすると発火;
decideButton[0].addEventListener("click",decide);

function decide () {
    if (firstButtonCount <= 0 && secondButtonCount <= 0 && thredButtonCount <= 0) {
        return false;
    
    } else if (firstButtonCount > 0 && secondButtonCount > 0 && thredButtonCount > 0) {
        window.alert("花々菜花が" + firstButtonCount + "点\n¥" + firstButtonCount * 5000 
            + "\n菜花の漬物が" + secondButtonCount + "点\n¥" + secondButtonCount * 5000
            + "\n宮原さんの絵が" + thredButtonCount + "点\n¥" + thredButtonCount * 5000
            + "\n合計¥" + (firstButtonCount + secondButtonCount + thredButtonCount) * 5000 + "です。\n購入を確定いたしますか？")
        window.alert("購入を確定いたしました!!");

    } else if (firstButtonCount > 0 && secondButtonCount <= 0 && thredButtonCount <= 0 ) {
        window.alert("花々菜花が" + firstButtonCount + "点\n¥" + firstButtonCount * 5000 + "です。\n購入を確定いたしますか？")
        window.alert("購入を確定いたしました!!");

    } else if (firstButtonCount <= 0 && secondButtonCount > 0 && thredButtonCount <= 0 ) {
        window.alert("菜花の漬物が" + secondButtonCount + "点\n¥" + secondButtonCount * 5000 + "です。\n購入を確定いたしますか？");
        window.alert("購入を確定いたしました!!");

    } else if (firstButtonCount <= 0 && secondButtonCount <= 0 && thredButtonCount > 0 ) {
        window.alert("宮原さんの絵が" + thredButtonCount + "点\n¥" + thredButtonCount * 5000 + "です。\n購入を確定いたしますか？");
        window.alert("購入を確定いたしました!!");

    } else if (firstButtonCount > 0 && secondButtonCount > 0 && thredButtonCount <= 0 ) {
        window.alert("花々菜花が" + firstButtonCount + "点\n¥" + firstButtonCount * 5000
            + "\n菜花の漬物が" + secondButtonCount + "点\n¥" + secondButtonCount * 5000
            + "\n合計¥" + (firstButtonCount + secondButtonCount) * 5000 + "です。\n購入を確定いたしますか？");
            window.alert("購入を確定いたしました!!");

    } else if (firstButtonCount > 0 && secondButtonCount <= 0 && thredButtonCount > 0 ) {
        window.alert("花々菜花が" + firstButtonCount + "点\n¥" + firstButtonCount * 5000
            + "\n宮原さんの絵が" + thredButtonCount + "点\n¥" + thredButtonCount * 5000
            + "\n合計¥" + (firstButtonCount + thredButtonCount) * 5000 + "です。\n購入を確定いたしますか？");
            window.alert("購入を確定いたしました!!");

    } else if (firstButtonCount <= 0 && secondButtonCount > 0 && thredButtonCount > 0 ) {
        window.alert("菜花の漬物が" + secondButtonCount + "点\n¥" + secondButtonCount * 5000
            + "\n宮原さんの絵が" + thredButtonCount + "点\n¥" + thredButtonCount * 5000
            + "\n合計¥" + (secondButtonCount + thredButtonCount) * 5000 + "です。\n購入を確定いたしますか？");
            window.alert("購入を確定いたしました!!");

    };
    window.location.reload();
}

//////////////////////////////////////////購入取り消しボタン関連のjs/////////////////////////////////////////////////////////

//購入を取り消しするボタンの要素を抽出;
const canselButton = document.getElementsByClassName("cansel-button");
//購入するボタンをクリックした際に発火;
canselButton[0].addEventListener("click",cansel);

function cansel() {
    if (firstButtonCount >= 0 || secondButtonCount >= 0 || thredButtonCount >= 0) {
        firstitem[0].style.color = "white";
        seconditem[0].style.color = "white";
        threditem[0].style.color = "white";
    }
    window.location.reload();
}

//////////////////////////form input////////////////////////////////////////////////////////////////

//フォームセクションのお名前欄の要素を抽出;
const formTextName = document.getElementsByClassName("form-text");
//フォームセクションのお名前欄に名前を入力すると発火;
formTextName[0].addEventListener("change",textNameDatefunc);
//お名前の情報を返り値にもつ関数;
function textNameDatefunc () {
    let textDate = document.forms.name.value;
    return textDate;
};

//フォームセクションのmail欄の要素を抽出;
const formTextMail = document.getElementsByClassName("form-email");
//フォームセクションのmail欄にmailを入力すると発火;
formTextMail[0].addEventListener("change",textMailDatefunc);
//mail情報を返り値にもつ関数;
function textMailDatefunc () {
    let textDate = document.forms.mail.value;
    return textDate;
};

//フォームセクションのご質問欄の要素を抽出;
const formTextArea = document.getElementsByClassName("form-textarea");
//フォームセクションのご質問欄に質問を入力すると発火;
formTextArea[0].addEventListener("change",textDateAreafunc);
//質問情報を返り値にもつ関数;
function textDateAreafunc() {
    let textDate = document.forms.textarea.value;
    return textDate;
};

//フォームセクションの送信ボタンの要素を抽出;
const formButton = document.getElementsByClassName("submit");
//フォームセクションの送信ボタンをclickすると発火;
formButton[0].addEventListener("click",formCallBack);
//フォームセクションのデータを反映したalertを表示する関数;
function formCallBack () {
    const Name = textNameDatefunc();
    const Mail = textMailDatefunc();
    const Area = textDateAreafunc();
    if (Name.length <= 0 && Mail.length <= 0 && Area.length <= 0) {
        return false;
    } else if (Name.length > 0 && Mail.length > 0 && Area.length > 0) {
        window.alert("お問い合わせありがとうございます!!\n" + Name + "さん\n" + Mail + "こちらのアドレス宛に\n" + "「" + Area + "」\nこちらのご質問のお返事を近日中にいたします!!" );
        window.location.reload();
    } else if (Name.length > 0 && Mail.length <= 0 && Area.length <= 0) {
        window.alert("お問い合わせありがとうございます!!\n" + Name + "さん\n" + "Mailの入力とご質問の入力がまだのようです!!\nもしよろしければご協力お願いいたします!!");
    } else if (Name.length > 0 && Mail.length > 0 && Area.length <= 0) {
        window.alert("お問い合わせありがとうございます!!\n" + Name + "さん\n" + "ご質問の入力がまだのようです!!\nもしよろしければご協力お願いいたします!!");
    } else if (Name.length <= 0 && Mail.length > 0 && Area.length <= 0) {
        window.alert("お問い合わせありがとうございます!!\n" + "お名前とご質問の入力がまだのようです!!\nもしよろしければご協力お願いいたします!!");
    } else if (Name.length <= 0 && Mail.length > 0 && Area.length > 0) {
        window.alert("お問い合わせありがとうございます!!\n" + "お名前の入力がまだのようです!!\nもしよろしければご協力お願いいたします!!");
    }
};

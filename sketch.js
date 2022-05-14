var input;
var Bingbutton, Googlebutton, Yandexbutton, AskButton, AolButton;
var DuckDuckGoButton, GooButton;
var LycosButton, DaumKakaoButton, ExciteButton;
var asImg, as;
var NaverButton, EcosiaButton;
var YahooButton, ExaleadButton;
var WallaButton, WebCrawlerButton;
var MetaCrawlerButton, EgerinButton;
var MojeekButton, LeitButton;


function preload(){
asImg = loadImage("ameysearcher.png");

    
}

function setup() {
    createCanvas(windowWidth,windowHeight);


    input = createInput("","text");
    input.position(width/2 - 350,150);
    input.size(600);
    input.class("input");

    Bingbutton = createButton("Bing Search");
    Bingbutton.position(10, input.y +75);
    Bingbutton.mouseClicked(bing);
    Bingbutton.class("button");
   
    Googlebutton = createButton("Google Search");
    Googlebutton.position(10,Bingbutton.y + 100);
    Googlebutton.mouseClicked(google);
    Googlebutton.class("button")

    Yandexbutton = createButton("Yandex Search");
    Yandexbutton.position(Bingbutton.x, Googlebutton.y+100);
    Yandexbutton.mouseClicked(yandex);
    Yandexbutton.class("button")

    AskButton = createButton("Ask Search");
    AskButton.position(Bingbutton.x,Yandexbutton.y +100);
    AskButton.mouseClicked(ask);
    AskButton.class("button")




    DuckDuckGoButton = createButton("DuckDuckGo Search");
    DuckDuckGoButton.position(Bingbutton.x + 300, input.y+75);
    DuckDuckGoButton.mouseClicked(duckduckgo);
    DuckDuckGoButton.class("button")

    AolButton = createButton("Aol Search");
    AolButton.position(DuckDuckGoButton.x,DuckDuckGoButton.y + 300);
    AolButton.mouseClicked(aol);
    AolButton.class("button")

    NaverButton = createButton("Naver Search");
    NaverButton.position(AolButton.x, DuckDuckGoButton.y+200);
    NaverButton.mouseClicked(naver);
    NaverButton.class("button");

    GooButton = createButton("Goo Search");
    GooButton.position(DuckDuckGoButton.x + 300, input.y + 75);
    GooButton.mouseClicked(goo);
    GooButton.class("button")

    LycosButton = createButton("Lycos Search");
    LycosButton.position(GooButton.x, GooButton.y+100);
    LycosButton.mouseClicked(lycos);
    LycosButton.class("button")

    DaumKakaoButton = createButton("Daum Kakao Search");
    DaumKakaoButton.position(GooButton.x,GooButton.y+200);
    DaumKakaoButton.mouseClicked(daumkakao);
    DaumKakaoButton.class("button")

    ExciteButton = createButton("Excite Search");
    ExciteButton.position(GooButton.x, DaumKakaoButton.y+ 100);
    ExciteButton.mouseClicked(excite);
    ExciteButton.class("button")

    EcosiaButton = createButton("Ecosia Search");
    EcosiaButton.position(DuckDuckGoButton.x,DuckDuckGoButton.y+100);
    EcosiaButton.mouseClicked(ecosia);
    EcosiaButton.class("button");

    YahooButton = createButton("Yahoo Search");
    YahooButton.position(GooButton.x + 300,input.y + 75);
    YahooButton.mouseClicked(yahoo);
    YahooButton.class("button");

    ExaleadButton = createButton("Exalead Search");
    ExaleadButton.position(YahooButton.x,YahooButton.y + 100);
    ExaleadButton.mouseClicked(exalead);
    ExaleadButton.class("button");

    WallaButton = createButton("Walla! Search");
    WallaButton.position(YahooButton.x, ExaleadButton.y + 100);
    WallaButton.mouseClicked(walla);
    WallaButton.class("button");

    WebCrawlerButton = createButton("Web Crawler Search");
    WebCrawlerButton.position(YahooButton.x,WallaButton.y + 100);
    WebCrawlerButton.mouseClicked(webcrawler);
    WebCrawlerButton.class("button");


    MetaButton = createButton("Meta Crawler Search");
    MetaButton.position(Bingbutton.x,AskButton.y + 100);
    MetaButton.mouseClicked(metacrawler);
    MetaButton.class("button");

    EgerinButton = createButton("Egerin Search");
    EgerinButton.position(DuckDuckGoButton.x,AskButton.y + 100);
    EgerinButton.mouseClicked(egerin);
    EgerinButton.class("button");

    MojeekButton = createButton("Mojeek Search");
    MojeekButton.position(GooButton.x,AskButton.y + 100);
    MojeekButton.mouseClicked(mojeek);
    MojeekButton.class("button");

    LeitButton = createButton("Leit Search");
    LeitButton.position(YahooButton.x,AskButton.y + 100);
    LeitButton.mouseClicked(leit);
    LeitButton.class("button");

    

    


}

function draw() {
    imageMode(CENTER);
    image(asImg,width/2,75,140,130);
    textSize(15)

}

function bing(){
    window.open("https://www.bing.com/search?q="+input.value())
}

function google(){
    window.open("https://www.google.com/search?q="+input.value())
}

function yandex(){
    window.open("https://yandex.com/search/?text="+input.value())
}

function ask(){
    window.open("https://www.ask.com/web?q="+input.value())
}

function aol(){
    window.open("https://search.aol.com/aol/search?q="+input.value())
}

function duckduckgo(){
    window.open("https://duckduckgo.com/?q="+input.value())
}

function goo(){
    window.open("https://search.goo.ne.jp/web.jsp?MT="+input.value())
}

function lycos(){
    window.open("https://search.lycos.com/web/?q="+input.value());
}

function daumkakao(){
    window.open("https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q="+input.value());
}

function excite(){
    window.open("https://results.excite.com/serp?q="+input.value())
}

function naver(){
    window.open("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query="+input.value())
}

function ecosia(){
    window.open("https://www.ecosia.org/search?method=index&q="+input.value())
}

function yahoo(){
    window.open("https://search.yahoo.com/search?q="+input.value());
}

function exalead(){
    window.open("https://www.exalead.com/search/web/results/?q="+input.value());
}

function walla(){
    window.open("https://search.walla.co.il/?q="+input.value());
}

function webcrawler(){
    window.open("https://www.webcrawler.com/serp?q="+input.value());
}
function metacrawler(){
    window.open("https://www.metacrawler.com/serp?q="+input.value());
}
function egerin(){
    window.open("https://egerin.com/search/?type=Web&start=0&image_size=&image_color=&image_date=&load_more=&q="+input.value());
}
function mojeek(){
    window.open("https://www.mojeek.com/search?q="+input.value());
}
function leit(){
    window.open("http://leit.is/leita?utf8=%E2%9C%93&search="+input.value());
}
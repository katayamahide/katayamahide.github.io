const wd = {
    ja: {
        lang: "ja",
        language: "Japanese",
        title: "ポチッと栄養表示",
        content: "海外栄養表示の簡単作成ツールです。最新の米国FDA栄養表示ルールに対応。",
        info: "米国FDA栄養表示の簡単作成ツール",
        select: "日本語",
        spc: "パッケージ当たり食数",
        ss: "1食分の量(g)",
        sso: "1食分の量(g以外)",
        nt: "栄養素",
        cl: "熱量",
        tf: "総脂質",
        sf: "飽和脂肪酸",
        tr: "トランス脂肪酸",
        co: "コレステロール",
        so: "ナトリウム",
        tc: "総炭水化物",
        df: "食物繊維",
        ts: "総糖類",
        as: "添加糖類",
        pr: "プロテイン",
        vd: "ビタミンD",
        ca: "カルシウム",
        ir: "鉄分",
        po: "カリウム",
        display: "表示",
        delete: "消去"
    },
    de: {
        lang: "de",
        language: "German",
        title: "Ernährungsindikation auf Knopfdruck",
        content: "Dies ist ein einfaches Instrument zur Erstellung von Nährwertkennzeichnungen in Übersee. Entspricht den neuesten Vorschriften der US FDA zur Nährwertkennzeichnung.",
        info: "einfaches werkzeug zur erstellung des us-fda nährwertkennzeichens",
        select: "deutsch (Sprache)",
        spc: "Anzahl der Mahlzeiten pro Paket",
        ss: "Menge pro Portion (g)",
        sso: "Betrag pro Portion (außer g)",
        nt: "Nährstoffe",
        cl: "Kalorien",
        tf: "Gesamtfett",
        sf: "gesättigtes Fett",
        tr: "Trans-Fett",
        co: "Choresterin",
        so: "Natrium",
        tc: "Gesamt-Kohlenhydrat",
        df: "Ballaststoffe",
        ts: "Zucker insgesamt",
        as: "Hinzugefügte Zucker",
        pr: "Protein",
        vd: "Vitamin D",
        ca: "Kalzium",
        ir: "Eisengehalt",
        po: "Kalium",
        display: "anzeigen",
        delete: "Löschung"
    }
}

// 言語モードを挿入
const lang = (x) => {
    document.querySelector("html").setAttribute("lang", x)
}
const title = (x) => {
    document.querySelector("title").innerHTML = x;
}
const content = (x) => {
    document.getElementById("content").setAttribute("content", x);
}
const info = (x) => {
    document.getElementById("info").innerHTML = x;
}
const spc = (x) => {
    document.getElementById("spc").innerHTML = x;
}
const ss = (x) => {
    document.getElementById("ss").innerHTML = x;
}
const sso = (x) => {
    document.getElementById("sso").innerHTML = x;
}
const nt = (x) => {
    document.getElementById("nt").innerHTML = x;
}
const cl = (x) => {
    document.getElementById("cl").innerHTML = x;
}
const tf = (x) => {
    document.getElementById("tf").innerHTML = x;
}
const sf = (x) => {
    document.getElementById("sf").innerHTML = x;
}
const tr = (x) => {
    document.getElementById("tr").innerHTML = x;
}
const co = (x) => {
    document.getElementById("co").innerHTML = x;
}
const so = (x) => {
    document.getElementById("so").innerHTML = x;
}
const tc = (x) => {
    document.getElementById("tc").innerHTML = x;
}
const df = (x) => {
    document.getElementById("df").innerHTML = x;
}
const ts = (x) => {
    document.getElementById("ts").innerHTML = x;
}
const as = (x) => {
    document.getElementById("as").innerHTML = x;
}
const pr = (x) => {
    document.getElementById("pr").innerHTML = x;
}
const vd = (x) => {
    document.getElementById("vd").innerHTML = x;
}
const ca = (x) => {
    document.getElementById("ca").innerHTML = x;
}
const ir = (x) => {
    document.getElementById("ir").innerHTML = x;
}
const po = (x) => {
    document.getElementById("po").innerHTML = x;
}
const display = (x) => {
    document.getElementById("display").setAttribute("value", x);
}
const del = (x) => {
    document.getElementById("delete").setAttribute("value", x);
}
const selectLanguage = document.getElementById("select");

selectLanguage.addEventListener("change", function () {
    const index = this.selectedIndex;
    const value = this[index].value;

    if (value === "default") {

    } else if (value === "ja") {
        // ■Japanese
        lang(wd.ja.lang);
        title(wd.ja.title);
        content(wd.ja.content);
        info(wd.ja.info);
        spc(wd.ja.spc);
        ss(wd.ja.ss);
        sso(wd.ja.sso);
        nt(wd.ja.nt);
        cl(wd.ja.cl);
        tf(wd.ja.tf);
        sf(wd.ja.sf);
        tr(wd.ja.tr);
        co(wd.ja.co);
        so(wd.ja.so);
        tc(wd.ja.tc);
        df(wd.ja.df);
        ts(wd.ja.ts);
        as(wd.ja.as);
        pr(wd.ja.pr);
        vd(wd.ja.vd);
        ca(wd.ja.ca);
        ir(wd.ja.ir);
        po(wd.ja.po);
        display(wd.ja.display);
        del(wd.ja.delete);

    } else if (value === "de") {
        // ■German
        lang(wd.de.lang);
        title(wd.de.title);
        content(wd.de.content);
        info(wd.de.info);
        spc(wd.de.spc);
        ss(wd.de.ss);
        sso(wd.de.sso);
        nt(wd.de.nt);
        cl(wd.de.cl);
        tf(wd.de.tf);
        sf(wd.de.sf);
        tr(wd.de.tr);
        co(wd.de.co);
        so(wd.de.so);
        tc(wd.de.tc);
        df(wd.de.df);
        ts(wd.de.ts);
        as(wd.de.as);
        pr(wd.de.pr);
        vd(wd.de.vd);
        ca(wd.de.ca);
        ir(wd.de.ir);
        po(wd.de.po);
        display(wd.de.display);
        del(wd.de.delete);
    }
});

function NavigatorGetLanguage() {
    let navigator_obj = window.navigator;
    if (navigator_obj.language !== undefined) return navigator_obj.language;
    if (navigator_obj.browserLanguage !== undefined) return navigator_obj.browserLanguage;
    if (navigator_obj.userLanguage !== undefined) return navigator_obj.userLanguage;
    return "ja";
}

let language = NavigatorGetLanguage();
if (language === "ja") {
    // ■Japanese
    lang(wd.ja.lang);
    title(wd.ja.title);
    content(wd.ja.content);
    info(wd.ja.info);
    spc(wd.ja.spc);
    ss(wd.ja.ss);
    sso(wd.ja.sso);
    nt(wd.ja.nt);
    cl(wd.ja.cl);
    tf(wd.ja.tf);
    sf(wd.ja.sf);
    tr(wd.ja.tr);
    co(wd.ja.co);
    so(wd.ja.so);
    tc(wd.ja.tc);
    df(wd.ja.df);
    ts(wd.ja.ts);
    as(wd.ja.as);
    pr(wd.ja.pr);
    vd(wd.ja.vd);
    ca(wd.ja.ca);
    ir(wd.ja.ir);
    po(wd.ja.po);
    display(wd.ja.display);
    del(wd.ja.delete);

} else {
    // ■German
    lang(wd.de.lang);
    title(wd.de.title);
    content(wd.de.content);
    info(wd.de.info);
    spc(wd.de.spc);
    ss(wd.de.ss);
    sso(wd.de.sso);
    nt(wd.de.nt);
    cl(wd.de.cl);
    tf(wd.de.tf);
    sf(wd.de.sf);
    tr(wd.de.tr);
    co(wd.de.co);
    so(wd.de.so);
    tc(wd.de.tc);
    df(wd.de.df);
    ts(wd.de.ts);
    as(wd.de.as);
    pr(wd.de.pr);
    vd(wd.de.vd);
    ca(wd.de.ca);
    ir(wd.de.ir);
    po(wd.de.po);
    display(wd.de.display);
    del(wd.de.delete);
}


// document.getElementsByTagName('html')[0].className += language;
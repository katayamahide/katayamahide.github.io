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
        select: "Deutsch",
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
    },
    cn: {
        lang: "cn",
        language: "Chinese",
        title: "一下子营养标签",
        content: "这是一个创建海外营养标签的简单工具。 符合美国FDA最新的营养标签规则",
        info: "创建海外营养标签的简单工具",
        select: "中文",
        spc: "每个容器的食用量",
        ss: "食用量(克)",
        sso: '食用量(除"克"以外)',
        nt: "营养素",
        cl: "卡路里",
        tf: "脂肪总量",
        sf: "饱和脂肪",
        tr: "反式脂肪",
        co: "胆固醇",
        so: "钠",
        tc: "总碳水化合物",
        df: "膳食纤维",
        ts: "总糖",
        as: "添加糖类",
        pr: "蛋白质",
        vd: "维生素D",
        ca: "钙质",
        ir: "铁的",
        po: "钾元素",
        display: "显示",
        delete: "擦除"
    },
}

// 言語モードを挿入
const lang = (x) => {
    document.querySelector("html").setAttribute("lang", x);
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

const ja = () => {
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
}

const de = () => {
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

const cn = () => {
    lang(wd.cn.lang);
    title(wd.cn.title);
    content(wd.cn.content);
    info(wd.cn.info);
    spc(wd.cn.spc);
    ss(wd.cn.ss);
    sso(wd.cn.sso);
    nt(wd.cn.nt);
    cl(wd.cn.cl);
    tf(wd.cn.tf);
    sf(wd.cn.sf);
    tr(wd.cn.tr);
    co(wd.cn.co);
    so(wd.cn.so);
    tc(wd.cn.tc);
    df(wd.cn.df);
    ts(wd.cn.ts);
    as(wd.cn.as);
    pr(wd.cn.pr);
    vd(wd.cn.vd);
    ca(wd.cn.ca);
    ir(wd.cn.ir);
    po(wd.cn.po);
    display(wd.cn.display);
    del(wd.cn.delete);
}

selectLanguage.addEventListener("change", function () {
    const index = this.selectedIndex;
    const value = this[index].value;

    if (value === "ja") {
        ja();
    } else if (value === "de") {
        de();
    } else if (value === "cn") {
        cn();
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
    ja();
} else if (language === "de") {
    de();
    // } else if (language === "cn") {
    //     cn();
}

function goodman() {
    // パッケージ当たり食数 Servings per container
    // 値を取得
    let valuePerContainer = document.form.servingsPerContainer.value;
    // 栄養表示に出力
    document.getElementById("perContainer1").textContent = valuePerContainer;

    // サービングサイズテキスト Servings size text
    // 値を取得
    let valueServingText = document.form.servingText.value;
    // 栄養表示に出力
    document.getElementById("servingText1").textContent = valueServingText;

    // サービングサイズ Servings size
    // 値を取得
    let valueServingSize = document.form.servingSize.value;
    // 栄養表示に出力
    document.getElementById("servingSize1").textContent = valueServingSize;
    // 1 食分あたり割合を計算
    let servingSizePercent = valueServingSize / 100;


    // ■熱量 Calories
    // 値を取得、サービングサイズ当たりの値を計算
    let valueCalories = document.form.calories.value * servingSizePercent;

    if (valueCalories <= 50) {
        // 5刻みで丸める
        valueCalories = Math.round(valueCalories * 2 / 10) * 10 / 2;
    } else {
        // 10刻みで丸める
        valueCalories = Math.round(valueCalories / 10) * 10;
    }
    // 栄養表示に出力
    document.getElementById("calories1").textContent = valueCalories;


    // ■総脂質 Total Fat
    // 値を取得
    let valueTotalFat = document.form.totalFat.value * servingSizePercent;
    // %DVを計算 DV=78
    let valueTotalFatDV = valueTotalFat / 78 * 100;
    // %DVを四捨五入
    valueTotalFatDV = Math.round(valueTotalFatDV);

    if (valueTotalFat <= 5) {
        // 0.5刻みで丸める
        valueTotalFat = Math.round(valueTotalFat * 2) / 2;
    } else {
        // 1刻みで丸める
        valueTotalFat = Math.round(valueTotalFat);
    }
    // 栄養表示に出力
    document.getElementById("totalFat1").textContent = valueTotalFat;
    // %DVに出力
    document.getElementById("totalFatDV").textContent = valueTotalFatDV;


    // ■飽和脂肪酸 Saturated Fat
    // 値を取得
    let valueSaturatedFat = document.form.saturatedFat.value * servingSizePercent;
    // %DVを計算 DV=20
    let valueSaturatedFatDV = valueSaturatedFat / 20 * 100;
    // %DVを四捨五入
    valueSaturatedFatDV = Math.round(valueSaturatedFatDV);

    if (valueSaturatedFat <= 5) {
        // 0.5刻みで丸める
        valueSaturatedFat = Math.round(valueSaturatedFat * 2) / 2;
    } else {
        // 1刻みで丸める
        valueSaturatedFat = Math.round(valueSaturatedFat);
    }
    // 栄養表示に出力
    document.getElementById("saturatedFat1").textContent = valueSaturatedFat;
    // %DVに出力
    document.getElementById("saturatedFatDV").textContent = valueSaturatedFatDV;

    // ■ トランス脂肪酸 Trans Fat
    // 値を取得
    let valueTransFat = document.form.transFat.value * servingSizePercent;

    if (valueTransFat <= 5) {
        // 0.5刻みで丸める
        valueTransFat = Math.round(valueTransFat * 2) / 2;
    } else {
        // 1刻みで丸める
        valueTransFat = Math.round(valueTransFat);
    }
    // 栄養表示に出力
    document.getElementById("transFat1").textContent = valueTransFat;

    // ■ コレステロール Cholesterol
    // 値を取得
    let valueCholesterol = document.form.cholesterol.value * servingSizePercent;
    // %DVを計算 DV=300
    let valueCholesterolDV = valueCholesterol / 300 * 100;
    // %DVを四捨五入
    valueCholesterolDV = Math.round(valueCholesterolDV);


    if (valueCholesterol < 5) {
        // 5mg未満
        valueCholesterol = "less than 5";
    } else {
        // 5刻みで丸める
        valueCholesterol = Math.round(valueCholesterol * 2 / 10) * 10 / 2;
    }
    // 栄養表示に出力
    document.getElementById("cholesterol1").textContent = valueCholesterol;
    // %DVに出力
    document.getElementById("cholesterolDV").textContent = valueCholesterolDV;

    // ■ ナトリウム sodium
    // 値を取得
    let valueSodium = document.form.sodium.value * servingSizePercent;
    // %DVを計算 DV=2300
    let valueSodiumDV = valueSodium / 2300 * 100;
    // %DVを四捨五入
    valueSodiumDV = Math.round(valueSodiumDV);

    if (valueSodium <= 140) {
        // 5刻みで丸める
        valueSodium = Math.round(valueSodium * 2 / 10) * 10 / 2;
    } else {
        // 10刻みで丸める
        valueSodium = Math.round(valueSodium / 10) * 10;
    }
    // 栄養表示に出力
    document.getElementById("sodium1").textContent = valueSodium;
    // %DVに出力
    document.getElementById("sodiumDV").textContent = valueSodiumDV;

    // ■ 総炭水化物 Total Carbonhydrate
    // 値を取得
    let valueTotalCarbonhydrate = document.form.totalCarbonhydrate.value * servingSizePercent;
    // %DVを計算 DV=275
    let valueTotalCarbonhydrateDV = valueTotalCarbonhydrate / 275 * 100;
    // %DVを四捨五入
    valueTotalCarbonhydrateDV = Math.round(valueTotalCarbonhydrateDV);

    if (valueTotalCarbonhydrate < 1) {
        // 1未満
        valueTotalCarbonhydrate = "less than 1";
    } else {
        // 1刻みで丸める
        valueTotalCarbonhydrate = Math.round(valueTotalCarbonhydrate);
    }
    // 栄養表示に出力
    document.getElementById("totalCarbonhydrate1").textContent = valueTotalCarbonhydrate;
    // %DVに出力
    document.getElementById("totalCarbonhydrateDV").textContent = valueTotalCarbonhydrateDV;

    // ■ 食物繊維 Dietary fiber
    // 値を取得
    let valueDietaryFiber = document.form.dietaryFiber.value * servingSizePercent;
    // %DVを計算 DV=28
    let valueDietaryFiberDV = valueDietaryFiber / 28 * 100;
    // %DVを四捨五入
    valueDietaryFiberDV = Math.round(valueDietaryFiberDV);

    if (valueDietaryFiber < 1) {
        // 1未満
        valueDietaryFiber = "less than 1";
    } else {
        // 1刻みで丸める
        valueDietaryFiber = Math.round(valueDietaryFiber);
    }
    // 栄養表示に出力
    document.getElementById("dietaryFiber1").textContent = valueDietaryFiber;
    // %DVに出力
    document.getElementById("dietaryFiberDV").textContent = valueDietaryFiberDV;

    // ■ 総糖類 Total Sugars
    // 値を取得
    let valueTotalSugars = document.form.totalSugars.value * servingSizePercent;

    if (valueTotalSugars < 1) {
        // 1未満
        valueTotalSugars = "less than 1";
    } else {
        // 1刻みで丸める
        valueTotalSugars = Math.round(valueTotalSugars);
    }
    // 栄養表示に出力
    document.getElementById("totalSugars1").textContent = valueTotalSugars;

    // ■ 添加糖類 Total Sugars
    // 値を取得
    let valueAddedSugars = document.form.addedSugars.value * servingSizePercent;
    // %DVを計算 DV=50
    let valueAddedSugarsDV = valueAddedSugars / 50 * 100;
    // %DVを四捨五入
    valueAddedSugarsDV = Math.round(valueAddedSugarsDV);

    // 1刻みで丸める
    valueAddedSugars = Math.round(valueAddedSugars);

    // 栄養表示に出力
    document.getElementById("addedSugars1").textContent = valueAddedSugars;
    // %DVに出力
    document.getElementById("addedSugarsDV").textContent = valueAddedSugarsDV;

    // ■ たんぱく質 Protein
    // 値を取得
    let valueProtein = document.form.protein.value * servingSizePercent;

    if (valueProtein < 1) {
        // 1未満
        valueProtein = "less than 1";
    } else {
        // 1刻みで丸める
        valueProtein = Math.round(valueProtein);
    }
    // 栄養表示に出力
    document.getElementById("protein1").textContent = valueProtein;

    // ■ ビタミンD vitaminD
    // 値を取得
    let valueVitaminD = document.form.vitaminD.value * servingSizePercent;
    // %DVを計算 DV=20
    let valueVitaminDDV = valueVitaminD / 20 * 100;
    if (valueVitaminDDV < 2) {
        valueVitaminDDV = "0";
    } else if (valueVitaminDDV <= 10) {
        //2刻みで丸める
        valueVitaminDDV = Math.round(valueVitaminDDV / 2) * 2;
    } else if (valueVitaminDDV <= 50) {
        //5刻みで丸める
        valueVitaminDDV = Math.round(valueVitaminDDV * 2 / 10) * 10 / 2;
    } else {
        valueVitaminDDV = Math.round(valueVitaminDDV / 10) * 10;
    }
    // 0.1刻みで丸める
    valueVitaminD = Math.round(valueVitaminD * 10) / 10;

    // 栄養表示に出力
    document.getElementById("vitaminD1").textContent = valueVitaminD;
    // %DVに出力
    document.getElementById("vitaminDDV").textContent = valueVitaminDDV;

    // ■ カルシウム Calcium
    // 値を取得
    let valueCalcium = document.form.calcium.value * servingSizePercent;
    // %DVを計算 DV=1300
    let valueCalciumDV = valueCalcium / 1300 * 100;
    if (valueCalciumDV < 2) {
        valueCalciumDV = "0";
    } else if (valueCalciumDV <= 10) {
        //2刻みで丸める
        valueCalciumDV = Math.round(valueCalciumDV / 2) * 2;
    } else if (valueCalciumDV <= 50) {
        //5刻みで丸める
        valueCalciumDV = Math.round(valueCalciumDV * 2 / 10) * 10 / 2;
    } else {
        valueCalciumDV = Math.round(valueCalciumDV / 10) * 10;
    }

    // 10刻みで丸める
    valueCalcium = Math.round(valueCalcium / 10) * 10;

    // 栄養表示に出力
    document.getElementById("calcium1").textContent = valueCalcium;
    // %DVに出力
    document.getElementById("calciumDV").textContent = valueCalciumDV;

    // ■ 鉄分 Iron
    // 値を取得
    let valueIron = document.form.iron.value * servingSizePercent;
    // %DVを計算 DV=18
    let valueIronDV = valueIron / 18 * 100;
    if (valueIronDV < 2) {
        valueIronDV = "0";
    } else if (valueIronDV <= 10) {
        //2刻みで丸める
        valueIronDV = Math.round(valueIronDV / 2) * 2;
    } else if (valueIronDV <= 50) {
        //5刻みで丸める
        valueIronDV = Math.round(valueIronDV * 2 / 10) * 10 / 2;
    } else {
        valueIronDV = Math.round(valueIronDV / 10) * 10;
    }

    // 0.1刻みで丸める
    valueIron = Math.round(valueIron * 10) / 10;

    // 栄養表示に出力
    document.getElementById("iron1").textContent = valueIron;
    // %DVに出力
    document.getElementById("ironDV").textContent = valueIronDV;

    // ■ カリウム Potassium
    // 値を取得
    let valuePotassium = document.form.potassium.value * servingSizePercent;
    // %DVを計算 DV=4700
    let valuePotassiumDV = valuePotassium / 4700 * 100;
    if (valuePotassiumDV < 2) {
        valuePotassiumDV = "0";
    } else if (valuePotassiumDV <= 10) {
        //2刻みで丸める
        valuePotassiumDV = Math.round(valuePotassiumDV / 2) * 2;
    } else if (valuePotassiumDV <= 50) {
        //5刻みで丸める
        valuePotassiumDV = Math.round(valuePotassiumDV * 2 / 10) * 10 / 2;
    } else {
        valuePotassiumDV = Math.round(valuePotassiumDV / 10) * 10;
    }

    // 10刻みで丸める
    valuePotassium = Math.round(valuePotassium / 10) * 10;

    // 栄養表示に出力
    document.getElementById("potassium1").textContent = valuePotassium;
    // %DVに出力
    document.getElementById("potassiumDV").textContent = valuePotassiumDV;
}

function clickBtn2() {
    _delete_child_element('result');

    function _delete_child_element(id_name) {
        var dom_obj = document.getElementById(id_name);
        while (dom_obj) dom_obj.removeChild(dom_obj.firstChild);
    }
}
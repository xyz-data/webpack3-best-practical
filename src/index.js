"use-strict";

// js modules
import { Module1 as M1 } from "./modules/module01";
import { Module2 as M2 } from "./modules/module02";

// css modules
import "./sass/css01.scss";
import "./sass/css02.scss";



const AppModule = () => {
    console.log(`Waiting, initializing the App ...`);
    M1();
    M2();
};


document.addEventListener(`DOMContentLoaded`, () => {
    AppModule();
    setTimeout(() => {
        // STOCK_F9_FV.Modules.companyNews.init(`http://10.1.5.202/webservice/fastview/stock/news/600570.SH`);
    }, 0);
});


const obj = {a: 1, b: 2, c: 3};

let arr = [1, ...obj];


"use strict"
const readline = require('readline')
const fs = require("fs");

const r1 = readline.createInterface({
    input: fs.createReadStream("relations.csv", "utf-8")
});

const result ={};
let i =1;
let years=[];
let provinces=[];
r1.on('line', (line) => {
    if(i===1){
      years=  line.split(',');
    }else {
        const list =line.split(',');
        const province = list[0].trim();
        provinces.push(province);
        const topicList = list.slice(1);
        topicList.forEach((element,index )=> {
            if(!element) return;
            result[`${years[`${index+1}`]}_${province}`]=`${years[`${index+1}`]}_${element}_语文_`
        });
    }
    i += 1;
    if(i>32){
        fs.writeFile('input.txt', JSON.stringify(result),  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("数据写入成功！");
            console.log(result);
            console.log(provinces);
            console.log(years);
            console.log("--------我是分割线-------------")  
         });
    }
});
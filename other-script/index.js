const fs=require('fs');
const path = require('path');
const sharp = require('sharp');

// sharp('111.png')
//   .extract({ left: 0, top: 200, width: 750, height: 1108 })
//   .toFile('output.png', function(err) {
//     // output.jpg is a 300 pixels wide and 200 pixels high image
//     // containing a scaled and cropped version of input.jpg
//   });
//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = path.resolve('../../bee/gaokao/static/topic');

//调用文件遍历方法
fileDisplay(filePath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath,filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror,stats){
                    if(eror){
                      console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                           sharp(filedir)
                            .extract({ left: 0, top: 126, width: 750, height: 1208 })
                            .toFile(__dirname+`/out/${filename}`, function(err) {
                              console.log(filedir,err)
                              // output.jpg is a 300 pixels wide and 200 pixels high image
                              // containing a scaled and cropped version of input.jpg
                            });
                        }
                        if(isDir){
                              fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}

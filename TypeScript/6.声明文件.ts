// 当使用第三方库时，我们需要引用它的声明文件。
declare var jQuery: (string) => any;
jQuery('#foo');

// declare 定义的类型只会用于编译时的检查，编译结果中会被删除。

// 通常我们会把类型声明放到一个单独的文件中，这就是声明文件
// 我们约定声明文件以  xxx.d.ts 为后缀，如jQuery.d.ts。
// 然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：

/// <reference path="./jQuery.d.ts" />
jQuery('#foo');

// 更推荐的是使用工具统一管理第三方库的声明文件。
// 社区已经有多种方式引入声明文件，不过 TypeScript2.0 推荐使用 @types 来管理。
// @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举
// 例：
// npm install @types/jquery --save-dev
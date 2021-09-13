/*
 * @Description:
 * @Version: 2.0
 * @Autor: hwang
 * @Date: 2021-08-16 14:28:31
 * @LastEditors: hwang
 * @LastEditTime: 2021-09-02 09:13:29
 */
export { default as Foo } from './Foo';
var cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: 'oO',
    T: 'U ',
  }),
);

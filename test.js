import { parse, init } from './dist/lexer.js';
const source = `export type B = {} 
export interface A {
    a: string;
  }`;
async function run() {
    await init;
    const [imports, exports] = parse(source);
    console.log(imports, exports);
}
run()
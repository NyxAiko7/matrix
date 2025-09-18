const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

async function main() {
while(true){
   let a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44;
   let d = await prompt("Ввидите матрицу(2x2 and 3x3 and 4x4):")
   let c , r, g
   if(d == "3x3"){
    a11 = Number(await prompt('Введите первое число: '));
    a12 = Number(await prompt('Введите второе число: '));
    a13 = Number(await prompt('Введите третье число: '));
    a21 = Number(await prompt('Введите четвертое число: '));
    a22 = Number(await prompt('Введите пятое число: '));
    a23 = Number(await prompt('Введите шестое число: '));
    a31 = Number(await prompt('Введите седьмое число: '));
    a32 = Number(await prompt('Введите восьмое число: '));
    a33 = Number(await prompt('Введите девяторе число: '));
    
    console.table([
      [a11, a12, a13],
      [a21, a22, a23],
      [a31, a32, a33]
   ])
   }
   
   if(d == "2x2"){
      a11 = Number(await prompt('Введите первое число: '));
      a12 = Number(await prompt('Введите второе число: '));
      a21 = Number(await prompt('Введите третье число: '));
      a22 = Number(await prompt('Введите четвертое число: '))

      console.table([
         [a11, a12],
         [a21, a22]
      ])
   }

   if(d == "4x4"){
      a11 = Number(await prompt('Введите первое число: '));
      a12 = Number(await prompt('Введите второе число: '));
      a13 = Number(await prompt('Введите третие число: '));
      a14 = Number(await prompt('Введите четвертое число: '));
      a21 = Number(await prompt('Введите пятое число: '));
      a22 = Number(await prompt('Введите шестое число: '));
      a23 = Number(await prompt('Введите седбмое число: '));
      a24 = Number(await prompt('Введите восьмое число: '));
      a31 = Number(await prompt('Введите деафтоя число: '));
      a32 = Number(await prompt('Введите десятоее число: '));
      a33 = Number(await prompt('Введите одинацитое число: '));
      a34 = Number(await prompt('Введите двинадцатое число: '));
      a41 = Number(await prompt('Введите тринацатое число: '));
      a42 = Number(await prompt('Введите четырнацитое число: '));
      a43 = Number(await prompt('Введите пятнацитое число: '));
      a44 = Number(await prompt('Введите шестнацитое число: '));

      console.table([
         [a11, a12, a13, a14],
         [a21, a22, a23, a24],
         [a31, a32, a33, a34],
         [a41, a42, a43, a44]
      ])
   }
   
   if(d == "3x3"){
      c = await prompt('Введите операцию: Только решение  , Только цифры , a1 , a2 , a3 , b1 , b2 , b3 , c1 , c2 , c3 :');
   }else if(d == "2x2"){
      r = await prompt('Введите опирацию: 2x2:')
   }else if(d == "4x4"){
      g = await prompt('Введите column1_A(B,C,D):')
   }

   function a (){
    const one = a11 * a22 * a33
    const two = a12 * a23 * a31
    const three = a13 * a21 * a32
    const foure = a12 * a21 * a33
    const fafe = a11 * a23 * a32
    const six = a13 * a22 * a31
    return one + two + three - foure - fafe - six

   };
   
    function b (){
    const one = a11 * a22 * a33
    const two = a12 * a23 * a31
    const three = a13 * a21 * a32
    const foure = a12 * a21 * a33
    const fafe = a11 * a23 * a32
    const six = a13 * a22 * a31
        return [one , two , three , foure , fafe , six]
    };
    const result = b()
   function column3(){
   if (c == "31"){
   const one1 = (a21 * a32) - (a22 * a31)
   return one1;
   }
   if (c == "32"){
      const twone = (a11 * a32) - (a12 * a31)
      return twone;
   }
   if (c == "33"){
      const free = (a11 * a22) - (a12 * a21)
      return free
   }
   }
   function column1(){
   if (c == "11"){
      const one11 = (a22 * a33) - (a23 * a32)
      return one11;
   }
   if (c == "12"){
      const twore = (a12 * a23) - (a13 * a22)
      return twore;
   }
   if (c == "13"){
      const fr = (a12 * a23) - (a13 * a22) 
      return fr;
   }
   }
   function column2(){
   if (c == "21"){
      const ono = (a21 * a33) - (a23 * a31 )
      return ono 
   }
   if (c == "22"){
      const as = (a11 * a33) - (a13 * a31)
      return as
   }
   if (c == "23"){
      const ye = (a11 * a23) - (a13 * a21)
      return ye
   }
   }
   function line(){
   if (c == "a1"){
      const e = (a22 * a33) - (a23 * a32)
      return e
   }
   if (c == "a2"){
      const ee = (a21 * a33) - (a23 * a31)
      return ee
   }
   if (c == "a3"){
      const eee = (a21 * a32) - (a22 * a31)
      return eee
   }
   }
   function line2(){
   if (c == "b1"){
      const b = (a22 * a33) - (a23 * a32)
      return b
   }
   if (c == "b2"){
      const bb = (a11 * a33) - (a13 * a31)
      return bb
   }
   if (c == "b3"){
      const bbb = (a11 * a32) - (a12 * a31)
      return bbb
   }
}
   function line3(){
   if (c == "c1"){
      const w = (a12 * a23) - (a13 * a22)
      return w
   }
   if (c == "c2"){
      const ww = (a11 * a23) - (a13 * a21)
      return ww
   }
   if (c == "c3"){
      const www = (a11 * a22) - (a12 * a21)
      return www
   }
}
   function m2x2(a11 , a12 , a21 , a22){
      if(r == "2x2"){
         const y = (a11 * a22) - (a12 * a21);
         return y;
      }

   }

   function  column4x4_1(){
      if(g == "column1_A"){
         const h = ((a22 * a33 * a44) + (a23 * a34 * a42) + (a32 * a43 * a24)) - ((a42 * a33 * a24) - (a32 * a23 * a44) - (a43 * a34 * a22))
         return h;
      }
      if(g == "column1_B"){
         const hh = -(((a12 * a33 * a44) + (a13 * a34 * a42) + (a32 * a43 * a14)) - ((a42 * a33 * a14) - (a32 * a13 * a44) - (a43 * a34 * a12)))
         return hh;
      }
      if(g == "column1_C"){
         const hhh = ((a12 * a23 * a44) + (a13 * a24 * a42) + (a22 * a43 * a14)) - ((a42 * a23 * a14) - (a22 * a13 * a44) - (a43 * a24 * a12))
         return hhh;
      }
      if(g == "column1_D"){
         const hhhh = -(((a12 * a23 * a34) + (a13 * a24 * a32) + (a22 * a33 * a14)) - ((a32 * a23 * a14) - (a13 * a22 * a34) - (a24 * a33 * a12)))
         return hhhh;
      }
   }
   function column4x4_2(){
      if (g == "column2_A"){
         const b = -(((a21 * a33 * a44 ) + (a23 * a34 * a41) + (a31 * a43 * a24)) - ((a41 * a33 * a24) - (a31 * a23 * a44) - (a43 * a34 * a21)))
         return b;
      }
      if (g == "column2_B"){
         const bb = ((a11 * a33 * a44) + (a13 * a34 * a41) + (a31 * a43 * a14)) - ((a14 * a33 * a41) - (a13 * a31 * a44) - (a43 * a34 * a11))
         return bb;
      }
   }









   function Otvet3x3(){
      if(d == "3x3"){
         if (c == "Только решение"){
         console.log(`Ответ:${a()}`)
      }else if (c == "Только цифры"){
         console.table(result)
      }else if (["31" , "32" , "33"].includes(c)){
         console.log(`Ответ:${column3()}`)
      }else if (["11" , "12" , "13"].includes(c)){
         console.log(`Ответ:${column1()}`)
      }else if (["21" , "22" , "23"].includes(c)){
         console.log(`Ответ:${column2()}`)
      }else if (["a1" , "a2" , "a3"].includes(c)){
         console.log(`Ответ:${line()}`)
      }else if (["b1" , "b2" , "b3"].includes(c)){
         console.log(`Ответ:${line2()}`)
      }else if (["c1" , "c2" , "c3"].includes(c)){
         console.log(`Ответ:${line3()}`)
      }else {console.log("НЕВЕРНО")}
    }
   }
   
   function Otvet2x2(){
      if(r == "2x2"){
         console.log(`Решение: (${a11} * ${a22}) - (${a12} * ${a21}) = ${m2x2(a11 , a12 , a21 , a22)}`)
      }else{console.log("Неверное операция")}
   }
   
   function Otvet4x4(){
      if(["column1_A" , "column1_B" , "column1_C" , "column1_D"].includes(g)){
         console.log(`Ответ:${column4x4_1()}`)
      }else if (["column2_A", "column2_B"].includes(g)){
         console.log(`Ответ:${column4x4_2()}`)
      }
   
   }  
      Otvet2x2()
      Otvet3x3()
      Otvet4x4()
   
      const again = await prompt('\nХотите продолжить? (y/n): ');
    if (again.toLowerCase() !== 'y') break;

   }
   rl.close();
}
   main()


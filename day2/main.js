 //Task 1 
 let radius = prompt("what is the value of your circle radius:");
 let area = Math.PI * radius * radius;
 alert('total area of circle is ' + radius + ' is ' + area.toFixed(2));
 
 //----------------------------------
 
 let value = prompt("what's the value you want to calculate its square root : ");
 let sqrt = Math.sqrt(value);
 alert('The square root of ' + value + ' is ' + sqrt.toFixed(2));
 
 //----------------------------------
 
 let degrees = prompt("Enter an angle in degrees:");
 let radians = degrees * (Math.PI / 180);
 let cosValue = Math.cos(radians);
 alert('The cosine of ' + degrees + ' degrees is ' + cosValue.toFixed(2));
 
 //------------------------------------
 //Task 2
 let name = prompt('enter the string ');
 let character = prompt('enter the character you want to search for :');
 let count = 0;
 for (let i = 0; i < name.length; i++) {
     if (name.charAt(i) === character) count++;
 }
 alert('the number of the charcter in the string is : ' + count);
 
 //---------------------------------------
 
 //task3
 let x = 1.23456;
 alert(x.toLocaleString("ar-EG"));
 alert(x.toLocaleString("bn-IN"));
 alert(x.toLocaleString("zh-HK"));
 alert(x.toLocaleString("en-CA"));
 alert(x.toLocaleString("es-DO"));
 alert(x.toLocaleString("zgh-MA"));
 alert(x.toLocaleString("nl-BE"));
 alert(x.toLocaleString("ar-EG"));
 alert(x.toLocaleString("ar-MA"));
 alert(x.toLocaleString("ko-KR"));
 alert(x.toLocaleString("pt-BR"));
 alert(x.toLocaleString("de-DE"));
 alert(x.toLocaleString("it-IT"));
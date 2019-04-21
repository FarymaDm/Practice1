
cols = 9;
rows = 9;
document.write(' <table border=2, cellpadding=10, cellspacing=0, width="70%">');
for (i = 1; i <= cols; i++) 
    {
        document.write("<tr>");
        for (k = 1; k <= rows; k++)
         {
 
             if (i == k) {
                 document.write('<td style="background-color:green">');
                 document.write(i * k);
                
             }
             else
                 if (i > k) {
                     document.write('<td style="background-color:skyblue">');
                     document.write(i * k);
                     
 
                 }
                 else {
                     document.write('<td style="background-color:gold">');
                     document.write(i * k);
                    
                 }
 
                 document.write("</td>");
         }
   
        document.write("</tr>");
    }
document.write("</table>");
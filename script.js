    var myrandom=Math.round(Math.random()*4)
    var link1="https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg"
    var link2="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NjYxNDYyNDc4NDY0Mjg3/wolfgang-amadeus-mozart-circa-1780-painted-by2-johann-nepomuk-della-croce-wolfgang-amadeus-mozart-27-january-1756---5-december-1791-prolific-and-influential-austrian-composer-of-the-classical-era-phot.jpg"
    var link3="https://postmedialeaderpost2.files.wordpress.com/2019/03/franz-schubert.jpg"
    var link4="https://media.wnyc.org/i/1008/872/l/80/1/bach.png"
    var link5="https://cdn.radiofrance.fr/s3/cruiser-production/2018/05/8c1c5c7d-bc2b-41a3-aa96-903d49f013dc/600x337_portrat_des_komponisten_pjotr_i._tschaikowski_1840-1893.jpg"
   

function random(){
    var myrandom=Math.round(Math.random()*4)
    var link1="https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg"
    var link2="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NjYxNDYyNDc4NDY0Mjg3/wolfgang-amadeus-mozart-circa-1780-painted-by2-johann-nepomuk-della-croce-wolfgang-amadeus-mozart-27-january-1756---5-december-1791-prolific-and-influential-austrian-composer-of-the-classical-era-phot.jpg"
    var link3="https://postmedialeaderpost2.files.wordpress.com/2019/03/franz-schubert.jpg"
    var link4="https://media.wnyc.org/i/1008/872/l/80/1/bach.png"
    var link5="https://cdn.radiofrance.fr/s3/cruiser-production/2018/05/8c1c5c7d-bc2b-41a3-aa96-903d49f013dc/600x337_portrat_des_komponisten_pjotr_i._tschaikowski_1840-1893.jpg"
   
    if (myrandom==0)
        { var audio1 = document.getElementById("audio1");
         audio1.play();
         alert("Beethoven here");
         window.location=link1
        
        
        }
    else if (myrandom==1)
       { var audio2=document.getElementById("audio2");
        audio2.play();
        alert("It is Mozart");
           window.location=link2
           
        }
    else if (myrandom==2)
       { 
        var audio3=document.getElementById("audio3");
        audio3.play();
        alert("Shubert");
           window.location=link3
         
        }
    else if (myrandom==3)
       { 
        var audio4=document.getElementById("audio4");
        audio4.play();
        alert("Bach");
        window.location=link4
           
        }
    else if (myrandom==4)
       { 
        var audio5=document.getElementById("audio5");   
        audio5.play();
        alert("Tchaikovsky"); 
        window.location=link5
        
         }

}

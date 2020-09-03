function stop() {
   audio1.pause();
   audio1.currentTime = 0;
   audio2.pause();
   audio2.currentTime = 0;
   audio3.pause();
   audio3.currentTime = 0;
   audio4.pause();
   audio4.currentTime = 0;
   audio5.pause();
   audio5.currentTime = 0;
   }

function random() {
    var myrandom=Math.round(Math.random()*4)
   
    if (myrandom==0)
        { 
         
         
         stop();
         var audio1 = document.getElementById("audio1");
         audio1.play();
         document.getElementById("musician").innerHTML = "Beethoven";
         document.getElementById("songname").innerHTML = "Moonlight 1st_movement"
         document.getElementById("mainpic").src = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg";
         
         
          }

    else if (myrandom==1)
       { 
         stop();
        var audio2=document.getElementById("audio2");
        audio2.play();
        document.getElementById("musician").innerHTML = "Mozart";
        document.getElementById("songname").innerHTML = ":Eine kleine Nachtmusik-1_Allegro"
        document.getElementById("mainpic").src = "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NjYxNDYyNDc4NDY0Mjg3/wolfgang-amadeus-mozart-circa-1780-painted-by2-johann-nepomuk-della-croce-wolfgang-amadeus-mozart-27-january-1756---5-december-1791-prolific-and-influential-austrian-composer-of-the-classical-era-phot.jpg";
        
           
        }
    else if (myrandom==2)
       { 
         stop();
        var audio3=document.getElementById("audio3");
        audio3.play();
        document.getElementById("musician").innerHTML = "Schubert";
        document.getElementById("songname").innerHTML = "Piano Sonatas-7 Scherzo"
        document.getElementById("mainpic").src = "https://postmedialeaderpost2.files.wordpress.com/2019/03/franz-schubert.jpg";
        
        }
    else if (myrandom==3)
       { 
         stop();
        var audio4=document.getElementById("audio4");
        audio4.play();
        document.getElementById("musician").innerHTML = "Bach";
        document.getElementById("songname").innerHTML = "Sinfonien 15"
        document.getElementById("mainpic").src = "https://media.wnyc.org/i/1008/872/l/80/1/bach.png";
        
           
        }
    else if (myrandom==4)
       { 
         stop();
        var audio5=document.getElementById("audio5");   
        audio5.play();
        document.getElementById("musician").innerHTML = "Tchaikovsky";
        document.getElementById("songname").innerHTML = "the Seasons:December"
        document.getElementById("mainpic").src = "https://cdn.radiofrance.fr/s3/cruiser-production/2018/05/8c1c5c7d-bc2b-41a3-aa96-903d49f013dc/600x337_portrat_des_komponisten_pjotr_i._tschaikowski_1840-1893.jpg";
        
      }

}

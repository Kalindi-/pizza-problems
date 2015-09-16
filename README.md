
# How to run the pizza.html application

Click on the pizza.html to open the page.
Scroll up an down to see the pizzas dance!
Click on the slide to decrease the pizzas to purchase!

---

### source code:
https://github.com/Kalindi-/pizza-problems-source

------

Here is what I did for my
# Project 4

## web optimisations

removed media querry in print css
added media="print" to print.css line in index.html

put google fonts at the end of html (before closing body tag)

have no clue what works what no because i am getting scores between 20-60 and the top problem is reduce server time. (10-24 seconds)

tried installing grunt for hours, getting errors everywhere, decided to go down the doing things by hand road

also move to cafe for some good internet

used imageoptim for the images

minified the css
put it into the html.


tried to use pizza.png img intead of pizzeria.jpg. because much smaller, but results not satisfactory so reverted (shouldn't this work, and if not why not?)

put all the script stuff at the bottom of file.

minified html

compressed images with online tool

minified html, with more awesome tool saved 200 characters more

tryied with gzip, but didn't know how to use the files that came out.

resoults ok. 90+, sometimes below sometimes almost 99!

so thats cool i guess : )

---

haha back on my internet connection score of 49 and 54 : )

----

GRUNT - then i decided to try to tackle grunt again and so I made another folder, where i used the source code to try a few things. I was a bit succesful and a bit not. Did not manage 'watch' nor 'sass', but managed some 'concat', 'processhtml', 'uglify' and some img stuff. For this submission, I decided to use some img grunt optimisations, and maybe next time more. So I redid the setup in project4 too. Tips very welcome!
Good reading materials also welcome!

----
----
----


## pizza.html

So I read somewehre that problems lay in the for loops, and I found the for loops in the with the ctrl+f "for"

In changePizzaSizes(size)  function

---- time 132ms

I took out of the loop the dx and newwidth variable makings - they are the same for each pizza

---- time down 8ms

I also created a new variable to contain all the info for one pizza, that is the same for all the pizzas, so that I do not need to querry throgh the file, changes in for loop access this variable.

---- time down to 1.2-1,9ms
from (

    var allpizzas = document.getElementsByClassName(".randomPizzaContainer")
    var scrollTopVar = document.body.scrollTop
    for (var i = 0; i < items.length; i++) {
        var phase = Math.sin((scrollTopVar / 1250) + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
    }

Took all the calls to the DOM out of the for loop. Made variables allpizzas and scrollTopVar, changed queryElement(?) to getElementsByClassNAme


made 32 pizzas instead of 200

 ----time of last 10 frames 0.3-0.5

wanted to take this out of the for loop:

    document.getElementById("movingPizzas1").appendChild(elem);

so i did this

    var movingPizzasDiv = document.getElementById("movingPizzas1")
    for (var i = 0; i < 32; i++) {
      (code code)
        movingPizzasDiv.appendChild(elem);
    }

 but i have the feeling it didnt do much. is this worth it?

 ---

Also I wonder if there is a way to get querySelector, is it also slow, if the querySelectorAll is slow

(found another querySelectorAll)
changed into getElementsByClassName.

---- time of last 10 frames 0.2-0.3

changed querySelector for getElementById

--- time to generate pizzas under one second
(reread this last sentence a while later and thought that would really be impressive: )


: )

____


made the amount of pizzas be calculated based on the size of the screen
tried using request animation
used translateX instead of style left

also by tip of reviewer I (if I understood correctly) am now not displaying any pizzas that are not visible.


tried around quite a bit, different things, forgot a bit what i did.
but changed pizza display.

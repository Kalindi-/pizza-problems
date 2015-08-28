

Here is what I did for my

# Project 4

## web optim

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


TODO
get grunt working
make a web worker



## pizza.html

So I read somewehre that problems lay in the for loops, and I foud the for loops in the with the ctrl+f "for"

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
changed into claddname.

----- now time last 10 frames 0.0something yo!

: )


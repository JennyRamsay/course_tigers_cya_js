# Warehouse Picker

We need an application to handle the picking of items from a warehouse distribution centre.

Our warehouse has three rows of racking (racks 'a, 'b', and 'c') located around a central loading bay where the fork-lift trucks manoeuvre - no pedestrians allowed!

Each row of racking has ten bays (numbered 1 to 10). The racks are arranged in a "U" shape, with the warehouse-pickers' entrance to the warehouse by rack 'a', bay '10', and the exit by rack 'b', bay '10'.

Here's an ASCII-art illustration to help visualize:

```
>     c1 c2 c3 c4 c5 c6 c7 c8 c9 c10
>
> a1    __________________________   b1
> a2   |                         |   b2 
> a3   |                         |   b3
> a4   | Loading bay...          |   b4
> a5   |                         |   b5
> a6   |                         |   b6
> a7   | Can't walk here.        |   b7
> a8   |                         |   b8
> a9   |                         |   b9
> a10  |                         |   b10
>
> >> entrance                     >> exit
```

Our inventory is distributed amongst the bays, in no particular order.

Product       | Bay
--------------|----
bath fizzers  | b7
blouse        | a3
bookmark      | a7
candy wrapper | c8
chalk         | c3
cookie jar    | b10
deodorant     | b9
drill press   | c2
face wash     | c6
glow stick    | a9
hanger        | a4
leg warmers   | c10
model car     | a8
nail filer    | b5
needle        | a1
paint brush   | c7
photo album   | b4
picture frame | b3
rubber band   | a10
rubber duck   | a5
rusty nail    | c1
sharpie       | b2
shoe lace     | c9
shovel        | a6
stop sign     | a2
thermometer   | c5
tyre swing    | b1
tissue box    | b8
tooth paste   | b6
word search   | c4

Your job is to produce an app that does two things:

Single bay

1)
  Given a bay, returns the item in that bay
  - given "b5", should return 'nail filer'
  
2)
  Given an item return the bay that it is in.
  - given "nail filer" should return "b5"

Multiple bays

3)
  Given a list of bays, list the items in those bays
  - given "b5, b10, and b6", determine that the products are "nail filer, cookie jar, and tooth paste", and they're five bays apart
  
4)
  Given a list of items find the bays.
  - given "shoe lace, rusty nail, leg warmers", determine that those items need to be collected from "c9, c1, and c10"

Further Tasks - not required

5) Given a list of bays, list the items in those bays, and calculate the distance from the two furthest apart bays. For instance:

  - given "b5, b10, and b6", determine that the products are "nail filer, cookie jar, and tooth paste", and they're five bays apart
  - given "b3, c7, c9 and a3", determine that the products are "picture frame, paint brush, shoe lace, and blouse", and they're 15 bays apart.)

6) Given a list of products, find the bays that need to be visited, and order them in the order they need to be visited from entrance to exit. For instance:

  - given "shoe lace, rusty nail, leg warmers", determine that those items need to be collected from "c1, c9, and c10"
  - given "hanger, deodorant, candy wrapper, rubber band", determine that those items need to be collected from "a10, a4, c8, and b9"

Think about what we have been doing in class, writing our desired behavoiur first. Making it fail then writing the functionality.  See if you can follow this methodology.  Ultimately, however, try to get it working!






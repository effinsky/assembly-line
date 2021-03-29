## Assembly Line notes

Moved devleopment to my own editor and environment to make it more convenient and streamlined. used create-react-app with same deps as here, copied 1:1 from the package.json file here. did only functional, manual testing on the app there and it worked ok even though the code had trouble running on the Qualify platform. Pushed the code to a Github repo and to Netlify for demoing (please see links at the bottom of this file).

 Implemented a simple form for adding items.
 
 Additionally could make it so that the input field for adding items has focus on load with a ref on it and a ref.current.focus() call. 

Not sure about required behavior on add of duplicate items to the list, but  implemented an alert on such attempts, followed by no add.

Moved the stage names into a separate json file to make it clear we can set stage names and no. of stages dynamically. We could even do that at runtime, perhaps make it possible for the user to input their stage names from the UI as well. Perhaps add/remove not only items contained in the stages but the stages themselves. Maybe we could differentiate among privileges and have admin roles be able to manipulate stages and user roles manipulate only items for preset stages. We could also have functionality for saving, storing and loading stage presets.

I hope to have followed the functional and naming requirements. Apologies for the too many comments in the code--they're there to demonstrate some moment-by-moment understanding.

### NETLIFY
https://react-assembly-line-demo-adi.netlify.app/

### GITHUB
https://github.com/adiforka/assembly-line
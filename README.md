# personal-log

This is a personal project of logging highlights from my life. At the moment, it only contains events from 2019 to the present, as I'm still currently compiling older photos for older events. The primary purpose of this project is to practice Astro as a framework and experiment with CMS using Sanity Studio. I hope you enjoy!

----------------------------------------------------------------

## Personal Takeaways
- Astro works like a JavaScript framework and vanilla JavaScript combined, which offers flexibility when developing websites. Note: not web apps. Frameworks like Vue and React are still better for more dynamic web applications.
- Sanity is an excellent tool if every page has the same amount of content regarding image fields since it will return "404" if specific areas are not filled in instead of ignoring it.
- Although the code work, I'll need some time to fully understand how the useSanityClient() and other function works for integrating it with Astro.
- When using Sanity to loop through all the posts to create a linked entry point on the index page, the whole collection will work as a single element rather than separate.
- The Layout tag is set as default for Astro to recognize it as a template. If a different naming system is used, it will change it to components, which the slot tag will no longer work.
- I'm still trying to see the best way to write CSS classes, but making a style sheet for color and typography and creating a set of classes for them, like Tailwind, makes the development experiences faster and the code easier to read.
- Local storage and HTML custom attributes are handy when setting up light and dark themes and maintaining the states across pages.
- When setting up a CMS structure using headless CMS platforms like Sanity, if there's an unknown amount of images, use the block text type instead of images, as the query will return an error of null if the fields are empty.
- To manipulate the hover state style of children objects, we don't always need to rely on JavaScript, but simple .parent:hover > .child can be applied as a selector to modify the style.

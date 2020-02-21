# AeronautIQa: Website of independent software development company
Code Institute - First Milestone Project: User-Centric Frontend Development 

This website was developed with a view to present independent software development company AeronautIQa to its potential customers. The website highlights that AeronautiQa's business activities are aimed at the field of civil aviation and presents six major areas of its expertise. The website also include a section listing sample of references from its existing customers. With a view to increase potential market size, website has two language versions, English and Slovak.


## Demo
A live demo of the website has been developed  [here](https://milan-stefanik.github.io/project1-aeronautiqa/).

![Responsive Web Demo](https://github.com/milan-stefanik/project1-aeronautiqa/raw/master/assets/images/demo.gif "Responsive Web Demo")

Responsive Web Demo GIF image was recorded using [Am I Responsive?](http://ami.responsivedesign.is) website. 


## UX

### User stories

Due to character of AeronautIQa's business, majority of contracts is won by direct response to public call for tenders. The main goal of the website is to support bidding activity and provide secondary marketing channel.

A potential customer is mainly interested in AeronatIQa's area of expertise and references from the current and past customers. The website provide all this information presented in a logical manner. The website also allows potential customers to contact AeronautIQa directly.

Presentation of Expertise:

![Expertise](https://github.com/milan-stefanik/project1-aeronautiqa/raw/master/assets/images/expertise.jpg "Expertise Demo")

References from existing customers:

![Customer References](https://github.com/milan-stefanik/project1-aeronautiqa/raw/master/assets/images/customers.jpg "Customer References Demo")

### Strategy
Although the website will be mainly viewed on a computer screens, website has been designed while keeping mobile devices in mind. Main goal is to provide potential customers with necessary information through simple and user-friendly interface.

### Scope
To provide potential customers with information on company's area of business, its expertise and existing customer's references.  

### Structure
Website is logically structured in 4 sections:
* Home - defining area of business
* Expertise - providing information on company's expertise
* Customers - who are company's customers including selection of customer references
* Contact - simple contact form

### Skeleton
[Website wireframe](https://github.com/milan-stefanik/project1-aeronautiqa/raw/master/assets/wireframes/wireframe.pdf)

### Surface
Greyscale color scheme with orange details.

## Technologies
1. HTML
2. CSS
3. Bootstrap (4.4.1)
4. Minor use of JavaScrip - Parallax library [Simple Parallax Scrolling parallax.js](https://pixelcog.github.io/parallax.js/), from [Stackoverflow](https://stackoverflow.com/questions/55360887/navbar-not-functioning-like-its-supposed-to) from [Code Institute Example Project](https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive). 


## Features
* Bootstrap Scrollspy - updating navigation bar based on scroll position to indicate which link is currently active
* Parallax effect of home background image and contact background image
* Two language versions
* Responsive language bar - changes position in navigation bar depending on the screen width
* Navigation bar - change from transparent to semi transparent dark grey after scroll
* Simple animation (smooth font re-coloring) in Home section of the website
* Customized hover effect in Expertise and Customers section 
* Bootstrap responsive navigation bar
* Bootstrap Modals - used in Expertise section
* Bootstrap Collapse - used in Reference section



## Testing

### Code validity
* HTML was tested via W3C Markup Validation Service
* CSS was tested via W3C CSS Validation Service

### User story
* Potential customer user story has been manually tested.
* Contact form functionality was tested manually. Contact form validates information before submission. All fields must be filled in to successfully submit the form. Form recognizes wrong format of e-mail address (i.e. missing @ sign) and prevents from submission.
* All website features have been manually tested.
* All external links will open in a new tab.

### Browsers and devices
* Responsivness has been tested using Inspect feature of Chrome and also on [Am I Responsive?](http://ami.responsivedesign.is) website.
* Website has been tested on iPhone XS plus. Other mobile devices screen sizes were emulated via Chrome Inspect feature.
* Website has been tested on multiple browsers (Chrome, Safari, Internet Explorer, Edge, Opera and FireFox). There were minor layout drawback on Internet Explorer and these were fixed.


## Deployment
The website is hosted on GitHub pages and can be accessed via this [link](https://milan-stefanik.github.io/project1-aeronautiqa/). Any changes to the master branch will be automatically reflected.


## Credits

### Content
All the website content was written by me. 

### Media
* Home page photo was downloaded from [Pexels](https://www.pexels.com/), a stock image library.
* Contact page image was downloaded from [Unsplash](https://unsplash.com/), a stock image library.
* All other photos were downloaded from [Shutterstock](https://www.shutterstock.com/), a stock image library.
Images were resized to fit the website design and to reduce website loading time.

### Acknowledgements
The navbar scroll effect JS code was copied from [Stack Overflow](https://stackoverflow.com/questions/55360887/navbar-not-functioning-like-its-supposed-to).

Parallax effect with respective JS library of home background image and contact background image was downloaded from [Simple Parallax Scrolling parallax.js](https://pixelcog.github.io/parallax.js/).

Bootstrap, Stack Overflow, W3C webpages were used as reference throught the entire development process.

**This website was developed for educational purposes only** 
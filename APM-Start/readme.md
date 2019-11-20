# Introduction

## Table of Contents

[Introduction](#Introduction)\
[Building and Serving Our Files](#Building-and-Serving-Our-Files)\
[Preparing for Lazy Loading](#Preparing-for-Lazy-Loading)\
[Lazy Loading](#Lazy-Loading)\
[canLoad Guard](#canLoad-Guard)\
[Preloading Feature Modules](#Preloading-Feature-Modules)\

---

### Introduction

<img src="./src/assets/images/10/01.jpg" width="75%">  
<img src="./src/assets/images/10/02.jpg" width="75%">  
<img src="./src/assets/images/10/03.jpg" width="75%">  
<img src="./src/assets/images/10/04.jpg" width="75%">  
<img src="./src/assets/images/10/05.jpg" width="75%">  
<img src="./src/assets/images/10/06.jpg" width="75%">  
<img src="./src/assets/images/10/07.jpg" width="75%">  
<img src="./src/assets/images/10/08.jpg" width="75%">  

---

### Building and Serving Our Files

The biggest file is main bundle.If we can reduce the size of that bundle, we can improve our application's startup time. That's the purpose of lazy loading. We break up our application into features so our main bundle only contains the startup code for our appliction. All of our other feature code is built into seprate modules tha are downloaded on demand or asynchronously in the background after the firs page is displayed.
<img src="./src/assets/images/10/09.jpg" width="75%">  

---

### Preparing for Lazy Loading

The feature area to lazy load must meet a few requirments.
<img src="./src/assets/images/10/10.jpg" width="75%">  

---

### Lazy Loading

<img src="./src/assets/images/10/11.jpg" width="75%">  
<img src="./src/assets/images/10/12.jpg" width="75%">  

---

### canLoad Guard

<img src="./src/assets/images/10/13.jpg" width="75%">  

---

### Preloading Feature Modules

<img src="./src/assets/images/10/14.jpg" width="75%">  
<img src="./src/assets/images/10/15.jpg" width="75%">  
<img src="./src/assets/images/10/16.jpg" width="75%">  

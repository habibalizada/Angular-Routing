# Introduction

## Table of Contents

[Introduction](#Introduction)\
[Grouping Routes](#Grouping-Routes)\
[Component-less Routes](#Component-less-Routes)\

---

### Introduction

<img src="./src/assets/images/06/01.jpg" width="75%">  
<img src="./src/assets/images/06/02.jpg" width="75%">  

Instead of defining product routs at the same level of the route hierarchy as the welcome, login, and other routes, we group our routes under a component-less parent rout.
<img src="./src/assets/images/06/03.jpg" width="75%">  
<img src="./src/assets/images/06/04.jpg" width="75%"> 

---

### Grouping Routes

<img src="./src/assets/images/06/05.jpg" width="75%">  

---

### Component-less Routes

Child routes are displayed in router-outlet defined within the parent component's template, so info tab component template appears within this child router-outlet.
<img src="./src/assets/images/06/06.jpg" width="75%">  
<img src="./src/assets/images/06/07.jpg" width="75%">  

To display our new child routes, we'd need a child router-outlet in the parent component's template, which in this case is the Product List page.
<img src="./src/assets/images/06/08.jpg" width="75%"> 
We don't want the product detail and product edit pages appearing within the Product List page.
To get around this we use a component-less route.
<img src="./src/assets/images/06/09.jpg" width="75%"> 
<img src="./src/assets/images/06/10.jpg" width="75%">  
<img src="./src/assets/images/06/11.jpg" width="75%">  

Now hierarchy looks like this:
<img src="./src/assets/images/06/12.jpg" width="75%">  
Since parent rout is component-less the child component templates appear in the primary router-outlet.
<img src="./src/assets/images/06/13.jpg" width="75%">  


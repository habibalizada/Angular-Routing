# Introduction

## Table of Contents

[Introduction](#Introduction)\
[Using Route Guards](#Using-Route-Guards)\
[canActivate Guard](#canActivate-Guard)\
[Sharing Data](#Sharing-Data)\

---

### Introduction

<img src="./src/assets/images/09/01.jpg" width="75%">  
<img src="./src/assets/images/09/02.jpg" width="75%">  
<img src="./src/assets/images/09/03.jpg" width="75%">  

---

### Using Route Guards

<img src="./src/assets/images/09/04.jpg" width="75%">  
<img src="./src/assets/images/09/05.jpg" width="75%">  
<img src="./src/assets/images/09/06.jpg" width="75%">  
<img src="./src/assets/images/09/07.jpg" width="75%">  
<img src="./src/assets/images/09/08.jpg" width="75%">  

---

### canActivate Guard

<img src="./src/assets/images/09/09.jpg" width="75%">  
<img src="./src/assets/images/09/10.jpg" width="75%">  
<img src="./src/assets/images/09/11.jpg" width="75%">  
<img src="./src/assets/images/09/12.jpg" width="75%">  

---

### Sharing Data

<img src="./src/assets/images/09/13.jpg" width="75%">  

---

### CanActivateChild Guard

<img src="./src/assets/images/09/14.jpg" width="75%">  
If the user is on the Product List page and 
<img src="./src/assets/images/09/15.jpg" width="75%">  
and clicks the Add Product menu option, only the child route changes.
<img src="./src/assets/images/09/16.jpg" width="75%">  
The canActivate guards on the parent route are not executed again, but any canActivatedChild guards are.
<img src="./src/assets/images/09/17.jpg" width="75%">  
Same thing for our tabs. Any canActivate guards on the parent product edit route are not re-executed
<img src="./src/assets/images/09/18.jpg" width="75%">  
when changing tabs, but any canActivatedChild guards are.
<img src="./src/assets/images/09/19.jpg" width="75%">  

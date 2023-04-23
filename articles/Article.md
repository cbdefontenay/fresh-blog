# Why learning **Deno** will change your life?

---

## title: My Blog Post published_at: 2023-04-23 author: John Doe snippet: This is an excerpt of my first blog post.

==========================================================================================

### What is Deno?

Deno is a JavaScript secure runtime. It was created by Ryan Dahl, the same man
who created Node.Js. He wanted a more secure way of doing things, and in a
conference, where he annonced the release of Deno, he explains what he regreted
about Node.Js, and why he created Deno. If you want to hear everything from him,
go check this video:
[link](https://www.youtube.com/watch?v=M3BM9TB-8yA&ab_channel=JSConf)

### Where to start?

Well, first things first. You need to have **Deno** installed on your PC/Laptop.
[link](https://deno.com/manual@v1.32.5/getting_started/installation)

##### Now let's create a simple server to get started.

##### Because one understand something better by doing thant just by reading some stuffs online.

Starting with Deno is actually quite simple. If we already know Node.Js, then
Deno will be quite easy for us.

Let's try it.

For this case, we will be using the "Oak" middleware framework for Deno. It will
help us create a nice application. It's also one of the best way to work with JS
Frameworks or Librairies, such as React or Vue.Js.

#### Where to start?

1. First we have to import a few things from "Oak":

```js
import { Application, Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
```

N.B: The @v12.1.0 is indicating the version of the "Application" function you
are trying to import. If you do not specify it, Deno will automatically use the
newest one. It's good practice to specify it, though.

We will need the "Router" later on in the application, to "route" through the
app and be able to make some **fetch()** request from the Frontend to grab some
datas or send them to the Backend.

2. We must now set the Application we imported, as the Router, for us to be able
   to use them in the app:

```js
const app = new Application();
const router = new Router();
const PORT = 8000;
```

Now we can use "app". That means we made a new instance of the "Application",
using the "new" key word and later on, we will add some stuffs in it. We are
also setting a **port**, where our backend will run:
[link](http://localhost:8000).

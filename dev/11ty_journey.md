---
title: "The Journey of an 11ty Blog"
date: 2025-10-09
layout: _post.html
tags: [dev, eleventy]
---

When I first started playing with **11ty**, I wasn't really trying to make a blog. I just wanted to make a portfolio site that wouldn't require me to use a complicated framework. Once I realized I could be writing simple `.md` files → push → done though, I instantly changed my mind. I'd been writing a journal on GitHub and this just seemed like the logical next step.

Of course though, it wasn't as simple as I thought.

### Phase One: Confusion
At first, the guide on [11ty.dev/docs](https://www.11ty.dev/docs/) looked easy, but once I added layouts, things started breaking. I spent a long time wondering why things weren't being recognized, turns out I had my `_layouts` folder labeled `layouts`, an issue that would become a trend for me.
I also struggled with HTML vs Liquid vs Nunjucks, which in the end had me just keeping things simple.

### Phase Two: Fighting Slugify
The real plot twist came when I tried to make a post in Japanese. A wonderful Japanese blog title looked great until slugify destroyed it. It actually worked in dev mode, but production was another story. Turns out 11ty's default slugify doesn't handle multibyte characters well.
Removing it fixed the issue, but then I had an ugly URL. I eventually realized Japanese posts would need to specify both a `slug:` and a `permalink:`. So for example, `日本語` would become `nihongo` for use in URLs.

### Phase Three: I Get It!
Once I had set up the basics it felt amazing to reuse two simple layouts and just apply them to every Markdown post I send through from here on out. Suddenly I had something that felt like mine. Designs aren't finished and full functionality isn't complete, but I can now show what I'm doing easily!

### What I Learned
- Don't force yourself to use big frameworks for everything. Sometimes it's better to keep things simple.
- Japanese characters can break all sorts of things.
- Naming conventions matter.

### What's Next
Now that it's running, I want to expand it. A proper projects section will likely be the next step, though I’m still deciding if that needs its own domain. An RSS feed and additional styling changes are also on the list.

This is all part of the process though... learning, breaking, learning again.

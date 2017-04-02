---
layout: default
title: Meditations on Tech | Interesting people in tech worldwide
tagline: Supporting tagline
---
{% include JB/setup %}

<h1 class="page-header text-center"><img src="img/logo.png" alt="user-image"></h1>

<img class="img-responsive visible-xs-block visible-sm-block hidden-md hidden-lg hidden-xl" src="img/sidebar-coffee.jpg" style="margin-top: 20px" />


<div class="home-page-posts animated fadeIn" style="border-top: rgb(245,245,245) solid 1px;">
  <footer class="split-footer">
      <a href="/">Latest Posts</a>
      <i class="link-spacer"></i>
      <a href="/about.html">About</a>
      <i class="link-spacer"></i>
      <a href="/readinglist.html">Reading List</a>
  </footer>
  {% for post in site.posts %}
    <article class="post">
      <div class="post-preview col-xs-10  no-gutter">
        <h2><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>

        <p>{{ post.tagline }}</p>

        <p class="meta">
            <a href="author.html">Elyssa Macfarlane</a> <i class="link-spacer"></i> <i class="fa fa-bookmark"></i> {{ post.date | date_to_string }}
        </p>
      </div>
    </article>
  {% endfor %}
</div>

---
layout: page
title: Elyssa Macfarlane | Media Manipulation
tagline: Supporting tagline
---
{% include JB/setup %}


<div class="sub-nav">
    <a href="/" class="select-posts active">Latest</a>
    <a href="/archive.html" class="select-categories">Archive</a>
</div>
<div class="home-page-posts animated fadeIn ">
  <h2 class="favorites">Recent Posts</h2>
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

---
layout: page
title: Elyssa Macfarlane | Media Manipulation
tagline: Supporting tagline
---
{% include JB/setup %}

{% for post in site.posts %}
  <article class="post">
    <div class="post-preview col-xs-10  no-gutter">
      <h2><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>

      <p>It was a cold December morning, as I sat out on my porch I decided today was the day. </p>

      <p class="meta">
          <a href="author.html">Elyssa Macfarlane</a> <i class="link-spacer"></i> <i class="fa fa-bookmark"></i> {{ post.date | date_to_string }}
      </p>
    </div>

    <div class="col-xs-2 no-gutter">
      <img src="img/profile-emac.jpg" class="user-icon" alt="user-image">
    </div>
  </article>
{% endfor %}

Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

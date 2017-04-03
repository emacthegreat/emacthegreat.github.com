---
layout: default
title: Meditations on Tech | Interesting people in tech worldwide
tagline: Supporting tagline
---
{% include JB/setup %}

<div class="ruby-page-wrap row clearfix is-masonry tn-container no-sidebar">
  <div class="ruby-content-wrap col-xs-12">
    <div class="main-content-inner">
    {% for post in site.posts %}
      <div class="grid-layout-outer col-sm-6 col-xs-12 masonry-el" data-cols="2">
        <article class="post-wrap grid-layout clearfix tn-animated-image tn-zoom tn-animation">
          <div class="thumb-wrap post-el">
            <a href="{{ BASE_PATH }}{{ post.url }}" rel="bookmark" title="{{ post.title }}">
              <img alt="{{ post.title }}" class="attachment-tn_medium_grid size-tn_medium_grid wp-post-image" height="267" width="400" sizes="(max-width: 400px) 100vw, 400px" src="{{ BASE_PATH }}img/posts/{{ post.image }}">
            </a>
          </div>
          <div class="post-inner grid-inner">
            <div class="category-name-wrap post-el">
              <span class="bullet first-bullet"></span><a class="cate-name" href="#" title="{{ post.category }}">{{ post.category }}</a><span class="bullet last-bullet"></span>
            </div>
            <h3 class="post-title post-el small"><a href="{{ BASE_PATH }}/{{ post.url }}" rel="bookmark" title="{{ post.title }}">{{ post.title }}</a></h3>
            <div class="meta-tags-wrap post-el">
              <span class="date-tags tags-el"><time datetime="{{ post.date | date_to_string }}">{{ post.date | date_to_string }}</time></span><span class="author-tags tags-el"><a href="#">Elyssa Macfarlane</a></span>
            </div>
          </div>
          <div class="excerpt post-el">
            <p>{{ post.tagline }}</p>
          </div>
          <div class="read-more-wrap post-el">
            <a href="{{ BASE_PATH }}{{ post.url }}" rel="bookmark" title="{{ post.title }}">continue reading</a>
          </div>
          <div class="post-footer">
            <div class="post-format-wrap">
              <span class="post-format"><i class="fa fa-file-text"></i></span>
            </div>
          </div>
        </article>
      </div>
    {% endfor %}
    </div>
  </div>
</div>

---
layout: default
title: Research
permalink: /research/
description: Research
internal_id: research
---

# Research

## Interests

- **Capital Markets**
- **Financial Stability**
- **Machine Learning**

<h2 id="publications">Publications</h2>

{%- for article in site.data.articles.publications -%}
<div class="publications">
  <div class="pub-row">
    <div class="pub-teaser">
      <span class="badge">{{ article.badge }}</span>
      <picture>
        <source srcset="{{ site.baseurl }}/assets/files/articles/{{ article.id }}/teaser.{{ article.teaser_file_extension }}" type="image/{{ article.teaser_file_extension }}">
        <source srcset="{{ site.baseurl }}/assets/files/articles/{{ article.id }}/teaser.webp" type="image/webp">
        <img src="{{ site.baseurl }}/assets/files/articles/{{ article.id }}/teaser.webp" alt="Teaser image for article {{ article.title }}" >
      </picture>
    </div>
    <div class="pub-details">
      <ol>
        <li class="title"><a href="{{ article.url }}" target="_blank" rel="noopener">{{ article.title }}</a></li>
        {%- if article.coauthors -%}
        <li class="author">with
          {% for coauthor in article.coauthors %}
          {%- if coauthor.url -%}
          <a href="{{ coauthor.url }}" target="_blank" rel="noopener">{{ coauthor.name }}</a>
          {%- else -%}
          {{ coauthor.name }}
          {%- endif -%}
          {% if forloop.last %}{% else %},{% endif %}
          {% endfor %}
        </li>
        {%- endif -%}
        <li class="periodical"><strong>{{ article.journal }}</strong>, {{ article.volume }}, pp {{ article.pages }}, {{ article.year }}</li>
        <li class="links">
          <ol>
            {%- if article.abstract -%}
            <li><a class="btn show-abstract" role="button">Abstract</a></li>
            {%- endif -%}
            {%- if article.wp -%}
            <li><a href="{{ article.wp }}" class="btn" role="button">WP</a></li>
            {%- endif -%}
            {% if article.presentation %}
            <li><a href="{{ site.baseurl }}/assets/files/articles/{{ article.id }}/{{ article.presentation }}" class="btn" role="button">Presentation</a></li>
            {% endif %}
            {%- if article.code -%}
            <li><a href="{{ article.code }}" class="btn" role="button">Code</a></li>
            {%- endif -%}
          </ol>
        </li>
      </ol>
    </div>
  </div>
  {%- if article.abstract -%}
  <div class="abstract-hidden">
    {{ article.abstract }}
  </div>
  {%- endif -%}
</div>
{%- endfor -%}


<h2 id="working-papers">Working Papers</h2>

{%- for article in site.data.articles.workingpapers -%}
<div class="publications">
  <div class="pub-row">
    <div class="pub-teaser">
      <span class="badge">{{ article.badge }}</span>
      <picture>
        <source srcset="{{ site.baseurl }}/assets/files/articles/{{ article.id }}/teaser.{{ article.teaser_file_extension }}" type="image/{{ article.teaser_file_extension }}">
        <source srcset="{{ site.baseurl }}/assets/files/articles/{{ article.id }}/teaser.webp" type="image/webp">
        <img src="{{ site.baseurl }}/assets/files/articles/{{ article.id }}/teaser.webp" alt="Teaser image for article {{ article.title }}" >
      </picture>
    </div>
    <div class="pub-details">
      <ol>
        {%- if article.url -%}
        <li class="title"><a href="{{ article.url }}" target="_blank" rel="noopener">{{ article.title }}</a></li>
        {%- else -%}
        <li class="title">{{ article.title }}</li>
        {%- endif -%}
        {%- if article.coauthors -%}
        <li class="author">with
          {% for coauthor in article.coauthors %}
          {%- if coauthor.url -%}
          <a href="{{ coauthor.url }}" target="_blank" rel="noopener">{{ coauthor.name }}</a>
          {%- else -%}
          {{ coauthor.name }}
          {%- endif -%}
          {% if forloop.last %}{% else %},{% endif %}
          {% endfor %}
        </li>
        {%- endif -%}
        {% if article.status %}
        <li class="periodical"><strong>{{ article.status }}</strong></li>
        {% endif %}
        <li class="links">
          <ol>
            {%- if article.abstract -%}
            <li><a class="btn show-abstract" role="button">Abstract</a></li>
            {%- endif -%}
            {%- if article.wp -%}
            <li><a href="{{ article.wp }}" class="btn" role="button">WP</a></li>
            {%- endif -%}
            {% if article.presentation %}
            <li><a href="{{ site.baseurl }}/assets/files/articles/{{ article.id }}/{{ article.presentation }}" class="btn" role="button">Presentation</a></li>
            {% endif %}
            {%- if article.code -%}
            <li><a href="{{ article.code }}" class="btn" role="button">Code</a></li>
            {%- endif -%}
          </ol>
        </li>
      </ol>
    </div>
  </div>
  {%- if article.abstract -%}
  <div class="abstract-hidden">
    {{ article.abstract }}
  </div>
  {%- endif -%}
</div>
{%- endfor -%}


<h2 id="policy">Policy Articles</h2>

<div class="publications">
  <ul>
  {% for article in site.data.articles.policy %}
    <li>
      <a href="{{ article.url }}" target="_blank" rel="noopener">{{ article.title }}</a>
      <br>
      {% if article.coauthors %}
      with
        {% for coauthor in article.coauthors %}
        {%- if coauthor.url -%}
        <a href="{{ coauthor.url }}" target="_blank" rel="noopener">{{ coauthor.name }}</a>
        {%- else -%}
        {{ coauthor.name }}
        {%- endif -%}
        {% if forloop.last %}{% else %},{% endif %}
        {% endfor %}
        <br>
      {% endif %}
      <strong>{{ article.journal }}</strong>,
      {% if article.pages %}
      pp. {{ article.pages }},
      {% endif %}
      {{ article.year }}.
    </li>
  {% endfor %}
  </ul>
</div>
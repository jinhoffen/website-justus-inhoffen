<h2 id="publications" style="margin: 2px 0px -15px;">Policy Articles</h2>

<div class="publications">
  <ul>
  {% for article in site.data.articles.policy %}
    <li>
      <a href="{{ article.url }}" target="_blank" rel="noopener">{{ article.title }}</a>
      <br>
      {% if article.coauthors %}
      with
        {% for coauthor in article.coauthors %}
        {% if coauthor.url %}
        <a href="{{ coauthor.url }}" target="_blank" rel="noopener">{{ coauthor.name }}</a>
        {% else %}
        {{ coauthor.name }}
        {% endif %}
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
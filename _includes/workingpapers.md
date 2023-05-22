<h2 id="publications" style="margin: 2px 0px -15px;">Working Papers</h2>

<div class="publications">
  <ol class="bibliography">
    {% for article in site.data.articles.workingpapers %}
    <li>
      <div class="pub-row">
        <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
          <img alt="Teaser image for article {{ article.title }}" src="assets/files/articles/{{ article.id }}/{{ article.teaser }}" class="teaser img-fluid z-depth-1">
          <abbr class="badge">{{ article.badge }}</abbr>
        </div>
        <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
          <div class="title">
            {% if article.url %}
            <a href="{{ article.url }}" target="_blank" rel="noopener">{{ article.title }}</a>
            {% else %}
            {{ article.title }}
            {% endif %}
          </div>
          <div class="author">
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
          </div>
          <div class="periodical">
            {% if article.status %}
            <em>{{ article.status }}</em>
            {% endif %}
          </div>
          <div class="links">
            {% if article.url %}
            <a href="{{ article.url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:12px;">PDF</a>
            {% endif %}
            {% if article.presentation %}
            <a href="{{ site.baseurl }}/assets/files/articles/{{ article.id }}/{{ article.presentation }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:12px;">Presentation</a>
            {% endif %}
            {% if article.code %}
            <a href="{{ article.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:12px;">Code</a>
            {% endif %}
          </div>
        </div>
      </div>
    </li>
    {% endfor %}
  </ol>
</div>
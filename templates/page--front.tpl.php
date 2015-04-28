<?php include("header.php"); ?>
<div class="main-container">
  <div id="top-row">
    <div id="featured-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="featured col-sm-12">
            <?php print render($page['featured']); ?>
          </div>
        </div>
        <div class="row">
        </div>
      </div>
    </div>
  </div>
  <?php if (!empty($page['highlighted'])): ?>
    <div id="highlight-wrapper">
      <div class="container">
        <div class="row">
          <div class="highlighted col-md-12">
            <h2>Our Values</h2>
            <?php print render($page['highlighted']); ?>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <div class="" id="main-content-wrapper">
    <section>
      <div role="tabpanel" id="search_tabs">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a href="#search_address" aria-controls="search_address" role="tab" data-toggle="tab">Search by Address</a>
          </li>
          <li role="presentation">
            <a href="#search_keyword" aria-controls="search_keyword" role="tab" data-toggle="tab">Search by Keyword</a>
          </li>
          <li role="presentation">
            <a href="#browse_communities" aria-controls="browse_communities" role="tab" data-toggle="tab">Browse by Community</a>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="search_address">
            <?php print render($page['featured_left']); ?>
          </div>
          <div role="tabpanel" class="tab-pane" id="search_keyword">
            <?php print render($page['featured_middle']); ?>
          </div>
          <div role="tabpanel" class="tab-pane" id="browse_communities">
            <?php print render($page['featured_right']); ?>
          </div>
        </div>
      </div>
      <?php print $messages; ?>
      <?php if (!empty($page['help'])): ?>
        <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
    </section>
  </div>
</div>
<footer class="footer" id="footer_wrapper">
  <div class="container">
    <div class="row">
      <div class="col-md-4" id="footer-left-wrapper">
        <?php print render($page['footer_left']); ?>
      </div>
      <div class="col-md-4" id="footer-middle-wrapper">
        <?php print render($page['footer_middle']); ?>
      </div>
      <div class="col-md-4" id="footer-right-wrapper">
        <?php print render($page['footer_right']); ?>
      </div>
    </div>
    <div class="row">
      <?php print render($page['footer']); ?>
    </div>
  </div>
</footer>

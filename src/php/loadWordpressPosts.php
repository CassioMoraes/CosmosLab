<?php
    require("../blog/wp-load.php");

    $screenWidth = $_GET['screenWidth'];
    $articlesToDisplay = 6;

    if ($screenWidth < 768){
        $articlesToDisplay = 2;
    } elseif ($screenWidth < 1200){
        $articlesToDisplay = 4;
    }

    $args = array('posts_per_page' => $articlesToDisplay);
    $posts = get_posts($args);

    $articleCount = $articlesToDisplay - count($posts);

    foreach ($posts as $post) {
        echo
        '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">',
            '<a class="thumbnail fancybox" rel="ligthbox" href="',
            the_permalink(),
             '">',
                the_post_thumbnail(),
                '<div class="text-center">',
                    '<p class="text-muted">',
                    the_title(),
                    '</p>',
                '</div>',
            '</a>',
        '</div>';
    }

    for ($i=0; $i < $articleCount; $i++){
        echo
        '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">',
            '<a class="thumbnail fancybox" rel="ligthbox" href="#">',
                '<img width="345" height="345" alt="Em breve!" src="img/circle-title.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" srcset="img/circle-title.png 345w, img/circle-title.png 150w, img/circle-title.png 300w" sizes="(max-width: 345px) 100vw, 345px">',
                '<div class="text-center">',
                    '<p class="text-muted">Em breve!</p>',
                '</div>',
            '</a>',
        '</div>';
    }
?>
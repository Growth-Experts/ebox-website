<?php
/**
 * Default template.
 *
 * @package ebox
 */

get_header();
?>
<section class="section">
    <div class="container content-narrow">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article <?php post_class('entry'); ?>>
                    <h1><?php the_title(); ?></h1>
                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div>
                </article>
            <?php endwhile; ?>
        <?php else : ?>
            <h1><?php esc_html_e('Nothing found', 'ebox'); ?></h1>
        <?php endif; ?>
    </div>
</section>
<?php
get_footer();

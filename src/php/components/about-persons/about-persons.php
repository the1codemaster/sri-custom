<?php
$about_persons = get_data_type( 'about-person' );
?>


<section id="about-people" class="column-float-container page-section">

    <?php foreach ( $about_persons as $current_data ) : extract( $current_data ); ?>

        <article class="about-person column">
            <div class="image" <?php print style_bgimage( $image ); ?>></div>

            <div class="person-meta">

                <div class="name">
                    <span><?php print $name; ?></span>
                </div>

                <div class="position">
                    <span><?php print $position; ?></span>
                </div>

            </div> <!-- .person-meta -->

            <!-- <span class="description"><?php print $position; ?></span> -->

        </article> <!-- .about-person -->

    <?php endforeach; ?>

</section> <!-- #about-people -->

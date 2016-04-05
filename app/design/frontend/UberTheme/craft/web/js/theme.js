/**
 * @copyright Copyright © 2016 UberTheme. All rights reserved.
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License 3.0 (OSL-3.0)
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License 3.0 (AFL-3.0)
 * @see       See COPYING.txt for license details.
 */

define([
    'jquery',
    'mage/smart-keyboard-handler',
    'mage/mage',
    'mage/collapsible',
    'mage/ie-class-fixer',
    'jquery/ui'
],function($, keyboardHandler) {
    'use strict';

    $(function() {

        if ($('body').hasClass('checkout-cart-index')) {
            if ($('#co-shipping-method-form .fieldset.rates').length > 0 && $('#co-shipping-method-form .fieldset.rates :checked').length === 0 ) {
                $('#block-shipping').on('collapsiblecreate' ,function() {
                    $('#block-shipping').collapsible('forceActivate');
                });
            }
        }

        $('.cart-summary').mage('sticky', {
            container: '#maincontent'
        });

        $('.panel.header > .header.links').clone().appendTo('#store\\.links');

        keyboardHandler.apply();
    });

});

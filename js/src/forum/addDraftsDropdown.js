/*
 *
 *  This file is part of fof/username-request.
 *
 *  Copyright (c) 2019 FriendsOfFlarum..
 *
 *  For the full copyright and license information, please view the license.md
 *  file that was distributed with this source code.
 *
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import DraftsDropdown from './components/DraftsDropdown';

export default function() {
    extend(HeaderSecondary.prototype, 'items', function(items) {
        if ((app.session.user.data.relationships.drafts && app.session.user.data.relationships.drafts.data.length && !app.cache.drafts) || (app.cache.drafts && app.cache.drafts.length !== 0)) {
            items.add('Drafts', <DraftsDropdown/>, 20);
        }
    });
}

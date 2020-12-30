/**
 * movieproject.
 * Create by Devin on 2020/12/30.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}

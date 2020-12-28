/**
 * movieproject.
 * Create by Devin on 2020/12/28.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import {
    Placeholder,
    PlaceholderLine,
    PlaceholderMedia,
    Fade,
    Shine,
    ShineOverlay,
} from "rn-placeholder";

const PlaceholderItem = () => {
    return (
        <Placeholder
            Animation={Fade}
            style={{
                marginVertical: 6,
                marginHorizontal: 15,
                borderRadius: 4,
            }}
        >
            <PlaceholderLine style={{ marginTop: 15 }} width={50} />
            <PlaceholderLine width={70} />
            <PlaceholderLine width={80} />
        </Placeholder>
    );
};

export default PlaceholderItem;


import React from 'react';

import Title from './title';
import Description from './description';
import Images from './images';
import Videos from './videos';

export default function render() {
    return (
        <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
                <Title {...this.state} />
                <Description {...this.state} />

                <div className="row">
                    <div className="col-xs-6">
                        <Images {...this.state} />
                    </div>
                    <div className="col-xs-6">
                        <Videos {...this.state} />
                    </div>
                </div>

                <pre>
                {JSON.stringify(this.state, null, 4)}
                </pre>
            </div>
        </div>
    );
}

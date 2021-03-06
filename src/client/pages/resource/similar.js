import React from 'react';
import Spinner from 'react-spinkit';
import {navigateTo} from './navigate';
import styles from './resource.css';

export default ({similarEntities}) => (
    <div className="panel panel-default">
        <div className="panel-heading">
            Similar entities
        </div>
        <div className={`panel-body ${styles.mediaPanel}`}>
            {similarEntities.get('status') === 'loading' && <Spinner spinnerName="cube-grid" noFadeIn />}
            {similarEntities.get('status') !== 'loading' && (
                similarEntities.get('similarEntities').count() > 0 ?
                similarEntities.get('similarEntities').map(v => (
                    <div className={`row ${styles.marginedRow}`} key={v.get('url')}>
                        <div className="col-xs-3">
                            <a href="#" onClick={(e) => navigateTo(e, v.get('url'), v.get('title'))}>
                                <img
                                    src={v.get('image')}
                                    className={`img-responsive img-rounded ${styles.relatedImage}`}
                                    alt={v.get('title')}
                                />
                            </a>
                        </div>
                        <div className="col-xs-9">
                            <a href="#" onClick={(e) => navigateTo(e, v.get('url'), v.get('title'))}>
                                {v.get('title')}
                            </a>
                        </div>
                    </div>
                )) : 'No similar entities found.'
            )}
        </div>
    </div>
);

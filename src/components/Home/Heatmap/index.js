import React from 'react';
import './heatmap.scss';
import { heatmapDisc } from '../../../constants';

const Heatmap = () => {
    return (
    <div className='htmp'>
        <center className="htmp-header">
            Heatmap/coverage
        </center>
        <div>
            <center>
                {/* {heatmapDisc} */}
            </center>
        </div>
    </div>
    );
}

export default Heatmap;
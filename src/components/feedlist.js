import React from 'react';

export default function Feedlist() {
    var data = require('../data/data.json');
    console.log(data)
    let posts;

    if (data.length) {
        posts = data.map((item =>
            <div key={item.length}>
                <a className="post-title" href={`${item.url}`}>{item.title}</a>
                <p className="post-summary">{item.description}</p>            
                <hr></hr>
            </div>
        ));
    } else {
      posts = <h1>Waiting for data</h1>;
    }

    return (
        <div>
            {posts}
        </div>
    );
};
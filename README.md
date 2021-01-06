# stream-processing
 Exmaples and Notes on working with Stream with Nodejs


# Readable stream


Readable streams are source of data
Methods on readable streams
- `.pipe()`
- `.on('end',)`

You dont need to call these often
.read()
.on('readable', () => { }) 

`'readable'` is recommended as compared to `'data'` because readable is Pull based where as data is push based.

you can let a module like `'pipeline'`or `.pipe()` take care of calling those. It is not advised to use pipe instead pipeline should used as it takes care if stripping down the streams in case of error to avoid any memory leaks.

You can also use new async genrator to process a readable stream.

Link to file : [rstream.js](rstream.js)

# Writable Stream


Writable Streams are sink of Data.

Any stream you can write to (writable, transform, duplex) stream. Writable stream has these methods


- `.write(data)`
- `.end()`
- `.end(data)`
- `.on('finish',)`
- `.(...).pipe(stream)`


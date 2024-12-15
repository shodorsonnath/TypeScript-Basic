// enum -> store constants; duplicate value is not allowed or store
// enum types: numeric, string, hetergenous

// numeric enum
enum RequestType {
    ReadData,
    DeleteData,
    SVGAnimatedPreserveAspectRatio,
}

console.log(RequestType);

// String enum
enum RequestType2 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
}

// hetergenous enum
enum RequestType3 {
    readData = "Read_DATA",
    id = 101,
}
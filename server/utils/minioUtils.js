var Minio = require('minio')
var minioClient = new Minio.Client({
    endPoint: '192.168.159.132',
    port: 9000,
    useSSL: false,
    accessKey: 'robin',
    secretKey: 'robin2020'
});
var Fs = require('fs')

//上传

const  uploadFile=(localFile,fileName)=>{

  // localFile = 'C://Users//13429//Pictures//Dingtalk_20240229112545.jpg';
  // fileName='Dingtalk_20240229112545.jpg';

  var fileStream = Fs.createReadStream(localFile)
  var fileStat = Fs.stat(localFile, function(err, stats) {
    if (err) {
      return console.log(err)
    }
    minioClient.putObject('my-bucket', fileName, fileStream, stats.size, function(err, etag) {
      return console.log(err, etag) // err should be null
    })
  })
}


//下载对象
const downloadFile=(fileName)=>{
  var size = 0
  minioClient.getObject('my-bucket', 'Dingtalk_20240229112545.jpg', function(err, dataStream) {
    if (err) {
      return console.log(err)
    }
    dataStream.on('data', function(chunk) {
      size += chunk.length
    })
    dataStream.on('end', function() {
      console.log('End. Total size = ' + size)
    })
    dataStream.on('error', function(err) {
      console.log(err)
    })
  })
}


//下载对象到指定位置
const downloadFile2=(fileName,filePath)=>{
  
  // fileName='Dingtalk_20240229112545.jpg';
  // filePath='F://Downloads//Dingtalk_20240229112545.jpg';
  
  var size = 0
  minioClient.fGetObject('my-bucket', fileName, filePath, function(err) {
    if (err) {
      return console.log(err)
    }
    console.log('success')
  })
}


//删除
const deleteFile=(fileName)=>{
  minioClient.removeObject('my-bucket', fileName, function(err) {
    if (err) {
      return console.log('Unable to remove object', err)
    }
    console.log('Removed the object')
  })
}

module.exports={
  uploadFile,
  downloadFile,
  downloadFile2,
  deleteFile
}
/**
 * APP更新：
 * 检查指定服务器文件的版本信息，与当前版本比对，如果有新版本调用浏览器下载APK，之后用户手动安装。
 * 有网络的情况下，在LGOIN和程序被唤醒做更新检查。
 */


/*
    var url = 'http://bozla.com/epa/v1.0.apk';
    Linking.canOpenURL(url).then(supported => {
    if (!supported) {
        console.log('Can\'t handle url: ' + url);
    } else {
        return Linking.openURL(url);
    }
    }).catch(err => console.error('An error occurred', err));
*/
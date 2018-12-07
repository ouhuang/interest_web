
#一键部署

# 安装git bash  服务器配置公钥

# sh update.sh

url='80.0.0.59'
# 封版环境
# path='/opt/tomcat/webapps/hunan'

 #测试环境
path='/root/emm/webs/'

# npm run build

cd dist

if [ -e dist.tar.gz ];then
    rm -rf dist.tar.gz
fi

tar -cvzf dist.tar.gz static/* index.html

scp dist.tar.gz root@$url:$path

#!/bin/bash
ssh root@$url > /dev/null 2>&1 << eeooff
    cd $path
    rm -rf index.html static
    tar -xzvf dist.tar.gz
    rm -rf dist.tar.gz
eeooff

echo 部署完成!
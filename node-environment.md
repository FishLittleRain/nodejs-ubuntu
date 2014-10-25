# node安装及环境配置

------
系统环境：

Ubuntu 12.04 LTS 64bit

##1. 通过apt-get安装nodejs – 失败

优点：快速安装 缺点据网上说会出错；我安装完出错 可能是node版本原因

获取最新版：

    http://nodejs.org
    
解压：

    ~tar -xf node-v0.10.2 
    
开始编译安装node.js：

    ~cd node-v0.10.2
    ~./configure
    ~make
    ~sudo make install 
    
##2. 从github下载源代码安装 – 成功

优点：稳定 缺点:因为从github上获取代码，下载速度很慢，下载完还要编译，时间很长；

先卸载刚刚装的node和npm： 

    ~ sudo apt-get autoremove npm
    ~ sudo apt-get autoremove nodejs
    
安装git并下载nodejs源代码： 

    ~ sudo apt-get install git
    ~ git clone git://github.com/joyent/node.git
    Cloning into 'node'...
    
进入node目录： 

    ~ cd node
    ~ pwd
    ~ /home/nexus/node 
    
安装完成，查看node版本

    ~ node -v
    ~ /usr/sbin/node: 没有那个文件或目录(No such file or directory)
    
提示错误，没有找到node，查一下node安装位置

    ~ whereis node
    ~ node: /usr/sbin/node /usr/local/bin/node(安装了多次的原因，这里我要用的是前面一个)

    

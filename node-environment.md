# node安装及环境配置

------
系统环境：

Ubuntu 12.04 LTS 64bit

##1. 通过apt-get安装nodejs – 失败：

优点：快速安装 缺点据网上说会出错；我安装完出错 可能是node版本原因

获取最新版:<br/>
    ```bash 
    http://nodejs.org
    ```
    
解压: <br/>
    ```bash 
    ~tar -xf node-v0.10.2 
    ```
    
开始编译安装node.js:<br/>
    ```bash
    ~cd node-v0.10.2
    ~./configure
    ~make
    ~sudo make install 
    ```
    
##2. 从github下载源代码安装 – 成功：

优点：稳定 缺点:因为从github上获取代码，下载速度很慢，下载完还要编译，时间很长；

先卸载刚刚装的node和npm: <br/>
    ```bash 
    ~ sudo apt-get autoremove npm
    ~ sudo apt-get autoremove nodejs
    ```
    
安装git并下载nodejs源代码： <br/>
    ```bash 
    ~ sudo apt-get install git
    ~ git clone git://github.com/joyent/node.git
    Cloning into 'node'...
    ```
    
进入node目录： <br/>
    ```bash
    ~ cd node
    ~ pwd
    /home/nexus/node 
    ```
    

# node安装及环境配置

------
系统环境：

Ubuntu 12.04 LTS 64bit

##1. 通过apt-get安装nodejs – 失败：

优点：快速安装 缺点据网上说会出错；我安装完出错 可能是node版本原因

一、获取最新版
    ```bash 
    http://nodejs.org
    ```
二、解压 
    ```bash 
    tar -xf node-v0.10.2 
    ```
三、开始编译安装node.js
    ```bash
    cd node-v0.10.2
    ./configure
    make
    sudo make install 
    ```

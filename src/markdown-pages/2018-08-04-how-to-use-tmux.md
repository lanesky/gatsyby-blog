---
title: 怎么使用tmux
date: "2019-08-04"
---

Tmux 是一个用来分割终端窗口的软件。

输入时，可以在不同的小窗口（pane)分别输入，也可以在一个小窗口（pane）输入，同时把这个输入反映到所有的小窗口里面。

![](https://www.keyunshang.com/wp-content/uploads/2019/08/image-1024x640.png)

关于 tmux 的使用方法，如果你直接去看 tmux 的文档，你可能觉得云里雾里的，两分钟后就放弃了。但其实 tmux 的操作是很简单的，就是文档写的让人不太好理解。跟着我下面的操作走一遍，大体的内容你就明白了。

## 安装

安装非常简单，如果你用的 Mac OS, 执行下面的命令：

    brew install tmux

如果你没有安装 brew, 请先安装[brew](https://brew.sh/)。

## 基本概念

tmux 有三个最最基本的东西，session，window 和 pane。

- window 就是一个大的终端窗口。
- Pane 是一个 Window 中被拆出来的小窗口。一个 Window 中可以多个 Pane，且其布局可以定义。
- Session 可以认为是一个 layout。比如你分别创建了用于管理 google 和 aws 的 vm 的窗口的 Layout，你可以自由的切换不同的 Layout。这种 Layout 的管理单位在 tmux 中被称为 session。

## 基本操作

### 创建一个新的 session

    tmux new -t aws

注意：上面的 aws 是我给这个 session 取的名称。你可以换成你想要的任何名称。

上面的命令输入后，会出现如下的窗口。

![](https://www.keyunshang.com/wp-content/uploads/2019/08/image-1-1024x640.png)

### 水平拆分 Window

接下来按键 Ctrl+b,然后再按键双引号，这时你可以看到 Window 被水平切分成了两个 pane。

![](https://www.keyunshang.com/wp-content/uploads/2019/08/image-2-1024x640.png)

### 纵向拆分 Window

然后，再次 Ctrl+b,然后再按键百分号 “%”，这时你可以看到其中一个 Pane 被纵向切分成了两个 pane。

![](https://www.keyunshang.com/wp-content/uploads/2019/08/image-3-1024x640.png)

### 改变 Pane 布局

按键 Ctrl+b, 然后空格，tmux 会根据当前的 Pane 数改变布局。

### 在不同 Pane 间跳转

在不同的 pane 间跳转光标，你可以先按键 Ctrl+b, 然后按键左箭头或者右箭头。

### 删除一个 Pane

如果你想要删除一个 Pane，可以先将光标移至其上，然后按键 Ctrl+b, 然后按键 x。你会看到窗口下午会出现一个提示窗口，提示是否删除这个 pane。想删除就按 y，取消就按 n。

![](https://www.keyunshang.com/wp-content/uploads/2019/08/image-4-1024x640.png)

### 退出 Window

如果要退出 tmux，按键 ctrl+b，然后按键 d。

![](https://www.keyunshang.com/wp-content/uploads/2019/08/image-6-1024x640.png)

### 列出所有 Session

在如下命令行下，可以列出当前所有的 session：

    tmux ls

![](https://www.keyunshang.com/wp-content/uploads/2019/08/image-7-1024x640.png)

### 恢复以前定义的某个 Session

用如下命令把窗口恢复到某个指定的 session：

    tmux a -t session-name

### 干掉一个 session

用如下的命令删除一个 session：

    tmux kill-session -t session-name

### 同步 Pane 的输入

先按键 ctrl+b, 然后按键冒号“：”，这时窗口下方会出现黄色的命令输入条，输入以下命令，然后回车：

    setw synchronize-panes

![](https://www.keyunshang.com/wp-content/uploads/2019/08/image-9-1024x640.png)

如果想要关闭同步输入，重复一次以上的操作即可。

---

以上就是一些基本的 tmux 的操作。如果想要了解更多，可以参考 tmux 的[官方文档](https://github.com/tmux/tmux/wiki)，或者[Cheatsheet](https://gist.github.com/henrik/1967800)。

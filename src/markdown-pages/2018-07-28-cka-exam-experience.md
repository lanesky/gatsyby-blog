---
title: CKA考试经验
date: "2019-07-28"
---

刚刚通过了 CKA(Certificated Kubernetes Administrator) 考试。下面分享一些自己的考试经验。

## 日程

2019/7: 决定参加 CKA 考试，两周后通过考试。期间经历一次重考。

## 考试准备时间

决定参加考试后的两周间，基本上平均每天花两个小时看视频资料和实际操作（早晚各一个小时），总共约 30 小时。

另外我实际工作中也使用 kubernetes，姑且可以算上 70 小时的经验。

这两段时间合并起来，大概可以算作 100 小时的考试准备时间。

## 考试准备资料

### [](https://linuxacademy.com)

这个学习网站上有一个 CKA 的教程，对于 CKA 的考点进行了全面的介绍。同时，还提供了 hands-on lab。按照视频上的教程一步步来做，也就对 Kubenetes 的基本内容有了一个了解了。

如果您对 Kubernetes 已经有了经验，看看这个教程也是一个好的复习过程。

另外，我发现这个网站有很多视频教程挺不错的，比如介绍 istio 的，grafana 的，还有 aws 认证的。

### Kubernetes the Hard Way

建议至少按照[The hard way]（https://github.com/kelseyhightower/kubernetes-the-hard-way） 安装一遍 Kubernetes。这会帮助您对 Kubernetes 的构成框架有更好的理解。此外，[视频网站 Linux Academy](https://linuxacademy.com) 提供了一个名为 Kubernetes the Hard Way 的教程，据说这个比 github 版说的还要仔细。

### 官方资料中的 Task

[](https://kubernetes.io/docs/tasks/)

这个是 kubernetes 的官方网站的资料。建议把所有的 TASK 全部做一遍。

## 考试心得

1. 一定要非常熟悉 kubectl command

考试只有 3 个小时，所以您一定要非常熟悉 kubectl run, create 这样的命令， 这会节省您大量的时间。关于常用 command，您可以参考下面的文档。

[](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

2. 充分利用重考

第一次考不理想的话，很有可能是由于您对考试环境的不适应，比如说考试画面的操作或者与监考官之间的互动。但是没关系！您可以重考（Retake），而且是免费的，第二次就会适应很多。

## 考试通过以后

首先要祝贺您通过考试。

但合格只能说明您对 Kubernetes 的基本知识和基本操作有了一定程度的理解。如果要继续深入强化您在这方面的能力，我建议您不断跟进,比如：

- 按照 the hard way 安装 cluster
- 研究备份和灾难恢复
- 研究多个 cluster 之间的协作问题。这里，您可能会涉及到 service mesh，cluster federation 的内容
- 研究 kubernetes 的源码

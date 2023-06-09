# 微服务重要的问题

- go-zero适用场景
    - 希望说说应用场景，各个场景下的优势
        - 高并发的微服务系统
            - 支撑千万级日活，百万级QPS
            - 完整的微服务治理能力
            - 支持自定义中间件
            - 很好的管理了数据库和缓存
            - 有效隔离故障
        - 低并发的单体系统
            - 这种系统直接使用api层即可，无需rpc服务
    - 各个功能的使用场景以及使用案例
        - 限流
        - 熔断
        - 降载
        - 超时
        - 可观测性
- go-zero的实际体验
    - 服务很稳
    - 前后端接口一致性，一个api文件即可生成前后端代码
    - 规范、代码量少，意味着bug少
    - 免除api文档，极大降低沟通成本
    - 代码结构完全一致，便于维护和接手
- 微服务的项目结构， monorepo的 CICD 处理

```
  bookstore
  ├── api
  │   ├── etc
  │   └── internal
  │       ├── config
  │       ├── handler
  │       ├── logic
  │       ├── svc
  │       └── types
  └── rpc
  ├── add
  │   ├── adder
  │   ├── etc
  │   ├── internal
  │   │   ├── config
  │   │   ├── logic
  │   │   ├── server
  │   │   └── svc
  │   └── pb
  ├── check
  │   ├── checker
  │   ├── etc
  │   ├── internal
  │   │   ├── config
  │   │   ├── logic
  │   │   ├── server
  │   │   └── svc
  │   └── pb
  └── model
```

mono repo的CI我们是通过gitlab做的，CD使用jenkins
CI尽可能更严格的模式，比如-race，使用sonar等工具
CD有开发、测试、预发、灰度和正式集群
晚6点上灰度、无故障的话第二天10点自动同步到正式集群
正式集群分为多个k8s集群，有效的防止单集群故障，直接摘除即可，集群升级更有好
- 如何部署，如何监控？
   - 全量K8S，通过jenkins自动打包成docker镜像，按照时间打包tag，这样可以一眼看出哪一天的镜像
   - 上面已经讲了，预发->灰度->正式
   - Prometheus+自建dashboard服务
   - 基于日志检测服务和请求异常
- 如果打算换go-zero框架重构业务，如何做好线上业务稳定安全用户无感切换？另外咨询下如何进行服务划分？
   - 逐步替换，从外到内，加个proxy来校对，校对一周后可以切换
   - 如有数据库重构，则需要做好新老同步
   - 服务划分按照业务来，遵循从粗到细的原则，避免一个api一个微服务
   - 数据拆分对于微服务来讲尤为重要，上层好拆，数据难拆，尽可能保证按照业务拆分数据
- 服务发现
   - 服务发现 etcd 的 key 的设计
      - 服务key+时间戳，服务进程数存在时间戳冲突的概率极低，忽略
   - etcd服务发现与治理， 异常捕获与处理异常
      - 为啥k8s还使用etcd做服务发现，因为dns的刷新有延迟，导致滚动更新会有大量失败，而etcd可以做到完全无损更新
      - etcd集群直接部署在k8s集群内，因为多个正式集群，集群单点和注册避免混乱
      - 针对etcd异常或者leader切换，自动侦测并刷新，当etcd有异常不能恢复时，不会刷新服务列表，保障服务依然可用
- 缓存的设计与使用案例
   - 分布式多redis集群，线上最大几十个集群为同一个服务提供缓存服务
   - 无缝扩缩容
   - 不存在没有过期时间的缓存，避免大量不常使用的数据占用资源，默认一周
   - 缓存穿透，没有的数据会短暂缓存一分钟，避免刷接口或大量不存在的数据请求带垮系统
   - 缓存击穿，一个进程只会刷新一次同一个数据，避免热点数据被大量同时加载
   - 缓存雪崩，对缓存过期时间自动做了jitter，5%的标准变差，使得一周的过期时间分布在16小时内，有效防止了雪崩
   - 我们线上数据库都有缓存，否则无法支撑海量并发
   - 自动缓存管理已经内置于go-zero，并可以通过goctl自动生成代码
- 能否讲解下， 中间件，拦截器的设计思想

   - 洋葱模型
   - 本中间件处理，比如限流，熔断等，然后决定是否调用next
   - next调用
   - 对next调用返回结果做处理
- 微服务的事务处理怎么实现好，gozero分布式事务设计和实现，有什么好中间件推荐
   - 2PC，两阶段提交
   - TCC，Try-Confirm-Cancel
   - 消息队列，最大尝试
   - 人工补偿
- 多级 goroutine 的异常捕获 ，怎么设计比较好
   - 微服务系统请求异常应该隔离，不能让单个异常请求带崩整个进程
   - go-zero自带了RunSafe/GoSafe，用来防止单个异常请求导致进程崩溃
   - 监控需要跟上，防止异常过量而不自知
   - fail fast和故障隔离的矛盾点
- k8s配置的生成与使用(gateway, service, slb)
   - 内部自动生成k8s的yaml文件，过于依赖配置而未开源
   - 打算在bookstore的示例里加上k8s配置样板
   - slb->nginx->nodeport->api gateway->rpc service
- gateway限流、熔断和降载
   - 限流分为两种：并发控制和分布式限流
   - 并发控制用来防止瞬间过量请求，保护系统不被打垮
   - 分布式限流用来给不同服务配置不同的quota
   - 熔断是为了对依赖的服务进行保护，当一个服务出现大量异常的时候，调用者应该给予保护，使其有机会恢复正常，同时也达到fail fast的效果
   - 降载是为了保护当前进程资源耗尽而陷入彻底不可用，确保尽可能服务好能承载的最大请求量
   - 降载配合k8s，可以有效保护k8s扩容，k8s扩容分钟级，go-zero降载秒级
- 介绍core中好用的组件，如timingwheel等，讲讲设计思路
   - 布隆过滤器
   - 进程内cache
   - RollingWindow
   - TimingWheel
   - 各种executors
   - fx包，map/reduce/filter/sort/group/distinct/head/tail...
   - 一致性hash实现
   - 分布式限流实现
   - mapreduce，带cancel能力
   - syncx包里有大量的并发工具
- 如何快速增加一种rpc协议支持，將跨机发现改为调本机节点，并关闭复杂filter和负载均衡功能
   - go-zero跟grpc关系还是比较紧密的，设计之初没有考虑支持grpc以外的协议
   - 如果要增加的话，那就只能fork出来魔改了
   - 调本机直接用direct的scheme即可
   - 为啥要去掉filter和负载均衡？如果要去的话，fork了改，但没必要
- 日志和监控和链路追踪的设计和实现思路，最好有大概图解
   - 日志和监控我们使用prometheus, 自定义dashboard服务，捆绑提交数据（每分钟）
   - 链路追踪可以看出调用关系，自动记录trace日志
![](https://lh5.googleusercontent.com/PBRdYmRs22xEH1gjNkQnoHuB5WFBva10oKCm61A6G23xvi28u95Bwq-qTc_WVV-PihzAHyLpAKkBtbtzK8v9Kjtrp3YBZqGiTSXhHJHwf7CAv5K9AqBSc1CZuV0u3URCDVP8r1RD0PY#align=left&display=inline&height=658&margin=%5Bobject%20Object%5D&originHeight=658&originWidth=1294&status=done&style=none&width=1294)
- go-zero框架有用到什么池化技术吗？如果有，在哪些core代码里面可以参考
   - 一般不需要提前优化，过度优化是大忌
   - core/syncx/pool.go里面定义了带过期时间的通用池化技术
- go-zero用到了那些性能测试方法框架，有代码参考吗？可以说说思路和经验
   - go benchmark
   - 压测可以通过现有业务日志样本，来按照预估等比放大
   - 压测一定要压到系统扛不住，看第一个瓶颈在哪里，改完再压，循环
- 说一下代码的抽象经验和心得
   - Don’t repeat yourself
   - 你未必需要它，之前经常有业务开发人员问我可不可以增加这个功能或那个功能，我一般都会仔细询问深层次目的，很多时候会发现其实这个功能是多余的，不需要才是最佳实践
   - Martin Fowler提出出现三次再抽象的原则，有时有些同事会找我往框架里增加一个功能，我思考后经常会回答这个你先在业务层写，其它地方也有需要了你再告诉我，三次出现我会考虑集成到框架里
   - 一个文件应该尽量只做一件事，每个文件尽可能控制在200行以内，一个函数尽可能控制在50行以内，这样不需要滚动就可以看到整个函数
   - 需要抽象和提炼的能力，多去思考，经常回头思考之前的架构或实现
- 你会就go-zero 框架从设计到实践出书吗？框架以后的发展规划是什么？
   - 暂无出书计划，做好框架是最重要的
   - 继续着眼于工程效率
   - 提升服务治理能力
   - 帮助业务开发尽可能快速落地

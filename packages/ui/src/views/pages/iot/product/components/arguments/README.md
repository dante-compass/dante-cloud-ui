# 本文件夹下面代码设计和实现说明

本文件夹下面的代码，主要用途为借鉴阿里云物联网添加物模型功能实现页面。

## 实现问题

### 1. 循环依赖

物模型主要数据类型，包括：Integer、Float、Double、Enum、Bool、Text、Date 以及 Struct

早期实现方式为，先定义一个 Dialog 组件，用于添加数据类型相关内容。这个 Dialog 中使用 <component> 进行数据类型的切换。这里面就包括了 Integer、Float、Double、Enum、Bool、Text、Date 以及 Struct 所有类型。
其它类型没有问题，Struct 类型，还需要再次添加属性。最简单的逻辑就是再次调用这个 Dialog，但实际实现就出现了组件的循环引用问题。

Dialog -> Struct -> Dialog

### 2. 显示内容差异

正常情况下，不管是 Properties 的数据类型，还是 Services 或 Events 的输入输出参数，在添加时都需要显示 Struct 数据类型。

但是，在给 Struct 添加子数据类型时，是不需要显示 Struct 类型的。否则，就变成了树形结构，可以无限添加下去。

不是说不可以显示，只不过这样做没有意义。会给解析数据以及实际操作带来更大的繁琐。

## 解决问题

解决办法，就是创建两个属性添加的 Dialog，一个用于常规属性添加包含 Struct 数据类型；另一个仅用于 Struct 子数据类型的添加。

这样做，虽然代码上有所冗余和重复，但是可以很好的解决上面所说的问题。

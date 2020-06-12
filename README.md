## 使用ts + react hook  从零搭建自己的ui库


## 爬坑记
  1. 使用了接口定义了可选属性时，在createElement方法中，第一个参数tagName会被ts类型推断为undefined，但是createElement方法又不允许第一个参数为undefined，从而导致报错。
  虽然定义了组件的defaultProps属性，但是：defaultProps 是React自己提供的运行时类型检测配置，
  而typescript是编译器的类型检测工具，感知不到 defaultProps。

  解决：使用ts的非空断言语句  ！  处理。
  


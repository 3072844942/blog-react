# Vue博客的重构
原地址[https://github.com/3072844942/blog](https://github.com/3072844942/blog)

> 介于博客非本人首创, 于是打算利用原有项目进行重构, 升级. 以此来锻炼个人能力

### 项目目录
![img.png](src/assets/img/img.png)
### 项目日记
+ **2022/6/28** 说说和相册页面小结, 发现有一个字体库的问题, 只能慢慢改喽, 还有就是单一动画已经不能满足整个项目的需要
+ **2022/6/20** 分类和标签页面, 基本没什么大问题, 还是样式得细扣
+ **2022/6/16** 休息几天之后开始书写归档页面, 样式非常不美观
+ **2022/6/9** 主页小结, 样式比起原版感觉很大
+ **2022/6/6** 快四级了还在搞这个..., 今天一天只是获取了文章的信息, 这里的好多小坑
+ **2022/6/5** 主页大图, 底部及Loading界面, 因为想让加载一会(~~必须让大家看看我的努力~~),
  总体来说没有什么大问题, 就是加载过程缓慢, 是不是因为懒加载呢
+ **2022/6/4** 今天稍微写了点顶部状态栏, 并不理想, 但好歹实现了所有功能

### Bug记录
+ **2022/6/20** 突然想到一个问题, 所有的这些都是建立在我已经有内容的前提下, 如果没有内容, 是否会显示一段空白 或者什么也没有
+ **2022/6/16** 原本想让归档页面有无限滚动套时间轴, 但是好像两者不可兼得, 于是就有了现在丑陋的模样
+ **2022/6/6** 今天遗留了一个问题, 在获取文章时, 可能会因为多次action导致内容重复
我使用了遍历来判断是否存在, 但是我总觉得会有一天出问题
+ **2022/6/4** 因为偷懒使用全局的transition, 导致状态栏动画不统一. 
同时, 因为不会写css, 导致本应合并的导航栏菜单现在需要单独一个位置

### 未完成
- [ ] 独立动画效果
- [ ] 字体库使用
- [ ] 关于页面的**default**
- [ ] 图标更换[https://iconpark.oceanengine.com/official](https://iconpark.oceanengine.com/official)
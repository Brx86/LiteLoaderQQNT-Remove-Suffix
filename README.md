# LiteLoaderQQNT-Remove-Suffix

LiteLoaderQQNT的移除小尾巴插件

LiteLoaderQQNT本体：[LiteLoaderQQNT](https://github.com/mo-jinran/LiteLoaderQQNT)

## 使用方法
在 `LiteLoaderQQNT/plugins` 目录下克隆此项目，或下载 [release](https://github.com/Brx86/LiteLoaderQQNT-Remove-Suffix/releases/latest) 解压至此。

默认会移除 `(喵|喵~|喵～|呜|小尾巴|~|～)` 之一。

如需自定义移除的小尾巴，请编辑 `renderer.js` 文件中的 `window.suffixPattern` 变量，格式为正则表达式。
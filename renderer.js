// 运行在 Electron 渲染进程 下的页面脚本

function removeSuffix() {
    window.suffixPattern = /(喵|喵~|喵～|呜|小尾巴|~|～)$/
    window.spanSuffixObserver = new MutationObserver(mutationsList => {
        try {
            mutationsList.forEach(mutation => {
                if (mutation.type == "childList") {
                    let target = mutation.addedNodes[0]
                    if (target === undefined) {
                        return
                    }
                    let span = target.querySelector('span.text-normal')
                    if (suffixPattern.test(span.textContent)) {
                        console.warn('[移除小尾巴]:', span.textContent)
                        span.textContent = span.textContent.replace(suffixPattern, "")
                    }
                }
            })
        } catch (e) {
            console.error(e)
        }
    })
    let id = setInterval(() => {
        let widget = document.querySelector('.ml-list')
        if (widget !== null) {
            spanSuffixObserver.observe(widget, { childList: true });
            clearInterval(id)
            console.log('[移除小尾巴]: 启动成功!')
        }
    }, 100)
}

try {
    removeSuffix()
} catch (e) {
    console.error('[移除小尾巴]: 初始化失败!', e)
}
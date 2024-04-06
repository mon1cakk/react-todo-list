import { useState, useEffect } from 'react'

function App(props) {
    const [page, setPage] = useState(0)
    const [keyword, setKeyword] = useState('')

    function fn(page, keyword) { console.log('发起 ajax 请求', page, keyword) }
    
    // 1. 组件渲染完成触发； 2. page 或 keyword 变化时触发
    useEffect(() => {
        fn(page, keyword)
    }, [page, keyword]) 

    return <div>
        <button onClick={() => setPage(page + 1)}>setPage</button>
        <button onClick={() => setKeyword(keyword + 'x')}>setKeyword</button>
        <p>App page</p>
    </div>
}

export default App

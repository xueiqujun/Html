###箭头函数
- 8.1 当你一定要用函数表达式（在回调函数里）的时候，使用箭头函数。 eslint: prefer-arrow-callback, arrow-spacing
为什么？箭头函数中的 this 与定义该函数的上下文中的 this 一致，这通常才是你想要的。而且箭头函数是更简洁的语法。
什么时候不用箭头函数：如果你的函数逻辑较复杂，你应该把它单独写入一个命名函数里头。
- 
        // bad
        [1, 2, 3].map(function (x) {
        const y = x + 1;
        return x * y;
        });

        // good
        [1, 2, 3].map((x) => {
        const y = x + 1;
        return x * y;
        });

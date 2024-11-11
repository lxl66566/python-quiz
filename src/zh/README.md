---
date: 2024-10-24
---

# Python Quiz

这个页面记录了我在使用 Python 的过程中踩过的一些坑。20241023 玩笑话：“再多踩点坑 说不定都能出 python quiz 了（”。于是就出了。

## Q1

最后会打印出什么？

<runner :code="`
a = []
for i in range(3):
    a.append(lambda: i)
a[0]()`" ans="lambda 捕获引用，所以打印的值都是 for 循环结束时 i 的值，也就是 2。如果要打印出捕获当时的值，需要使用 `lambda i=i: i` 进行一次值传递。" />

## Q2

最后 iter a 和 iter b 会剩下什么？

<runner :code="`a = iter([1, 2, 3, 4])
b = iter([1, 2])
for i, j in zip(a, b):
    pass
list(a), list(b)`" ans="zip 从两个 iter 里拿完 1 和 2 后，先从 a 中取出 3。此时从 b 拿取元素时 raise StopIteration，于是程序从 for 循环中跳出，因此 a 剩下元素 4。" />

## Q3

<runner :code='`
import io
string_data = """
hello
world
"""
bytes_data = io.BytesIO(string_data.strip().encode())
text_stream = io.TextIOWrapper(bytes_data)
text_stream.readlines()`' ans="`TextIOWrapper.readlines()` 会在结果中保留换行符" />

## Q4

求值顺序。

<runner :code='`
def test(s: str, rev: bool):
    if s == "1" if rev else "0":
        return "1"
    else:
        return "0"
test("1", True), test("1", False)
`' ans='相当于 `if ((s == "1") if rev else "0")`，并且 "0" 转 bool 会被转为 True' />

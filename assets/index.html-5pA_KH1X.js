import{_ as r,c as o,a as e,d as i,o as a,r as l}from"./app-Bv4YD2fl.js";const s={};function p(d,t){const n=l("runner");return a(),o("div",null,[t[0]||(t[0]=e("h1",{id:"python-quiz",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#python-quiz"},[e("span",null,"Python Quiz")])],-1)),t[1]||(t[1]=e("p",null,"这个页面记录了我在使用 Python 的过程中踩过的一些坑。20241023 玩笑话：“再多踩点坑 说不定都能出 python quiz 了（”。于是就出了。",-1)),t[2]||(t[2]=e("h2",{id:"q1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#q1"},[e("span",null,"Q1")])],-1)),t[3]||(t[3]=e("p",null,"最后会打印出什么？",-1)),i(n,{code:`
a = []
for i in range(3):
    a.append(lambda: i)
a[0]()`,ans:"lambda 捕获引用，所以打印的值都是 for 循环结束时 i 的值，也就是 2。如果要打印出捕获当时的值，需要使用 `lambda i=i: i` 进行一次值传递。"}),t[4]||(t[4]=e("h2",{id:"q2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#q2"},[e("span",null,"Q2")])],-1)),t[5]||(t[5]=e("p",null,"最后 iter a 和 iter b 会剩下什么？",-1)),i(n,{code:`a = iter([1, 2, 3, 4])
b = iter([1, 2])
for i, j in zip(a, b):
    pass
list(a), list(b)`,ans:"zip 从两个 iter 里拿完 1 和 2 后，先从 a 中取出 3。此时从 b 拿取元素时 raise StopIteration，于是程序从 for 循环中跳出，因此 a 剩下元素 4。"}),t[6]||(t[6]=e("h2",{id:"q3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#q3"},[e("span",null,"Q3")])],-1)),i(n,{code:`
import io
string_data = """
hello
world
"""
bytes_data = io.BytesIO(string_data.strip().encode())
text_stream = io.TextIOWrapper(bytes_data)
text_stream.readlines()`,ans:"`TextIOWrapper.readlines()` 会在结果中保留换行符"}),t[7]||(t[7]=e("h2",{id:"q4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#q4"},[e("span",null,"Q4")])],-1)),t[8]||(t[8]=e("p",null,"求值顺序。",-1)),i(n,{code:`
def test(s: str, rev: bool):
    if s == "1" if rev else "0":
        return "1"
    else:
        return "0"
test("1", True), test("1", False)
`,ans:'相当于 `if ((s == "1") if rev else "0")`，并且 "0" 转 bool 会被转为 True'})])}const u=r(s,[["render",p],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/zh/","title":"Python Quiz","lang":"zh-CN","frontmatter":{"date":"2024-10-24T00:00:00.000Z","description":"Python Quiz 这个页面记录了我在使用 Python 的过程中踩过的一些坑。20241023 玩笑话：“再多踩点坑 说不定都能出 python quiz 了（”。于是就出了。 Q1 最后会打印出什么？","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://lxl66566.github.io/python-quiz/zh/python-quiz/"}],["meta",{"property":"og:url","content":"https://lxl66566.github.io/python-quiz/zh/python-quiz/zh/"}],["meta",{"property":"og:site_name","content":"Python 小测"}],["meta",{"property":"og:title","content":"Python Quiz"}],["meta",{"property":"og:description","content":"Python Quiz 这个页面记录了我在使用 Python 的过程中踩过的一些坑。20241023 玩笑话：“再多踩点坑 说不定都能出 python quiz 了（”。于是就出了。 Q1 最后会打印出什么？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T16:12:40.000Z"}],["meta",{"property":"article:published_time","content":"2024-10-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T16:12:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python Quiz\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-11T16:12:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lxl66566\\",\\"url\\":\\"https://github.com/lxl66566\\"}]}"]]},"headers":[{"level":2,"title":"Q1","slug":"q1","link":"#q1","children":[]},{"level":2,"title":"Q2","slug":"q2","link":"#q2","children":[]},{"level":2,"title":"Q3","slug":"q3","link":"#q3","children":[]},{"level":2,"title":"Q4","slug":"q4","link":"#q4","children":[]}],"git":{"createdTime":1729773366000,"updatedTime":1731341560000,"contributors":[{"name":"lxl66566","email":"lxl66566@gmail.com","commits":2}]},"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"zh/README.md","localizedDate":"2024年10月24日","autoDesc":true}');export{u as comp,m as data};

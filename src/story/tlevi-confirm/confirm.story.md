## css居中布局的方法

### 不定位
```
// 父
displaty: table-cell;
vertical-align: middle;

// 子
margin: 0 auto;
```
```
display: flex;
justify-content: center;
align-items: center;
```

### 定位
```
position: relative;

// 子1
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
margin: auto;

// 子2
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

// 子3 已知子元素的宽高
width: 300px;
height: 200px;
background-color: white;
position: absolute;
top: 50%;
left: 50%;
margin-top: -100px;
margin-left: -150px;
```
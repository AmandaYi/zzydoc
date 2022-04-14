# 栈

栈：栈是限制在插入和删除只能在一个位置上的线性表。

> 栈有很多概念，基本上就是对特定的位置处理的时候一些特殊的叫法，一点都不神奇。比如，出栈，弹栈，压栈，入栈，栈顶，栈底这类的术语。

任何一个事物都有动作和形态，栈作为一种抽象的事物，同样，也能通过这种方式描述，在描述的过程中产生的一系列表达式就是他们的术语。

## 认识栈是什么

栈可以简单的理解为是一个杯子，就一个杯子口，杯子只有俩状态，要么是东西进入的状态，要么是东西离开的状态。依次放入的东西，拿出来的时候，总是最后一个先被拿出来。这样描述基本上就把栈的所有内容形容完毕了。

## 认知归纳

那么我们可以归纳如下内容：
1. 杯子可以理解为一个栈空间，是有容量的。这在说明栈是有大小的，不是无限的。
2. 杯子的杯子口就是东西进入和东西离开的地方，这个地方是在杯子顶部，所以可以说成是杯子顶部，那么应用到在栈里面，专业术语就可以叫做栈顶部，简称栈顶。
3. 相对应的，在杯子的最底部的那一层，自然而然地就叫做杯子底部，那么应用到栈里面，专业术语就可以叫做栈底部，简称栈底。
4. 还能得到一个结论是杯子顶部才能进入和离开，然而杯子底部不能进入和离开。把杯子看作栈，可以应用到栈里面就是，栈顶可以进入和离开，栈底不可以进入和离开。同义词替换为专业术语就是栈顶可以添加和删除，栈底不可以添加和删除。
5. 栈的添加有一个更为专业的叫法，叫做入栈，专业一点的叫法是压栈。
6. 栈的删除也有一个专业的叫法，叫做出栈，专业一点的叫法是弹栈。

## 归纳名词提炼

提炼结论的专业名词解释：

1. 栈大小：最大能够存多少数据。
2. 栈顶：允许插入和删除的一端位于表的末端，叫做栈顶。
3. 栈底：不允许插入和删除的另一端叫做栈底。
4. 压栈：通过在表末端，向栈顶插入一个元素，就叫做压栈，英文名PUSH。
5. 弹栈：通过在表末端，从栈顶删除一个元素，就叫做弹栈，英文名POP。

## 归纳动作结论

首先放入杯子里面的东西，肯定都是最后才可以拿出来。最后放入杯子的，肯定是第一个就可以拿出来。对于这种现象，在栈里面有一个专业术语叫做，先进入的后出来，后进入的先出来。开玩笑，这听着都不专业。专业术语得有逼格，前面的话，可以用四个字形容，就叫做`后进先出`.

## 后进先出（先进后出）

这俩是一个意思，栈是一种后进先出（LIFO）的数据结构，最先被删除的是最近压栈的元素。

## 图片形式认识栈：

![栈完整图片][1]

在图片介绍里面，可以看到栈顶压栈和弹栈均在栈顶，同时也可以看到栈是有容量的。

再者能看到一个top索引，主要是为了指示当前栈拥有的最后一个值的位置。主要为了访问栈。

## 认识压栈动作

![栈压栈][2]

## 认识弹栈动作

![栈弹栈][3]

## 栈实现

由于栈是一个表，因此任何实现表的方法都可以用来实现栈。主要有两种方式，链表实现和数组实现。

实现栈，或者说实现一个完整的数据结构，至少要有增删改查，创建，销毁。
对于栈，为了便于理解只需要实现增删差即可，其他都很容易。

### 链表实现栈

可以使用单链表来实现栈。通过在表顶端插入一个元素来实现 PUSH，通过删除表顶端元素来实现 POP。使用链表方式实现的栈又叫动态栈。动态栈有链表的部分特性，即元素与元素之间在物理存储上可以不连续，但是功能有些受限制，动态栈只能在栈顶处进行插入和删除操作，不能在栈尾或栈中间进行插入和删除操作

### 数组实现栈

栈也可以用数组来实现。使用数组方式实现的栈叫静态栈。 

```java

public class ArrayStack {
    // 最大容量
    int maxStack = 0;
    // 索引指针
    int top = -1;
    // 定义一个栈
    int[] stack;

    // 构造器
    public ArrayStack(int maxStack) {
        this.maxStack = maxStack;
        this.stack = new int[maxStack];
    }    

    // 压栈
    public void push(int v) {
        // 压栈， 增加数据，索引+1，然后在索引出赋上压入的值
        this.top += 1; 
        this.stack[this.top] = v;       
    }
    // 弹栈，返回值弹出了什么值，返回值可以用泛型，但是这里为了理解用int即可
    public int pop() {
        // 先把弹出的值保存下来，方便返回，然后索引减一
        int popResult = this.stack[this.top];
        this.top -= 1;
        return popResult;
    }
    public int length() {
        return this.top + 1;
    }
    // 查看
    public void list() {
        int len = this.length();
        for(int i = 0; i < len; i++ ) {
            System.out.printf("stack[%d] = %d", i , this.stack[i]);
        } 
    }
}   
    
```



### 数组实现栈的问题

1. 问题1，PUSH方法的范围限制问题，举例，如果栈里面的数据已经达到最大栈容量了，那么再往里面压栈，就会运行时错误了，称为超出栈容量。
```java 
    public static void main(String[] args) {
        ArrayStack arrayStack = new ArrayStack(3);
        arrayStack.push(1);
        arrayStack.push(2);
        arrayStack.push(3);
        arrayStack.push(4);
    }
```
结果，总是数组索引越界。
```bash 
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 3
	at ArrayStack.push(ArrayStack.java:20)
	at ArrayStack.main(ArrayStack.java:45)
```
2. 问题2，POP方法的范围限制问题，举例，如果栈里面无数据，那么就会造成访问一个索引为负的值，即用不存在的空间，也会运行时错误。
```java 
    public static void main(String[] args) {
        ArrayStack arrayStack = new ArrayStack(3);
        arrayStack.push(1);
        arrayStack.pop();
        arrayStack.pop();
    }
```
结果，总是数组索引越界。
```bash 
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: -1
	at ArrayStack.pop(ArrayStack.java:25)
	at ArrayStack.main(ArrayStack.java:44)
```

解决方案：
1. 在PUSH的时候，判断是否达到最大容量。即增加isFull方法判断是否栈容量已满。
2. 在POP的时候，判断是否为空栈。即增加isEmpty方法判断是否栈为空。

```
public class ArrayStack {
    // 最大容量
    int maxStack = 0;
    // 索引指针
    int top = -1;
    // 定义一个栈
    int[] stack;

    // 构造器
    public ArrayStack(int maxStack) {
        this.maxStack = maxStack;
        this.stack = new int[maxStack];
    }    
    
    // 判断栈为空
    public boolean isEmpty() {
        return this.top == -1;
    }
    // 判断栈已满
    
    public boolean isFull() {
        // 此处不要好奇，如果最大容量this.maxStack为0怎么办，如果为0，那么0 - 1也是等于-1，刚好等于索引值，也证明是栈容量已满。
        return this.top == this.maxStack - 1;
    }    

    // 压栈
    public void push(int v) {
        // 错误优先，提前判断
        if(this.isFull()) {
            throw new RuntimeException("已达到最大容量，无法压栈");
        }
        // 压栈， 增加数据，索引+1，然后在索引出赋上压入的值
        this.top += 1; 
        this.stack[this.top] = v;       
    }
    // 弹栈，返回值弹出了什么值，返回值可以用泛型，但是这里为了理解用int即可
    public int pop() {
        // 错误优先，提前判断为空
        if(this.isEmpty()) {
            throw new RuntimeException("栈为空，无法弹栈");
        }
        // 先把弹出的值保存下来，方便返回，然后索引减一
        int popResult = this.stack[this.top];
        this.top -= 1;
        return popResult;
    }
    public int length() {
        return this.top + 1;
    }
    // 查看
    public void list() {       
        int len = this.length();
        for(int i = 0; i < len; i++ ) {
            System.out.printf("stack[%d] = %d", i , this.stack[i]);
        } 
    }
}   
    
```




[1]: /images/structure/linear01_01.png
[2]: /images/structure/linear01_02.png
[3]: /images/structure/linear01_03.png





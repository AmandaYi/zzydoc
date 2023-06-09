---
displayed_sidebar: MySQL
---

# MySQL子查询

语法

```mysql
语法：select 语句 where 条件 (select … from 表)
```

1. 外面的查询称为父查询，括号中的查询称为子查询
2. 子查询为父查询提供查询条件

## 基本使用子查询

1、查找笔试80分的学生

```mysql
mysql> select * from stuinfo where stuno=(select stuno from stumarks where writtenexam=80);
+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25303 | 李斯文       | 女      |     22 |       2 | 北京           |
+--------+---------+--------+--------+---------+------------+
```

2、查找笔试最高分的学生

```mysql
# 方法一：
mysql> select * from stuinfo where stuno=(select stuno from stumarks order by writtenexam desc limit 1);
+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25303 | 李斯文       | 女      |     22 |       2 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)

# 方法二：
mysql> select * from stuinfo where stuno=(select stuno from stumarks where writtenexam=(select max(writtenexam) from stumarks));
+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25303 | 李斯文       | 女      |     22 |       2 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
```

```
脚下留心：上面的例题，子查询只能返回一个值。如果子查询返回多个值就不能用“=”了,需要用 in
```

## in|not in子查询

用于子查询的返回结果多个值。

1、查找笔试成绩及格的同学

```mysql
mysql> select * from stuinfo where stuno in (select stuno from stumarks where writtenexam>=60);
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           |
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           |
+--------+----------+--------+--------+---------+------------+
3 rows in set (0.00 sec)
```

2、查询不及格的同学

```mysql
mysql> select * from stuinfo where stuno  in (select stuno from stumarks where writtenexam<=60);
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |
+--------+----------+--------+--------+---------+------------+
```

3、查询没有通过的同学（不及格，缺考）

```mysql
mysql> select * from stuinfo where stuno  not in (select stuno from stumarks where writtenexam>=60);
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |
| s25305 | 诸葛丽丽         | 女      |     23 |       7 | 河南           |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |
| s25319 | 梅超风        | 女      |     23 |       5 | 河北          |
+--------+----------+--------+--------+---------+------------+
4 rows in set (0.00 sec)
```

## exists和not exists子查询

1、	如果有人笔试超过80分就显示所有的学生

```mysql
mysql> select * from stuinfo where exists (select * from stumarks where writtenexam>=80);
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           |
| s25305 | 诸葛丽丽         | 女      |     23 |       7 | 河南           |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |
| s25319 | 梅超风        | 女      |     23 |       5 | 河北          |
+--------+----------+--------+--------+---------+------------+
```

2、	如果没有人超过80分就显示所有的学生

```mysql
mysql> select * from stuinfo where not exists (select * from stumarks where writtenexam>=80);
Empty set (0.02 sec)
```

## 子查询分类

1、标量子查询：子查询返回的结果就一个

2、列子查询：子查询返回的结果是一个列表

3、行子查询：子查询返回的结果是一行

例题：查询成绩最高的男生和女生

```mysql
mysql> select stuname,stusex,ch from stu where (stusex,ch) in (select stusex,max(ch) from stu group by stusex);
+----------+--------+------+
| stuname  | stusex | ch   |
+----------+--------+------+
| 争青小子        | 男       |   86 |
| Tabm     | 女      |   88 |
+----------+--------+------+
```

4、表子查询：子查询返回的结果当成一个表

例题：查询成绩最高的男生和女生

```mysql
mysql> select stuname,stusex,ch from (select * from stu order by ch desc) as t group by stusex;
+----------+--------+------+
| stuname  | stusex | ch   |
+----------+--------+------+
| Tabm     | 女      |   88 |
| 争青小子        | 男       |   86 |
+----------+--------+------+
```

```
脚下留心：from后面是一个表，如果子查询的结果当成表来看，必须将子查询的结果取别名。
```

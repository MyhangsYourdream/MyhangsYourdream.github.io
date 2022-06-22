(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{451:function(s,t,a){"use strict";a.r(t);var n=a(24),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"大数据分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大数据分页"}},[s._v("#")]),s._v(" 大数据分页")]),s._v(" "),a("h3",{attrs:{id:"创建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[s._v("#")]),s._v(" 创建表")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("CREATE TABLE  `user_operation_log`   (\n   `id`  INT ( 11 )   NOT NULL  AUTO_INCREMENT,   `user_id`  VARCHAR ( 64 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `ip`  VARCHAR ( 20 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `op_data`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr1`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr2`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr3`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr4`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr5`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr6`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr7`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr8`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr9`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr10`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr11`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   `attr12`  VARCHAR ( 255 )   CHARACTER SET  utf8mb4  COLLATE  utf8mb4_general_ci  NULL DEFAULT NULL,   PRIMARY KEY  ( `id` )   USING BTREE \n)   ENGINE  =  INNODB  AUTO_INCREMENT  =  1  CHARACTER SET  =  utf8mb4  COLLATE  =  utf8mb4_general_ci ROW_FORMAT  =  Dynamic;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"插入数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入数据"}},[s._v("#")]),s._v(" 插入数据")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('DELIMITER ;;\n\nCREATE PROCEDURE  batch_insert_log ( ) BEGIN  DECLARE  i  INT DEFAULT  1;\n\n   DECLARE  userId  INT DEFAULT  10000000;\n\n  SET  @execSql  =   \'INSERT INTO `test`.`user_operation_log`(`user_id`, `ip`, `op_data`, `attr1`, `attr2`, `attr3`, `attr4`, `attr5`, `attr6`, `attr7`, `attr8`, `attr9`, `attr10`, `attr11`, `attr12`) VALUES\';\n\n  SET  @execData  =   \'\';\n\n   WHILE  i <= 10000000   DO   SET  @attr  =   "\'测试很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的属性\'";\n\n   SET  @execData  =   concat(\n@execData,   "(",   userId  +   i,   ", \'10.0.69.175\', \'用户登录操作\'",   ",",   @attr,   ",",   @attr,   ",",   @attr,   ",",   @attr,   ",",   @attr,   ",",   @attr,   ",",   @attr,   ",",   @attr,   ",",   @attr,   ",",   @attr,   ",",   @attr,   ",",   @attr,   ")" \n);\n\n   IF  i  %  1000   =   0    THEN     SET  @stmtSql  =   concat( @execSql,   @execData, ";" );\n\n     PREPARE  stmt  FROM  @stmtSql;\n\n     EXECUTE  stmt;\n\n     DEALLOCATE PREPARE  stmt;\n\n     commit;\n\n     SET  @execData  =   "";\n\n    ELSE     SET  @execData  =   concat( @execData,   "," );\n\n    END IF;\n\n   SET  i = i + 1;\n\n   END WHILE;\nend;\n\n;\n\nDELIMITER ;\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("h2",{attrs:{id:"使用mysql命令执行sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用mysql命令执行sql"}},[s._v("#")]),s._v(" 使用mysql命令执行SQL")]),s._v(" "),a("p",[s._v("mysql命令使用起来比较简单，如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql -h localhost -P "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(" -u root -psecret test_db\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行上面命令后，就会进入SQL交互界面，然后你就可以执行SQL语句了，注意指定密码的方式，"),a("code",[s._v("-p")]),s._v("与"),a("code",[s._v("secret")]),s._v("之间不能有空格。")]),s._v(" "),a("p",[s._v("其它比较有用的选项如下：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("选项")]),s._v(" "),a("th",[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-A")]),s._v(" "),a("td",[s._v("不加载表名、列名等元数据，网络不好时可加快命令启动速度，代价是按Tab键无法自动补齐表名与列名了")])]),s._v(" "),a("tr",[a("td",[s._v("--default-character-set utf8mb4")]),s._v(" "),a("td",[s._v("指定字符集，避免某些环境下的乱码")])]),s._v(" "),a("tr",[a("td",[s._v("-e")]),s._v(" "),a("td",[s._v("指定要执行的SQL，执行完后直接退出，不进入命令交互界面")])]),s._v(" "),a("tr",[a("td",[s._v("-N")]),s._v(" "),a("td",[s._v("查询结果中不展示列名")])]),s._v(" "),a("tr",[a("td",[s._v("-t")]),s._v(" "),a("td",[s._v("查询结果以表格形式输出")])]),s._v(" "),a("tr",[a("td",[s._v("-B")]),s._v(" "),a("td",[s._v("查询结果不以表格形式输出，字段以tab分隔")])]),s._v(" "),a("tr",[a("td",[s._v("-X")]),s._v(" "),a("td",[s._v("查询结果以XML形式输出")])]),s._v(" "),a("tr",[a("td",[s._v("-U")]),s._v(" "),a("td",[s._v("安全地执行查询与更新，比如你操作大表时忘记了加limit这种")])]),s._v(" "),a("tr",[a("td",[s._v("--pager")]),s._v(" "),a("td",[s._v("指定结果分页展示器，默认是标准输出，"),a("code",[s._v("--pager=less")]),s._v("表示使用less作为分页展示器")])])])]),s._v(" "),a("h2",{attrs:{id:"mysql查询优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql查询优化"}},[s._v("#")]),s._v(" mysql查询优化")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select id from test  JOIN ( SELECT id FROM test ORDER BY id  LIMIT 2000000, 100 ) x USING ( id );\nselect id from test where id > (select id from test  limit 2000000, 1) limit 100;\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"mysql备份与恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql备份与恢复"}},[s._v("#")]),s._v(" mysql备份与恢复")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备份 数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/data/backup/aaa.sql"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果目标文件已存在，则删除文件夹后重建")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /home/data/backup/aaa.sql\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql mysqldump "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -uroot -ppassword --tables aaa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/home/data/backup/aaa.sql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除第一行数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1d'")]),s._v(" /home/data/backup/aaa.sql\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1i use test;'")]),s._v(" /home/data/backup/aaa.sql\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#! /bin/bash")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /home/data/backup/aaa.sql mysql:/\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" mysql mysql -uroot -ppassword -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source aaa.sql ;"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
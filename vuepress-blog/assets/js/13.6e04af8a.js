(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{448:function(s,a,t){"use strict";t.r(a);var r=t(24),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"docker-compose配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose配置文件"}},[s._v("#")]),s._v(" docker-compose配置文件")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[s._v("  frp:\n    image: snowdreamtech/frps\n    container_name: frps\n    volumes:\n      - /home/frp/frps.ini:/etc/frp/frps.ini\n    network_mode: host\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"frps-ini配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frps-ini配置文件"}},[s._v("#")]),s._v(" frps.ini配置文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("common"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbind_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7000")]),s._v("\nvhost_http_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),s._v("\nvhost_https_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8089")]),s._v("\ndashboard_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\ndashboard_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7500")]),s._v("\ndashboard_user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" admin\ndashboard_pwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" aA"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7332294195")]),s._v("\nprivilege_token "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" aA"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7332294195")]),s._v("\ntoken "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" aA"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7332294195")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"frpc-ini配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frpc-ini配置文件"}},[s._v("#")]),s._v(" frpc.ini配置文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("common"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nserver_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" vivid1234.f3322.net\nserver_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7000")]),s._v("\nprivilege_token "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" aA"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7332294195")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#log_file = /dev/null")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#log_level = info")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#log_max_days = 3")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#host_header_rewrite = 实际你内网访问的域名，可以供公网的域名不一致，如果一致可以不写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ====================")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webbbb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tcp\nlocal_ip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nlocal_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\ncustom_domains "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" vivid1234.f3322.net\nremote_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8087")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"frpc启动命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frpc启动命令"}},[s._v("#")]),s._v(" frpc启动命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("frps -c /tmp/frp/myfrps.ini "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
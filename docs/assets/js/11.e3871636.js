(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{184:function(e,t,i){"use strict";i.r(t);var s=i(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("The magics for previewing and encoding work like if they were actual console commands.")]),e._v(" "),i("h3",{attrs:{id:"vspreview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vspreview","aria-hidden":"true"}},[e._v("#")]),e._v(" vspreview "),i("Badge",{attrs:{text:"1.2+"}})],1),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),i("p",[e._v("Command:")]),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("Options:")]),e._v(" "),e._m(7),e._v(" "),i("h3",{attrs:{id:"vspipe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vspipe","aria-hidden":"true"}},[e._v("#")]),e._v(" vspipe "),i("Badge",{attrs:{text:"1.2+"}})],1),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("Command:")]),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("Options:")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),i("p",[e._v("Commands:")]),e._v(" "),i("ul",[e._m(13),e._v(" "),i("li",[i("code",[e._v("%diff <clipA>, <clipB>")]),e._v(" "),i("Badge",{attrs:{text:"deprecated",type:"error"}})],1)]),e._v(" "),e._m(14),e._v(" "),i("hr"),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),i("hr"),e._v(" "),i("h3",{attrs:{id:"reattach-id"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#reattach-id","aria-hidden":"true"}},[e._v("#")]),e._v(" "),i("code",[e._v("%reattach [<id>]")]),e._v(" "),i("Badge",{attrs:{text:"1.1+"}})],1),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),i("p",[e._v("Yuuno allows extensive control of your VapourSynth environment.")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),i("p",[e._v("This command creates an isolated core that only exists during the cell the command is executed.\nThis is mostly useless unless you combine it with an encode command.")]),e._v(" "),e._m(27),e._v(" "),i("p",[e._v("Yuuno is capable of running existing vapoursynth scripts from Jupyter.")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),i("p",[e._v("Executes a VapourSynth script inside Jupyter (but not inside your global namespace.")]),e._v(" "),e._m(31),e._v(" "),i("p",[e._v("Executes a VapourSynth script inside Jupyter (but not inside your global namespace.)")]),e._v(" "),i("p",[e._v("It will restore your outputs before script execution and")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Reference")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"load-ext-yuuno"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-ext-yuuno","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("%load_ext yuuno")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This command enables Yuuno.\nWhen you correctly install yuuno, the variables "),t("code",[this._v("vs")]),this._v(" and "),t("code",[this._v("core")]),this._v(" will be added to your local environment.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"magics-for-previewing-and-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#magics-for-previewing-and-encoding","aria-hidden":"true"}},[this._v("#")]),this._v(" Magics for previewing and encoding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("%%vspreview")]),this._v("-magic shows a preview. It will remeber which frame was shown in the last run of this command.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can only use one "),t("code",[this._v("%%vspreview")]),this._v("-instance per Notebook.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("%%vspreview [--main <OUTPUT-ID>] [--diff [<OUTPUT-ID>]] [--reset-core] [--isolate-variables]")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("--main <OUTPUT-ID>")]),e._v(" - This setting defines which output-index is to previewed.")]),e._v(" "),i("li",[i("code",[e._v("--diff [<OUTPUT-ID>]")]),e._v(" - This setting defines which output-index you want to compare the preview with.")]),e._v(" "),i("li",[i("code",[e._v("--reset-core")]),e._v(" - Create a new "),i("code",[e._v("vs.Core")]),e._v("-object before executing the script.")]),e._v(" "),i("li",[i("code",[e._v("--isolate-variables")]),e._v(" - Make sure that changes to variables do not affect the entire console.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("%%vspipe")]),this._v("-magic is a helper for "),t("code",[this._v("%encode")]),this._v(" below. It behaves like "),t("code",[this._v("%%vspreview")]),this._v(" but instead of previewing,\nthe magic will encode the video.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("%%vspipe [--outputindex <OUTPUT-ID>] [OPTIONS] | [<COMMAND>...]")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("--outputindex <OUTPUT-ID>")]),e._v(" - Which output-index should be encoded.")]),e._v(" "),i("li",[i("code",[e._v("--y4m")]),e._v(" - Add YUV4MPEG headers to output")]),e._v(" "),i("li",[i("code",[e._v("--start N")]),e._v(" - Set the output frame range (first frame)")]),e._v(" "),i("li",[i("code",[e._v("--end N")]),e._v(" - Set the output frame range (last frame)")]),e._v(" "),i("li",[i("code",[e._v("--requests N")]),e._v(" - Set the number of concurrent frame requests.")]),e._v(" "),i("li",[i("code",[e._v("--reset-core")]),e._v(" - Create a new "),i("code",[e._v("vs.Core")]),e._v("-object before executing the script.")]),e._v(" "),i("li",[i("code",[e._v("--isolate-core")]),e._v(" - Create a new "),i("code",[e._v("vs.Core")]),e._v("-object that is only running during the encode. Do not use with "),i("code",[e._v("--reset-core")])]),e._v(" "),i("li",[i("code",[e._v("--isolate-variables")]),e._v(" - Make sure that changes to variables do not affect the entire console.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"lower-level-magics-for-previewing-and-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lower-level-magics-for-previewing-and-encoding","aria-hidden":"true"}},[this._v("#")]),this._v(" Lower-Level Magics for Previewing and Encoding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"preview-and-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preview-and-diff","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("%preview")]),this._v(" and "),t("code",[this._v("%diff")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("%preview <clip>, [diff=<clipB>]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This commands shows a preview of the clip.\nWhenn using "),t("code",[this._v("%diff")]),this._v(" or the "),t("code",[this._v("diff")]),this._v("-parameter is given, the comparison-mode is activated.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"encode-and-encode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encode-and-encode","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("%encode")]),this._v(" and "),t("code",[this._v("%%encode")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("%encode <clip> [--y4m] [--multi] <COMMAND> ...")]),t("br"),this._v(" "),t("code",[this._v("%%encode [--y4m] [--multi] <COMMAND> ...")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The line-magic ("),t("code",[this._v("%encode")]),this._v(") will take the given expression and tries to encode the clip."),t("br"),this._v("\nThe cell-magic ("),t("code",[this._v("%%encode")]),this._v(") will take the contents of the cell and will encode the last expression\nthat the cell returns.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("--y4m")]),this._v("-flag tells Yuuno to output Y4M into the processes' stdin. By default it will just return\nraw frames.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, you can only have one encode running at a time. Use "),t("code",[this._v("--multi")]),this._v(" to disable it.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("See "),t("code",[this._v("%reattach")]),this._v(" for viewing a list of current encodes.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This command allows you to reattach to "),t("strong",[this._v("running")]),this._v(" encodes.\nIf you have only one encode running, it will directly attach to to the encode.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Otherwise it will show you a list of "),t("code",[this._v("id")]),this._v(" and some information about the encode.\nUse the ID given by its output to attach to a specific encode.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"controlling-your-vapoursynth-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controlling-your-vapoursynth-environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Controlling your VapourSynth-Environment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"reset-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset-core","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("%reset_core")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By using "),t("code",[this._v("%reset_core")]),this._v(" you tell Yuuno to enable a new vapoursynth-core dismissing the old one.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"isolated-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isolated-core","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("%%isolated_core")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"running-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-scripts","aria-hidden":"true"}},[this._v("#")]),this._v(" Running Scripts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To do that, you can run "),t("code",[this._v("%runvpy")]),this._v(". It will execute the script and return a dict with its outputs while making sure that\nyour previous outputs remain untouched.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you use "),t("code",[this._v("%%vspreview")]),this._v(" or "),t("code",[this._v("%%vspipe")]),this._v(", a far more useful command is the lower-level "),t("code",[this._v("%execvpy")]),this._v("-magic which will not reset your\noutputs after a run. This allows you to run and encode any VapourSynth-Script as if it were a cell in Yuuno.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"execvpy-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execvpy-path","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("%execvpy [<PATH>...]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"runvpy-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runvpy-path","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("%runvpy [<PATH>...]")])])}],!1,null,null,null);r.options.__file="reference.md";t.default=r.exports}}]);
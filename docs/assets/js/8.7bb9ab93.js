(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{181:function(t,e,s){"use strict";s.r(e);var r=s(0),i=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Here is a small list of potentially useful configuration values.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Yuuno for IPython uses the configuration system provided by IPython. This means, the full\nconfiguration of Yuuno is exposed by the configuration system of IPython.")]),t._v(" "),s("p",[t._v("A more detailed explanation is given at the "),s("a",{attrs:{href:"https://ipython.readthedocs.io/en/stable/config/intro.html#python-config-files",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPython Configuration"),s("OutboundLink")],1),t._v(" documentation page.")]),t._v(" "),s("p",[t._v("You can use the configuration file to automatically load Yuuno at startup by adding the following at the bottom of the IPython config file:")]),t._v(" "),t._m(5),s("p",[t._v("Additionally, all configuration for Yuuno is located inside the Yuuno-namespace. For example, you can configure Yuuno to use a Point-resizer\ninstead of Spline36 to convert your clips to rgb by appending this to the IPython config file.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("This section allows you to configure how Yuuno integrates into Jupyter.")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Default: "),s("code",[t._v("True")]),s("br"),t._v(" "),s("Badge",{attrs:{text:"Startup Only",type:"info",vertical:"middle"}}),t._v(" "),s("Badge",{attrs:{text:"VapourSynth >= R44",vertical:"middle"}})],1),t._v(" "),s("p",[t._v("This setting configures if Yuuno can manage multiple cores. This allows Yuuno to behave more like VSEdit.")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("Default: "),s("code",[t._v("True")]),s("br"),t._v(" "),s("Badge",{attrs:{text:"Debug",type:"warn",vertical:"middle"}}),t._v(" "),s("Badge",{attrs:{text:"Startup Only",type:"info",vertical:"middle"}}),t._v(" "),s("Badge",{attrs:{text:"VapourSynth >= R44",vertical:"middle"}}),s("br"),t._v("\nThis setting configures whether Yuuno-Clips are wrapped into their respective environment before showing. Depending on your Yuuno version, this configuration\nmight cause errors when displaying any clips.")],1),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("This section allows you to configure how VapourSynth and Yuuno work with each other.")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("Default: "),s("code",[t._v("False")]),s("br"),t._v(" "),s("Badge",{attrs:{text:"VapourSynth <= R44",type:"error",vertical:"middle"}})],1),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("Configures how large the inline caches should be.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("Configures how many worker-threads VapourSynth will use.")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("Default: "),s("code",[t._v("None")]),s("br"),t._v(" "),s("Badge",{attrs:{text:"Debug",type:"warn",vertical:"middle"}})],1),t._v(" "),s("p",[t._v("Configures how the RGB-planes are extracted by Yuuno.")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("Configures which resizer is to be used for converting from the frame-colorspace to\nRGB24")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("When set to true, Yuuno will try to determine the correct YUV-Matrix by using the frame-props of\nthe frame to display.")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),s("p",[t._v("If Yuuno couldn't determine the correct YUV-Matrix from the frame-props, this value will be used\nas fallback.")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"configuration-locations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-locations","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Locations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ad-hoc-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ad-hoc-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Ad-Hoc configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Jupyter provides a "),e("code",[this._v("%config")]),this._v(" magic which you can use to configure Jupyter.\nYuuno hooks into it so you can configure Yuuno using the same command.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("%config")]),t._v(" will show you a list of config-sections."),s("br"),t._v(" "),s("code",[t._v("%config <SECTION>")]),t._v(" shows you a list of configuration options for that section."),s("br"),t._v(" "),s("code",[t._v("%config <SECTION>.<CONFIG>")]),t._v(" shows you the current value."),s("br"),t._v(" "),s("code",[t._v("%config <SECTION>.<CONFIG>=<VALUE>")]),t._v(" allows you to change the value.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"persistent-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#persistent-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Persistent configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InteractiveShellApp"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extensions"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"yuuno"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Yuuno"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VapourSynth"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resizer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"resize.Point"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"configuration-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-values","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration values")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"yuunoipythonenvironment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yuunoipythonenvironment","aria-hidden":"true"}},[this._v("#")]),this._v(" YuunoIPythonEnvironment")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"use-vsscript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-vsscript","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("use_vsscript")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"no-env-wrap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-env-wrap","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("no_env_wrap")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vapoursynth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vapoursynth","aria-hidden":"true"}},[this._v("#")]),this._v(" VapourSynth")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"core-accept-lowercase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-accept-lowercase","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("core_accept_lowercase")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All plugin names are case-insensitive."),e("br"),this._v("\nThis option is ignored on VapourSynth R45 and onwards.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"core-add-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-add-cache","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("core_add_cache")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default: "),e("code",[this._v("True")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Add a cache to all new VapourSynth-clips. It is never a good idea to set this to "),e("code",[this._v("False")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"core-max-cache-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-max-cache-size","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("core_max_cache_size")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default: "),e("code",[this._v("Not set")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"core-num-threads"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-num-threads","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("core_num_threads")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default: "),e("code",[this._v("Not set")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"merge-bands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merge-bands","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("merge_bands")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"resizer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resizer","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("resizer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default: "),e("code",[this._v("'resize.Spline36'")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"post-processor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-processor","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("post_processor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default: "),e("code",[this._v("None")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set this to a function that takes an "),e("code",[this._v("RGB24")]),this._v("-clip and returns an "),e("code",[this._v("RGB24")]),this._v("-clip. This will be the\nlast function called when converting your clip from your color-space to RGB.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"prefer-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prefer-props","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("prefer_props")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default: "),e("code",[this._v("True")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"yuv-matrix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yuv-matrix","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("yuv_matrix")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default: "),e("code",[this._v("'709'")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"yuunoimageoutput"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yuunoimageoutput","aria-hidden":"true"}},[this._v("#")]),this._v(" YuunoImageOutput")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"icc-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#icc-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("icc_profile")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default: "),e("code",[this._v("'sRGB'")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When outputting "),e("code",[this._v(".png")]),this._v(", Yuuno will insert a color-profile to ensure all browsers display the image\nthe same way.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If it is set to "),e("code",[this._v("sRGB")]),this._v(" it will use sRGB. Otherwise specifiy the path to an ICC Color-Profile.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"zlib-compression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zlib-compression","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("zlib_compression")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default: "),e("code",[this._v("6")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Defines how good the "),e("code",[this._v(".png")]),this._v("-file will be compressed.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("0")]),t._v(" means no compression,")]),t._v(" "),s("li",[s("code",[t._v("1")]),t._v(" is the fastest compression")]),t._v(" "),s("li",[t._v("and "),s("code",[t._v("9")]),t._v(" the slowest.")])])}],!1,null,null,null);i.options.__file="configuration.md";e.default=i.exports}}]);
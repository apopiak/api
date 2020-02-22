(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{444:function(t,e,a){"use strict";a.r(e);var n=a(28),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"runtime-constants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime-constants"}},[t._v("#")]),t._v(" Runtime Constants")]),t._v(" "),a("p",[t._v("Constant queries will introduce you to the concepts behind the types and the interaction of the API with those types. The same concepts are implemented in the remainder of the API - the runtime constants is just the simplest starting point.")]),t._v(" "),a("p",[t._v("For some background: constants are values that are defined in the runtime and used as part of chain operations. These constants can be changed as part of an upgrade.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize the API as per previous sections")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The length of an epoch (session) in Babe")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("babe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("epochDuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The amount required to create a new account")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balances"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("creationFee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The amount required per byte on an extrinsic")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balances"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transactionByteFee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("Since these are constants and defined by the metadata, it is not a call, but rather the values immediately available - as you'll see in subsequent sections, there is no need for "),a("code",[t._v("await")]),t._v(" on these, it immediately returns the type and value for you to work with.")]),t._v(" "),a("h2",{attrs:{id:"the-api-and-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-api-and-types"}},[t._v("#")]),t._v(" The API and types")]),t._v(" "),a("p",[t._v("There is some magic applied by the API. For instance as the "),a("code",[t._v("createFee")]),t._v(" result is returned, the API knows the expected type and makes a "),a("code",[t._v("Balance")]),t._v(" object available, hence the "),a("code",[t._v("toNumber")]),t._v(". This result mapping is consistent in retrieving constants, making queries or even sending transactions:")]),t._v(" "),a("ul",[a("li",[t._v("when values are passed to the API, the API will convert whatever is provided into the correct type as required by the call")]),t._v(" "),a("li",[t._v("when a value is retrieved, the API will provide an object of the correct type that wraps this value")])]),t._v(" "),a("p",[t._v("From the last point, this means that a "),a("code",[t._v("Balance")]),t._v(" will be returned as a number object extending "),a("a",{attrs:{href:"https://github.com/indutny/bn.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bn.js"),a("OutboundLink")],1),t._v(". In a later section we will go through a breakdown of all the commonly-used types and all "),a("RouterLink",{attrs:{to:"/start/types.basics.html"}},[t._v("the basics available on types")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"making-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#making-queries"}},[t._v("#")]),t._v(" Making queries")]),t._v(" "),a("p",[t._v("In the next section we will take an initial dive into "),a("RouterLink",{attrs:{to:"/start/api.query.html"}},[t._v("chain state and state queries")]),t._v(", allowing the use of the API to retrieve information contained in the chain state.")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);
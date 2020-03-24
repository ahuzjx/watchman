(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(6),i=(t(0),t(171)),o={id:"bser",title:"BSER Binary Protocol"},l={id:"bser",title:"BSER Binary Protocol",description:"The basic JSON protocol in watchman allows quick and easy integration.",source:"@site/docs/BSER.md",permalink:"/watchman/docs/bser",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/BSER.md",sidebar:"sidebar",previous:{title:"type",permalink:"/watchman/docs/type"},next:{title:"Case-Insensitivity",permalink:"/watchman/docs/casefolding"}},c=[{value:"PDU",id:"pdu",children:[]},{value:"Arrays",id:"arrays",children:[]},{value:"Objects",id:"objects",children:[]},{value:"Strings",id:"strings",children:[{value:"Encoding",id:"encoding",children:[]}]},{value:"Integers",id:"integers",children:[]},{value:"Real",id:"real",children:[]},{value:"Boolean",id:"boolean",children:[]},{value:"Null",id:"null",children:[]},{value:"Array of Templated Objects",id:"array-of-templated-objects",children:[]}],b={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The basic JSON protocol in watchman allows quick and easy integration.\nApplications with higher performance requirements may want to consider the\nbinary protocol instead."),Object(i.b)("p",null,'The binary protocol is enabled by the client sending the byte sequence\n"\\x00x\\x01".'),Object(i.b)("h2",{id:"pdu"},"PDU"),Object(i.b)("p",null,"A PDU is prefixed by its length expressed as an encoded integer.  This allows\nthe peer to determine how much storage is required to read and decode it."),Object(i.b)("h2",{id:"arrays"},"Arrays"),Object(i.b)("p",null,"Arrays are indicated by a ",Object(i.b)("inlineCode",{parentName:"p"},"0x00")," byte value followed by an integer value to\nindicate how many items follow.  Then each item is encoded one after the other."),Object(i.b)("h2",{id:"objects"},"Objects"),Object(i.b)("p",null,"Objects are indicated by a ",Object(i.b)("inlineCode",{parentName:"p"},"0x01")," byte value followed by an integer value to\nindicate the number of properties in the object.  Then each key/value pair is\nencoded one after the other."),Object(i.b)("h2",{id:"strings"},"Strings"),Object(i.b)("p",null,"Strings are indicated by a ",Object(i.b)("inlineCode",{parentName:"p"},"0x02")," byte value followed by an integer value to\nindicate the number of bytes in the string, followed by the bytes of the\nstring."),Object(i.b)("h3",{id:"encoding"},"Encoding"),Object(i.b)("p",null,"Unlike JSON, strings are not defined as having any particular encoding; they\nare transmitted as binary strings.  This is because the underlying filesystem\nAPIs don't define any particular encoding for names."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Exception:")," Keys in objects that are defined by watchman commands are always\nASCII. In general, keys in objects are always UTF-8."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Rationale:")," Several programming languages like Python 3 expect all text to be\nin a particular encoding and make it inconvenient to pass in bytestrings or\nother encodings. Also, the primary purpose of not defining an encoding is that\nfilenames don't always have one, and filenames are unlikely to show up as keys."),Object(i.b)("h2",{id:"integers"},"Integers"),Object(i.b)("p",null,"All integers are signed and transmitted in the host byte order of the system\nrunning the watchman daemon."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0x03")," indicates an int8_t.  It is followed by the int8_t value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0x04")," indicates an int16_t. It is followed by the int16_t value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0x05")," indicates an int32_t. It is followed by the int32_t value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0x06")," indicates an int64_t. It is followed by the int64_t value.")),Object(i.b)("h2",{id:"real"},"Real"),Object(i.b)("p",null,"A real number is indicated by a ",Object(i.b)("inlineCode",{parentName:"p"},"0x07")," byte followed by 8 bytes of double value."),Object(i.b)("h2",{id:"boolean"},"Boolean"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0x08")," indicates boolean true"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0x09")," indicates boolean false")),Object(i.b)("h2",{id:"null"},"Null"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"0x0a")," indicates the null value"),Object(i.b)("h2",{id:"array-of-templated-objects"},"Array of Templated Objects"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"0x0b")," indicates a compact array of objects follows.  Some of the bigger\ndatastructures returned by watchman are tabular data expressed as an array\nof objects.  This serialization type factors out the repeated object keys\ninto a header array listing the keys, followed by an array containing\nall the values of the objects."),Object(i.b)("p",null,"To represent missing keys in templated arrays, the ",Object(i.b)("inlineCode",{parentName:"p"},"0x0c")," encoding value may\nbe present.  If encountered it is interpreted as meaning that there is no value\nfor the key that would have been decoded in this position.  This is distinct\nfrom the null value."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[\n   {"name": "fred", "age": 20},\n   {"name": "pete", "age": 30},\n   {"age": 25 },\n]\n')),Object(i.b)("p",null,"is represented similar to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'["name", "age"],\n[\n  "fred", 20,\n  "pete", 30,\n  0x0c,   25\n]\n')),Object(i.b)("p",null,"The precise sequence is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'0b          template\n00          array     -- start prop names\n0302        int, 2    -- two prop names\n02          string    -- first prop "name"\n0304        int, 4\n6e616d65    "name"\n02          string    -- 2nd prop "age"\n0303        int, 3\n616765      "age"\n0303        int, 3    -- there are 3 objects\n02          string    -- object 1, prop 1 name=fred\n0304        int, 4\n66726564    "fred"\n0314        int 0x14  -- object 1, prop 2 age=20\n02          string    -- object 2, prop 1 name=pete\n0304        int 4\n70657465    "pete"\n031e        int, 0x1e -- object 2, prop 2 age=30\n0c          skip      -- object 3, prop 1, not set\n0319        int, 0x19 -- object 3, prop 2 age=25\n')))}s.isMDXComponent=!0},171:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},d=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return t?r.a.createElement(m,l({ref:n},b,{components:t})):r.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
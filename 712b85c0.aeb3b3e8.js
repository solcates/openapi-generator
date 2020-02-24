(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{188:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return i}));var n=a(1),b=a(9),r=(a(0),a(297)),l={title:"Config Options for clojure",sidebar_label:"clojure"},c={id:"generators/clojure",title:"Config Options for clojure",description:"| Option | Description | Values | Default |",source:"@site/../docs/generators/clojure.md",permalink:"/docs/generators/clojure",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/generators/clojure.md",lastUpdatedBy:"William Cheng",lastUpdatedAt:1581597705,sidebar_label:"clojure"},O=[{value:"IMPORT MAPPING",id:"import-mapping",children:[]},{value:"INSTANTIATION TYPES",id:"instantiation-types",children:[]},{value:"LANGUAGE PRIMITIVES",id:"language-primitives",children:[]},{value:"RESERVED WORDS",id:"reserved-words",children:[]},{value:"FEATURE SET",id:"feature-set",children:[{value:"Client Modification Feature",id:"client-modification-feature",children:[]},{value:"Data Type Feature",id:"data-type-feature",children:[]},{value:"Documentation Feature",id:"documentation-feature",children:[]},{value:"Global Feature",id:"global-feature",children:[]},{value:"Parameter Feature",id:"parameter-feature",children:[]},{value:"Schema Support Feature",id:"schema-support-feature",children:[]},{value:"Security Feature",id:"security-feature",children:[]},{value:"Wire Format Feature",id:"wire-format-feature",children:[]}]}],j={rightToc:O};function i(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Values"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allowUnicodeIdentifiers"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean, toggles whether unicode identifiers are allowed in names or not, default is false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"baseNamespace"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the base/top namespace (Default: generated from projectName)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ensureUniqueParams"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether to ensure parameter names are unique in an operation (rename parameters that are not)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"prependFormOrBodyParameters"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add form or body parameters to the beginning of the parameter list."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"projectDescription"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description of the project (Default: using info.description or ",'"',"Client library of ","<","projectName",">",'"',")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"projectLicenseName"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name of the license the project uses (Default: using info.license.name or not included in project.clj)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"projectLicenseUrl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL of the license the project uses (Default: using info.license.url or not included in project.clj)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"projectName"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name of the project (Default: generated from info.title or ",'"',"openapi-clj-client",'"',")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"projectUrl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL of the project (Default: using info.contact.url or not included in project.clj)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"projectVersion"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"version of the project (Default: using info.version or ",'"',"1.0.0",'"',")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sortModelPropertiesByRequiredFlag"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sort model properties to place required parameters before optional parameters."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sortParamsByRequiredFlag"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sort method arguments to place required parameters before optional parameters."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("h2",{id:"import-mapping"},"IMPORT MAPPING"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Imports"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.util.List")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayList"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.util.ArrayList")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BigDecimal"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.math.BigDecimal")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.util.Date")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DateTime"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"org.joda.time.*")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.io.File")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HashMap"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.util.HashMap")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.util.*")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LocalDate"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"org.joda.time.*")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LocalDateTime"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"org.joda.time.*")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LocalTime"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"org.joda.time.*")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Map"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.util.Map")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.util.*")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timestamp"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.sql.Timestamp")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.net.URI")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UUID"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"java.util.UUID")))),Object(r.b)("h2",{id:"instantiation-types"},"INSTANTIATION TYPES"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Instantiated By"))),Object(r.b)("tbody",{parentName:"table"})),Object(r.b)("h2",{id:"language-primitives"},"LANGUAGE PRIMITIVES"),Object(r.b)("ul",{class:"column-ul"}),Object(r.b)("h2",{id:"reserved-words"},"RESERVED WORDS"),Object(r.b)("ul",{class:"column-ul"}),Object(r.b)("h2",{id:"feature-set"},"FEATURE SET"),Object(r.b)("h3",{id:"client-modification-feature"},"Client Modification Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasePath"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Authorizations"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UserAgent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(r.b)("h3",{id:"data-type-feature"},"Data Type Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Int32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Int64"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Float"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Double"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decimal"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Byte"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Binary"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DateTime"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maps"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CollectionFormat"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CollectionFormatMulti"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfEnum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfModel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfPrimitives"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfModel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfEnum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfEnum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfModel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfPrimitives"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfModel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfEnum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(r.b)("h3",{id:"documentation-feature"},"Documentation Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Readme"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Model"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Api"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(r.b)("h3",{id:"global-feature"},"Global Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Host"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasePath"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Info"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Schemes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PartialSchemes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Consumes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Produces"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ExternalDocumentation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Examples"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XMLStructureDefinitions"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MultiServer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ParameterizedServer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ParameterStyling"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callbacks"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LinkObjects"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(r.b)("h3",{id:"parameter-feature"},"Parameter Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Query"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Header"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FormUnencoded"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FormMultipart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cookie"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(r.b)("h3",{id:"schema-support-feature"},"Schema Support Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simple"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Composite"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Polymorphism"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Union"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(r.b)("h3",{id:"security-feature"},"Security Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasicAuth"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ApiKey"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OpenIDConnect"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BearerToken"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_Implicit"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_ClientCredentials"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_AuthorizationCode"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))),Object(r.b)("h3",{id:"wire-format-feature"},"Wire Format Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XML"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PROTOBUF"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))))}i.isMDXComponent=!0},297:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return u}));var n=a(0),b=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var j=b.a.createContext({}),i=function(t){var e=b.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):c({},e,{},t)),a},p=function(t){var e=i(t.components);return b.a.createElement(j.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},d=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),p=i(a),d=n,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return a?b.a.createElement(u,c({ref:e},j,{components:a})):b.a.createElement(u,c({ref:e},j))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var j=2;j<r;j++)l[j]=a[j];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
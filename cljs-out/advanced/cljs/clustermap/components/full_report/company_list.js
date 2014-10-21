// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs54862 = (function (){var G__54863 = type;var G__54864 = first_obj;return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(G__54863,G__54864) : link_fn.call(null,G__54863,G__54864));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs54862))?sablono.interpreter.attributes(attrs54862):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs54862))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54865 = {"href": owner_path};var G__54866 = "\u00A0(more...)";return React.DOM.a(G__54865,G__54866);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54862),(function (){var G__54867 = {"href": owner_path};var G__54868 = "\u00A0(more...)";return React.DOM.a(G__54867,G__54868);
})()], null))));
} else
{var G__54869 = type;var G__54870 = first_obj;return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(G__54869,G__54870) : link_fn.call(null,G__54869,G__54870));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{var G__54879 = {"className": "icon-positive"};return React.DOM.i(G__54879);
} else
{if((value < (0)))
{var G__54882 = {"className": "icon-negative"};return React.DOM.i(G__54882);
} else
{return null;

}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__54883){var map__54939 = p__54883;var map__54939__$1 = ((cljs.core.seq_QMARK_(map__54939))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54939):map__54939);var opts = map__54939__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54939__$1,cljs.core.constant$keyword$1496);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54939__$1,cljs.core.constant$keyword$1497);var company_path = (function (){var G__54940 = cljs.core.constant$keyword$1286;var G__54941 = company;return (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(G__54940,G__54941) : path_fn.call(null,G__54940,G__54941));
})();if(typeof clustermap.components.full_report.company_list.t54942 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t54942 = (function (company_path,link_fn,path_fn,opts,map__54939,p__54883,owner,company,portfolio_company,meta54943){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__54939 = map__54939;
this.p__54883 = p__54883;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta54943 = meta54943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t54942.cljs$lang$type = true;
clustermap.components.full_report.company_list.t54942.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t54942";
clustermap.components.full_report.company_list.t54942.cljs$lang$ctorPrWriter = ((function (company_path,map__54939,map__54939__$1,opts,path_fn,link_fn){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.full-report.company-list/t54942");
});})(company_path,map__54939,map__54939__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t54942.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t54942.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__54939,map__54939__$1,opts,path_fn,link_fn){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var G__54952 = null;var G__54953 = (function (){var attrs54945 = (function (){var G__54960 = cljs.core.constant$keyword$1286;var G__54961 = self__.company;return (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(G__54960,G__54961) : self__.link_fn.call(null,G__54960,G__54961));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs54945))?sablono.interpreter.attributes(attrs54945):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs54945))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54945)], null))));
})();var G__54954 = (function (){var attrs54946 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1287,cljs.core.constant$keyword$1498.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs54946))?sablono.interpreter.attributes(attrs54946):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs54946))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54946)], null))));
})();var G__54955 = (function (){var attrs54947 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1288,(function (){var G__54962 = self__.company;var G__54962__$1 = (((G__54962 == null))?null:cljs.core.constant$keyword$1157.cljs$core$IFn$_invoke$arity$1(G__54962));var G__54962__$2 = (((G__54962__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__54962,G__54962__$1,G__54952,G__54953,G__54954,this__10071__auto____$1,company_path,map__54939,map__54939__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$1499.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__54962,G__54962__$1,G__54952,G__54953,G__54954,this__10071__auto____$1,company_path,map__54939,map__54939__$1,opts,path_fn,link_fn))
,G__54962__$1));return G__54962__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs54947))?sablono.interpreter.attributes(attrs54947):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs54947))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54947)], null))));
})();var G__54956 = (function (){var attrs54948 = (function (){var G__54963 = cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(self__.company);var G__54964 = cljs.core.constant$keyword$1315;var G__54965 = (2);var G__54966 = cljs.core.constant$keyword$1111;var G__54967 = "-";return (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(G__54963,G__54964,G__54965,G__54966,G__54967) : clustermap.formats.money.fmoney.call(null,G__54963,G__54964,G__54965,G__54966,G__54967));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs54948))?sablono.interpreter.attributes(attrs54948):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs54948))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54968 = null;var G__54969 = "\u00A0(";var G__54970 = sablono.interpreter.interpret((function (){var or__3637__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "no info";
}
})());var G__54971 = ")";return React.DOM.small(G__54968,G__54969,G__54970,G__54971);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54948),(function (){var G__54972 = null;var G__54973 = "\u00A0(";var G__54974 = sablono.interpreter.interpret((function (){var or__3637__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "no info";
}
})());var G__54975 = ")";return React.DOM.small(G__54972,G__54973,G__54974,G__54975);
})()], null))));
})();var G__54957 = (function (){var attrs54949 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$1502.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs54949))?sablono.interpreter.attributes(attrs54949):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs54949))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54949)], null))));
})();var G__54958 = (function (){var attrs54950 = (function (){var G__54976 = cljs.core.constant$keyword$1502.cljs$core$IFn$_invoke$arity$1(self__.company);var G__54977 = cljs.core.constant$keyword$1315;var G__54978 = (2);var G__54979 = cljs.core.constant$keyword$1111;var G__54980 = "-";return (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(G__54976,G__54977,G__54978,G__54979,G__54980) : clustermap.formats.money.fmoney.call(null,G__54976,G__54977,G__54978,G__54979,G__54980));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs54950))?sablono.interpreter.attributes(attrs54950):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs54950))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54950)], null))));
})();var G__54959 = (function (){var attrs54951 = (function (){var G__54981 = cljs.core.constant$keyword$1503.cljs$core$IFn$_invoke$arity$1(self__.company);var G__54982 = cljs.core.constant$keyword$1317;var G__54983 = (0);var G__54984 = cljs.core.constant$keyword$1111;var G__54985 = "-";return (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(G__54981,G__54982,G__54983,G__54984,G__54985) : clustermap.formats.number.fnum.call(null,G__54981,G__54982,G__54983,G__54984,G__54985));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs54951))?sablono.interpreter.attributes(attrs54951):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs54951))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54986 = null;var G__54987 = "\u00A0(";var G__54988 = sablono.interpreter.interpret((function (){var or__3637__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "no info";
}
})());var G__54989 = ")";return React.DOM.small(G__54986,G__54987,G__54988,G__54989);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54951),(function (){var G__54990 = null;var G__54991 = "\u00A0(";var G__54992 = sablono.interpreter.interpret((function (){var or__3637__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "no info";
}
})());var G__54993 = ")";return React.DOM.small(G__54990,G__54991,G__54992,G__54993);
})()], null))));
})();return React.DOM.tr(G__54952,G__54953,G__54954,G__54955,G__54956,G__54957,G__54958,G__54959);
});})(company_path,map__54939,map__54939__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t54942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__54939,map__54939__$1,opts,path_fn,link_fn){
return (function (_54944){var self__ = this;
var _54944__$1 = this;return self__.meta54943;
});})(company_path,map__54939,map__54939__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t54942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__54939,map__54939__$1,opts,path_fn,link_fn){
return (function (_54944,meta54943__$1){var self__ = this;
var _54944__$1 = this;return (new clustermap.components.full_report.company_list.t54942(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__54939,self__.p__54883,self__.owner,self__.company,self__.portfolio_company,meta54943__$1));
});})(company_path,map__54939,map__54939__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t54942 = ((function (company_path,map__54939,map__54939__$1,opts,path_fn,link_fn){
return (function __GT_t54942(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__54939__$2,p__54883__$1,owner__$1,company__$1,portfolio_company__$1,meta54943){return (new clustermap.components.full_report.company_list.t54942(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__54939__$2,p__54883__$1,owner__$1,company__$1,portfolio_company__$1,meta54943));
});})(company_path,map__54939,map__54939__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t54942(company_path,link_fn,path_fn,opts,map__54939__$1,p__54883,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1312);if(typeof clustermap.components.full_report.company_list.t55054 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t55054 = (function (comm,opts,owner,companies,company_list,meta55055){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta55055 = meta55055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t55054.cljs$lang$type = true;
clustermap.components.full_report.company_list.t55054.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t55054";
clustermap.components.full_report.company_list.t55054.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.full-report.company-list/t55054");
});})(comm))
;
clustermap.components.full_report.company_list.t55054.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t55054.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs55057 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1504);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs55057))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs55057], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55057))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55074 = {"className": "table-responsive"};var G__55075 = (function (){var G__55076 = {"className": "table"};var G__55077 = (function (){var G__55079 = null;var G__55080 = (function (){var G__55081 = null;var G__55082 = (function (){var attrs55058 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1504,"Investor-backed company",cljs.core.constant$keyword$1274);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs55058))?sablono.interpreter.attributes(attrs55058):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55058))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55058)], null))));
})();var G__55083 = (function (){var G__55088 = null;var G__55089 = "Investor";return React.DOM.th(G__55088,G__55089);
})();var G__55084 = (function (){var G__55090 = null;var G__55091 = "Constituency";return React.DOM.th(G__55090,G__55091);
})();var G__55085 = (function (){var attrs55063 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1504,"Revenue",cljs.core.constant$keyword$1500);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs55063))?sablono.interpreter.attributes(attrs55063):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55063))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55063)], null))));
})();var G__55086 = (function (){var G__55092 = {"colSpan": "2"};var G__55093 = sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1504,"Rev. change",cljs.core.constant$keyword$1502));return React.DOM.th(G__55092,G__55093);
})();var G__55087 = (function (){var attrs55064 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1504,"Employees",cljs.core.constant$keyword$1503);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs55064))?sablono.interpreter.attributes(attrs55064):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55064))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55064)], null))));
})();return React.DOM.tr(G__55081,G__55082,G__55083,G__55084,G__55085,G__55086,G__55087);
})();return React.DOM.thead(G__55079,G__55080);
})();var G__55078 = (function (){var attrs55065 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1289,cljs.core.constant$keyword$1246,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs55065))?sablono.interpreter.attributes(attrs55065):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55065))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55065)], null))));
})();return React.DOM.table(G__55076,G__55077,G__55078);
})();return React.DOM.div(G__55074,G__55075);
})(),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1504))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55057),(function (){var G__55094 = {"className": "table-responsive"};var G__55095 = (function (){var G__55096 = {"className": "table"};var G__55097 = (function (){var G__55099 = null;var G__55100 = (function (){var G__55101 = null;var G__55102 = (function (){var attrs55066 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1504,"Investor-backed company",cljs.core.constant$keyword$1274);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs55066))?sablono.interpreter.attributes(attrs55066):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55066))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55066)], null))));
})();var G__55103 = (function (){var G__55108 = null;var G__55109 = "Investor";return React.DOM.th(G__55108,G__55109);
})();var G__55104 = (function (){var G__55110 = null;var G__55111 = "Constituency";return React.DOM.th(G__55110,G__55111);
})();var G__55105 = (function (){var attrs55071 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1504,"Revenue",cljs.core.constant$keyword$1500);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs55071))?sablono.interpreter.attributes(attrs55071):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55071))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55071)], null))));
})();var G__55106 = (function (){var G__55112 = {"colSpan": "2"};var G__55113 = sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1504,"Rev. change",cljs.core.constant$keyword$1502));return React.DOM.th(G__55112,G__55113);
})();var G__55107 = (function (){var attrs55072 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1504,"Employees",cljs.core.constant$keyword$1503);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs55072))?sablono.interpreter.attributes(attrs55072):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55072))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55072)], null))));
})();return React.DOM.tr(G__55101,G__55102,G__55103,G__55104,G__55105,G__55106,G__55107);
})();return React.DOM.thead(G__55099,G__55100);
})();var G__55098 = (function (){var attrs55073 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1289,cljs.core.constant$keyword$1246,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs55073))?sablono.interpreter.attributes(attrs55073):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55073))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55073)], null))));
})();return React.DOM.table(G__55096,G__55097,G__55098);
})();return React.DOM.div(G__55094,G__55095);
})(),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1504))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t55054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_55056){var self__ = this;
var _55056__$1 = this;return self__.meta55055;
});})(comm))
;
clustermap.components.full_report.company_list.t55054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_55056,meta55055__$1){var self__ = this;
var _55056__$1 = this;return (new clustermap.components.full_report.company_list.t55054(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta55055__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t55054 = ((function (comm){
return (function __GT_t55054(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta55055){return (new clustermap.components.full_report.company_list.t55054(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta55055));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t55054(comm,opts,owner,companies,company_list,null));
});

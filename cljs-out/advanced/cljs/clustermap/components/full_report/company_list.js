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
{var attrs71921 = (function (){var G__71922 = type;var G__71923 = first_obj;return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(G__71922,G__71923) : link_fn.call(null,G__71922,G__71923));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs71921))?sablono.interpreter.attributes(attrs71921):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs71921))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71924 = {"href": owner_path};var G__71925 = "\u00A0(more...)";return React.DOM.a(G__71924,G__71925);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs71921),(function (){var G__71926 = {"href": owner_path};var G__71927 = "\u00A0(more...)";return React.DOM.a(G__71926,G__71927);
})()], null))));
} else
{var G__71928 = type;var G__71929 = first_obj;return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(G__71928,G__71929) : link_fn.call(null,G__71928,G__71929));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{var G__71938 = {"className": "icon-positive"};return React.DOM.i(G__71938);
} else
{if((value < (0)))
{var G__71941 = {"className": "icon-negative"};return React.DOM.i(G__71941);
} else
{return null;

}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__71942){var map__71998 = p__71942;var map__71998__$1 = ((cljs.core.seq_QMARK_(map__71998))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71998):map__71998);var opts = map__71998__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71998__$1,cljs.core.constant$keyword$1491);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71998__$1,cljs.core.constant$keyword$1492);var company_path = (function (){var G__71999 = cljs.core.constant$keyword$1286;var G__72000 = company;return (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(G__71999,G__72000) : path_fn.call(null,G__71999,G__72000));
})();if(typeof clustermap.components.full_report.company_list.t72001 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t72001 = (function (company_path,link_fn,path_fn,opts,map__71998,p__71942,owner,company,portfolio_company,meta72002){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__71998 = map__71998;
this.p__71942 = p__71942;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta72002 = meta72002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t72001.cljs$lang$type = true;
clustermap.components.full_report.company_list.t72001.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t72001";
clustermap.components.full_report.company_list.t72001.cljs$lang$ctorPrWriter = ((function (company_path,map__71998,map__71998__$1,opts,path_fn,link_fn){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.full-report.company-list/t72001");
});})(company_path,map__71998,map__71998__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t72001.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t72001.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__71998,map__71998__$1,opts,path_fn,link_fn){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var G__72011 = null;var G__72012 = (function (){var attrs72004 = (function (){var G__72019 = cljs.core.constant$keyword$1286;var G__72020 = self__.company;return (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(G__72019,G__72020) : self__.link_fn.call(null,G__72019,G__72020));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs72004))?sablono.interpreter.attributes(attrs72004):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72004))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72004)], null))));
})();var G__72013 = (function (){var attrs72005 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1287,cljs.core.constant$keyword$1493.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs72005))?sablono.interpreter.attributes(attrs72005):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72005))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72005)], null))));
})();var G__72014 = (function (){var attrs72006 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1288,(function (){var G__72021 = self__.company;var G__72021__$1 = (((G__72021 == null))?null:cljs.core.constant$keyword$1157.cljs$core$IFn$_invoke$arity$1(G__72021));var G__72021__$2 = (((G__72021__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__72021,G__72021__$1,G__72011,G__72012,G__72013,this__10071__auto____$1,company_path,map__71998,map__71998__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$1494.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__72021,G__72021__$1,G__72011,G__72012,G__72013,this__10071__auto____$1,company_path,map__71998,map__71998__$1,opts,path_fn,link_fn))
,G__72021__$1));return G__72021__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs72006))?sablono.interpreter.attributes(attrs72006):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72006))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72006)], null))));
})();var G__72015 = (function (){var attrs72007 = (function (){var G__72022 = cljs.core.constant$keyword$1495.cljs$core$IFn$_invoke$arity$1(self__.company);var G__72023 = cljs.core.constant$keyword$1315;var G__72024 = (2);var G__72025 = cljs.core.constant$keyword$1111;var G__72026 = "-";return (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(G__72022,G__72023,G__72024,G__72025,G__72026) : clustermap.formats.money.fmoney.call(null,G__72022,G__72023,G__72024,G__72025,G__72026));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs72007))?sablono.interpreter.attributes(attrs72007):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72007))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72027 = null;var G__72028 = "\u00A0(";var G__72029 = sablono.interpreter.interpret((function (){var or__3637__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1496.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "no info";
}
})());var G__72030 = ")";return React.DOM.small(G__72027,G__72028,G__72029,G__72030);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72007),(function (){var G__72031 = null;var G__72032 = "\u00A0(";var G__72033 = sablono.interpreter.interpret((function (){var or__3637__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1496.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "no info";
}
})());var G__72034 = ")";return React.DOM.small(G__72031,G__72032,G__72033,G__72034);
})()], null))));
})();var G__72016 = (function (){var attrs72008 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$1497.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs72008))?sablono.interpreter.attributes(attrs72008):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72008))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72008)], null))));
})();var G__72017 = (function (){var attrs72009 = (function (){var G__72035 = cljs.core.constant$keyword$1497.cljs$core$IFn$_invoke$arity$1(self__.company);var G__72036 = cljs.core.constant$keyword$1315;var G__72037 = (2);var G__72038 = cljs.core.constant$keyword$1111;var G__72039 = "-";return (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(G__72035,G__72036,G__72037,G__72038,G__72039) : clustermap.formats.money.fmoney.call(null,G__72035,G__72036,G__72037,G__72038,G__72039));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs72009))?sablono.interpreter.attributes(attrs72009):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72009))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72009)], null))));
})();var G__72018 = (function (){var attrs72010 = (function (){var G__72040 = cljs.core.constant$keyword$1498.cljs$core$IFn$_invoke$arity$1(self__.company);var G__72041 = cljs.core.constant$keyword$1317;var G__72042 = (0);var G__72043 = cljs.core.constant$keyword$1111;var G__72044 = "-";return (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(G__72040,G__72041,G__72042,G__72043,G__72044) : clustermap.formats.number.fnum.call(null,G__72040,G__72041,G__72042,G__72043,G__72044));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs72010))?sablono.interpreter.attributes(attrs72010):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72010))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72045 = null;var G__72046 = "\u00A0(";var G__72047 = sablono.interpreter.interpret((function (){var or__3637__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1496.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "no info";
}
})());var G__72048 = ")";return React.DOM.small(G__72045,G__72046,G__72047,G__72048);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72010),(function (){var G__72049 = null;var G__72050 = "\u00A0(";var G__72051 = sablono.interpreter.interpret((function (){var or__3637__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1496.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "no info";
}
})());var G__72052 = ")";return React.DOM.small(G__72049,G__72050,G__72051,G__72052);
})()], null))));
})();return React.DOM.tr(G__72011,G__72012,G__72013,G__72014,G__72015,G__72016,G__72017,G__72018);
});})(company_path,map__71998,map__71998__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t72001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__71998,map__71998__$1,opts,path_fn,link_fn){
return (function (_72003){var self__ = this;
var _72003__$1 = this;return self__.meta72002;
});})(company_path,map__71998,map__71998__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t72001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__71998,map__71998__$1,opts,path_fn,link_fn){
return (function (_72003,meta72002__$1){var self__ = this;
var _72003__$1 = this;return (new clustermap.components.full_report.company_list.t72001(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__71998,self__.p__71942,self__.owner,self__.company,self__.portfolio_company,meta72002__$1));
});})(company_path,map__71998,map__71998__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t72001 = ((function (company_path,map__71998,map__71998__$1,opts,path_fn,link_fn){
return (function __GT_t72001(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__71998__$2,p__71942__$1,owner__$1,company__$1,portfolio_company__$1,meta72002){return (new clustermap.components.full_report.company_list.t72001(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__71998__$2,p__71942__$1,owner__$1,company__$1,portfolio_company__$1,meta72002));
});})(company_path,map__71998,map__71998__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t72001(company_path,link_fn,path_fn,opts,map__71998__$1,p__71942,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1312);if(typeof clustermap.components.full_report.company_list.t72113 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t72113 = (function (comm,opts,owner,companies,company_list,meta72114){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta72114 = meta72114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t72113.cljs$lang$type = true;
clustermap.components.full_report.company_list.t72113.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t72113";
clustermap.components.full_report.company_list.t72113.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.full-report.company-list/t72113");
});})(comm))
;
clustermap.components.full_report.company_list.t72113.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t72113.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs72116 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1499);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs72116))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs72116], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72116))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72133 = {"className": "table-responsive"};var G__72134 = (function (){var G__72135 = {"className": "table"};var G__72136 = (function (){var G__72138 = null;var G__72139 = (function (){var G__72140 = null;var G__72141 = (function (){var attrs72117 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1499,"Investor-backed company",cljs.core.constant$keyword$1274);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs72117))?sablono.interpreter.attributes(attrs72117):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72117))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72117)], null))));
})();var G__72142 = (function (){var G__72147 = null;var G__72148 = "Investor";return React.DOM.th(G__72147,G__72148);
})();var G__72143 = (function (){var G__72149 = null;var G__72150 = "Constituency";return React.DOM.th(G__72149,G__72150);
})();var G__72144 = (function (){var attrs72122 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1499,"Revenue",cljs.core.constant$keyword$1495);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs72122))?sablono.interpreter.attributes(attrs72122):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72122))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72122)], null))));
})();var G__72145 = (function (){var G__72151 = {"colSpan": "2"};var G__72152 = sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1499,"Rev. change",cljs.core.constant$keyword$1497));return React.DOM.th(G__72151,G__72152);
})();var G__72146 = (function (){var attrs72123 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1499,"Employees",cljs.core.constant$keyword$1498);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs72123))?sablono.interpreter.attributes(attrs72123):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72123))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72123)], null))));
})();return React.DOM.tr(G__72140,G__72141,G__72142,G__72143,G__72144,G__72145,G__72146);
})();return React.DOM.thead(G__72138,G__72139);
})();var G__72137 = (function (){var attrs72124 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1289,cljs.core.constant$keyword$1246,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs72124))?sablono.interpreter.attributes(attrs72124):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72124))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72124)], null))));
})();return React.DOM.table(G__72135,G__72136,G__72137);
})();return React.DOM.div(G__72133,G__72134);
})(),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1499))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72116),(function (){var G__72153 = {"className": "table-responsive"};var G__72154 = (function (){var G__72155 = {"className": "table"};var G__72156 = (function (){var G__72158 = null;var G__72159 = (function (){var G__72160 = null;var G__72161 = (function (){var attrs72125 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1499,"Investor-backed company",cljs.core.constant$keyword$1274);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs72125))?sablono.interpreter.attributes(attrs72125):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72125))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72125)], null))));
})();var G__72162 = (function (){var G__72167 = null;var G__72168 = "Investor";return React.DOM.th(G__72167,G__72168);
})();var G__72163 = (function (){var G__72169 = null;var G__72170 = "Constituency";return React.DOM.th(G__72169,G__72170);
})();var G__72164 = (function (){var attrs72130 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1499,"Revenue",cljs.core.constant$keyword$1495);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs72130))?sablono.interpreter.attributes(attrs72130):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72130))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72130)], null))));
})();var G__72165 = (function (){var G__72171 = {"colSpan": "2"};var G__72172 = sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1499,"Rev. change",cljs.core.constant$keyword$1497));return React.DOM.th(G__72171,G__72172);
})();var G__72166 = (function (){var attrs72131 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1499,"Employees",cljs.core.constant$keyword$1498);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs72131))?sablono.interpreter.attributes(attrs72131):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72131))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72131)], null))));
})();return React.DOM.tr(G__72160,G__72161,G__72162,G__72163,G__72164,G__72165,G__72166);
})();return React.DOM.thead(G__72158,G__72159);
})();var G__72157 = (function (){var attrs72132 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1289,cljs.core.constant$keyword$1246,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs72132))?sablono.interpreter.attributes(attrs72132):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72132)], null))));
})();return React.DOM.table(G__72155,G__72156,G__72157);
})();return React.DOM.div(G__72153,G__72154);
})(),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1499))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t72113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_72115){var self__ = this;
var _72115__$1 = this;return self__.meta72114;
});})(comm))
;
clustermap.components.full_report.company_list.t72113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_72115,meta72114__$1){var self__ = this;
var _72115__$1 = this;return (new clustermap.components.full_report.company_list.t72113(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta72114__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t72113 = ((function (comm){
return (function __GT_t72113(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta72114){return (new clustermap.components.full_report.company_list.t72113(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta72114));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t72113(comm,opts,owner,companies,company_list,null));
});

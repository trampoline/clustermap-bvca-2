// Compiled by ClojureScript 0.0-2268
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
{var attrs37428 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37428))?sablono.interpreter.attributes(attrs37428):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37428))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37428),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__37437){var map__37450 = p__37437;var map__37450__$1 = ((cljs.core.seq_QMARK_(map__37450))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37450):map__37450);var opts = map__37450__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37450__$1,cljs.core.constant$keyword$899);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37450__$1,cljs.core.constant$keyword$900);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$901,company) : path_fn.call(null,cljs.core.constant$keyword$901,company));if(typeof clustermap.components.full_report.company_list.t37451 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t37451 = (function (company_path,link_fn,path_fn,opts,map__37450,p__37437,owner,company,portfolio_company,meta37452){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__37450 = map__37450;
this.p__37437 = p__37437;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta37452 = meta37452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t37451.cljs$lang$type = true;
clustermap.components.full_report.company_list.t37451.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t37451";
clustermap.components.full_report.company_list.t37451.cljs$lang$ctorPrWriter = ((function (company_path,map__37450,map__37450__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t37451");
});})(company_path,map__37450,map__37450__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t37451.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t37451.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__37450,map__37450__$1,opts,path_fn,link_fn){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs37454 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$901,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$901,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37454))?sablono.interpreter.attributes(attrs37454):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37454))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37454)], null))));
})(),(function (){var attrs37455 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$902,cljs.core.constant$keyword$903.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37455))?sablono.interpreter.attributes(attrs37455):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37455))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37455)], null))));
})(),(function (){var attrs37456 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$904,(function (){var G__37461 = self__.company;var G__37461__$1 = (((G__37461 == null))?null:cljs.core.constant$keyword$813.cljs$core$IFn$_invoke$arity$1(G__37461));var G__37461__$2 = (((G__37461__$1 == null))?null:cljs.core.filter(((function (G__37461,G__37461__$1,this__9490__auto____$1,company_path,map__37450,map__37450__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__37461,G__37461__$1,this__9490__auto____$1,company_path,map__37450,map__37450__$1,opts,path_fn,link_fn))
,G__37461__$1));return G__37461__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37456))?sablono.interpreter.attributes(attrs37456):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37456))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37456)], null))));
})(),(function (){var attrs37457 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$809.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$826,(2),cljs.core.constant$keyword$775,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$809.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$826,(2),cljs.core.constant$keyword$775,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37457))?sablono.interpreter.attributes(attrs37457):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37457))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37457),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs37458 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$907.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37458))?sablono.interpreter.attributes(attrs37458):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37458))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37458)], null))));
})(),(function (){var attrs37459 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$907.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$826,(2),cljs.core.constant$keyword$775,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$907.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$826,(2),cljs.core.constant$keyword$775,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37459))?sablono.interpreter.attributes(attrs37459):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37459))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37459)], null))));
})(),(function (){var attrs37460 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$908.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$828,(0),cljs.core.constant$keyword$775,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$908.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$828,(0),cljs.core.constant$keyword$775,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37460))?sablono.interpreter.attributes(attrs37460):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37460))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37460),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__37450,map__37450__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t37451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__37450,map__37450__$1,opts,path_fn,link_fn){
return (function (_37453){var self__ = this;
var _37453__$1 = this;return self__.meta37452;
});})(company_path,map__37450,map__37450__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t37451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__37450,map__37450__$1,opts,path_fn,link_fn){
return (function (_37453,meta37452__$1){var self__ = this;
var _37453__$1 = this;return (new clustermap.components.full_report.company_list.t37451(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__37450,self__.p__37437,self__.owner,self__.company,self__.portfolio_company,meta37452__$1));
});})(company_path,map__37450,map__37450__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t37451 = ((function (company_path,map__37450,map__37450__$1,opts,path_fn,link_fn){
return (function __GT_t37451(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37450__$2,p__37437__$1,owner__$1,company__$1,portfolio_company__$1,meta37452){return (new clustermap.components.full_report.company_list.t37451(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37450__$2,p__37437__$1,owner__$1,company__$1,portfolio_company__$1,meta37452));
});})(company_path,map__37450,map__37450__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t37451(company_path,link_fn,path_fn,opts,map__37450__$1,p__37437,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$909);if(typeof clustermap.components.full_report.company_list.t37482 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t37482 = (function (comm,opts,owner,companies,company_list,meta37483){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta37483 = meta37483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t37482.cljs$lang$type = true;
clustermap.components.full_report.company_list.t37482.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t37482";
clustermap.components.full_report.company_list.t37482.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t37482");
});})(comm))
;
clustermap.components.full_report.company_list.t37482.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t37482.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;var attrs37485 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$910);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37485))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$829,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs37485], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37485))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37486 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$910,"Investor-backed company",cljs.core.constant$keyword$846);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37486))?sablono.interpreter.attributes(attrs37486):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37486))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37486)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs37491 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$910,"Revenue",cljs.core.constant$keyword$809);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37491))?sablono.interpreter.attributes(attrs37491):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37491))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37491)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$910,"Rev. change",cljs.core.constant$keyword$907))),(function (){var attrs37492 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$910,"Employees",cljs.core.constant$keyword$908);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37492))?sablono.interpreter.attributes(attrs37492):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37492))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37492)], null))));
})())),(function (){var attrs37493 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$911.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$889,cljs.core.constant$keyword$912,cljs.core.constant$keyword$892,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37493))?sablono.interpreter.attributes(attrs37493):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37493))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37493)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$910))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37485),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37494 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$910,"Investor-backed company",cljs.core.constant$keyword$846);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37494))?sablono.interpreter.attributes(attrs37494):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37494))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37494)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs37499 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$910,"Revenue",cljs.core.constant$keyword$809);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37499))?sablono.interpreter.attributes(attrs37499):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37499))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37499)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$910,"Rev. change",cljs.core.constant$keyword$907))),(function (){var attrs37500 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$910,"Employees",cljs.core.constant$keyword$908);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37500))?sablono.interpreter.attributes(attrs37500):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37500))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37500)], null))));
})())),(function (){var attrs37501 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$911.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$889,cljs.core.constant$keyword$912,cljs.core.constant$keyword$892,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37501))?sablono.interpreter.attributes(attrs37501):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37501))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37501)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$910))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t37482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_37484){var self__ = this;
var _37484__$1 = this;return self__.meta37483;
});})(comm))
;
clustermap.components.full_report.company_list.t37482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_37484,meta37483__$1){var self__ = this;
var _37484__$1 = this;return (new clustermap.components.full_report.company_list.t37482(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta37483__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t37482 = ((function (comm){
return (function __GT_t37482(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta37483){return (new clustermap.components.full_report.company_list.t37482(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta37483));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t37482(comm,opts,owner,companies,company_list,null));
});

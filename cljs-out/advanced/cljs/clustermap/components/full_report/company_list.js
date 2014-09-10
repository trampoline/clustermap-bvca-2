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
{var attrs37774 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37774))?sablono.interpreter.attributes(attrs37774):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37774))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37774),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__37783){var map__37796 = p__37783;var map__37796__$1 = ((cljs.core.seq_QMARK_(map__37796))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37796):map__37796);var opts = map__37796__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,cljs.core.constant$keyword$905);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,cljs.core.constant$keyword$906);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$907,company) : path_fn.call(null,cljs.core.constant$keyword$907,company));if(typeof clustermap.components.full_report.company_list.t37797 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t37797 = (function (company_path,link_fn,path_fn,opts,map__37796,p__37783,owner,company,portfolio_company,meta37798){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__37796 = map__37796;
this.p__37783 = p__37783;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta37798 = meta37798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t37797.cljs$lang$type = true;
clustermap.components.full_report.company_list.t37797.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t37797";
clustermap.components.full_report.company_list.t37797.cljs$lang$ctorPrWriter = ((function (company_path,map__37796,map__37796__$1,opts,path_fn,link_fn){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.full-report.company-list/t37797");
});})(company_path,map__37796,map__37796__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t37797.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t37797.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__37796,map__37796__$1,opts,path_fn,link_fn){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs37800 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$907,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$907,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37800))?sablono.interpreter.attributes(attrs37800):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37800))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37800)], null))));
})(),(function (){var attrs37801 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$908,cljs.core.constant$keyword$909.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37801))?sablono.interpreter.attributes(attrs37801):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37801))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37801)], null))));
})(),(function (){var attrs37802 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$910,(function (){var G__37807 = self__.company;var G__37807__$1 = (((G__37807 == null))?null:cljs.core.constant$keyword$819.cljs$core$IFn$_invoke$arity$1(G__37807));var G__37807__$2 = (((G__37807__$1 == null))?null:cljs.core.filter(((function (G__37807,G__37807__$1,this__9492__auto____$1,company_path,map__37796,map__37796__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$911.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__37807,G__37807__$1,this__9492__auto____$1,company_path,map__37796,map__37796__$1,opts,path_fn,link_fn))
,G__37807__$1));return G__37807__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37802))?sablono.interpreter.attributes(attrs37802):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37802))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37802)], null))));
})(),(function (){var attrs37803 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$815.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$815.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37803))?sablono.interpreter.attributes(attrs37803):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37803))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3541__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$912.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37803),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3541__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$912.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs37804 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$913.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37804))?sablono.interpreter.attributes(attrs37804):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37804))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37804)], null))));
})(),(function (){var attrs37805 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$913.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$913.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37805))?sablono.interpreter.attributes(attrs37805):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37805))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37805)], null))));
})(),(function (){var attrs37806 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$914.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$914.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37806))?sablono.interpreter.attributes(attrs37806):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37806))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3541__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$912.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37806),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3541__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$912.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__37796,map__37796__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t37797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__37796,map__37796__$1,opts,path_fn,link_fn){
return (function (_37799){var self__ = this;
var _37799__$1 = this;return self__.meta37798;
});})(company_path,map__37796,map__37796__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t37797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__37796,map__37796__$1,opts,path_fn,link_fn){
return (function (_37799,meta37798__$1){var self__ = this;
var _37799__$1 = this;return (new clustermap.components.full_report.company_list.t37797(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__37796,self__.p__37783,self__.owner,self__.company,self__.portfolio_company,meta37798__$1));
});})(company_path,map__37796,map__37796__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t37797 = ((function (company_path,map__37796,map__37796__$1,opts,path_fn,link_fn){
return (function __GT_t37797(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37796__$2,p__37783__$1,owner__$1,company__$1,portfolio_company__$1,meta37798){return (new clustermap.components.full_report.company_list.t37797(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37796__$2,p__37783__$1,owner__$1,company__$1,portfolio_company__$1,meta37798));
});})(company_path,map__37796,map__37796__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t37797(company_path,link_fn,path_fn,opts,map__37796__$1,p__37783,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$915);if(typeof clustermap.components.full_report.company_list.t37828 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t37828 = (function (comm,opts,owner,companies,company_list,meta37829){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta37829 = meta37829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t37828.cljs$lang$type = true;
clustermap.components.full_report.company_list.t37828.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t37828";
clustermap.components.full_report.company_list.t37828.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.full-report.company-list/t37828");
});})(comm))
;
clustermap.components.full_report.company_list.t37828.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t37828.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;var attrs37831 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$916);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37831))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$835,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs37831], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37831))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37832 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$916,"Investor-backed company",cljs.core.constant$keyword$852);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37832))?sablono.interpreter.attributes(attrs37832):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37832))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37832)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs37837 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$916,"Revenue",cljs.core.constant$keyword$815);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37837))?sablono.interpreter.attributes(attrs37837):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37837))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37837)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$916,"Rev. change",cljs.core.constant$keyword$913))),(function (){var attrs37838 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$916,"Employees",cljs.core.constant$keyword$914);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37838))?sablono.interpreter.attributes(attrs37838):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37838))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37838)], null))));
})())),(function (){var attrs37839 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$917.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$895,cljs.core.constant$keyword$918,cljs.core.constant$keyword$898,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37839))?sablono.interpreter.attributes(attrs37839):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37839))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37839)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$916))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37831),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37840 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$916,"Investor-backed company",cljs.core.constant$keyword$852);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37840))?sablono.interpreter.attributes(attrs37840):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37840))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37840)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs37845 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$916,"Revenue",cljs.core.constant$keyword$815);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37845))?sablono.interpreter.attributes(attrs37845):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37845))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37845)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$916,"Rev. change",cljs.core.constant$keyword$913))),(function (){var attrs37846 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$916,"Employees",cljs.core.constant$keyword$914);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37846))?sablono.interpreter.attributes(attrs37846):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37846))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37846)], null))));
})())),(function (){var attrs37847 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$917.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$895,cljs.core.constant$keyword$918,cljs.core.constant$keyword$898,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37847))?sablono.interpreter.attributes(attrs37847):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37847))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37847)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$916))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t37828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_37830){var self__ = this;
var _37830__$1 = this;return self__.meta37829;
});})(comm))
;
clustermap.components.full_report.company_list.t37828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_37830,meta37829__$1){var self__ = this;
var _37830__$1 = this;return (new clustermap.components.full_report.company_list.t37828(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta37829__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t37828 = ((function (comm){
return (function __GT_t37828(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta37829){return (new clustermap.components.full_report.company_list.t37828(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta37829));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t37828(comm,opts,owner,companies,company_list,null));
});

// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.formats.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__12899 = site_stats;var G__12899__$1 = (((G__12899 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__12899));return G__12899__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__12900 = site_stats;var G__12900__$1 = (((G__12900 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__12900));return G__12900__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__12901 = site_stats;var G__12901__$1 = (((G__12901 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__12901));return G__12901__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__12933 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12933__$1 = ((cljs.core.seq_QMARK_.call(null,map__12933))?cljs.core.apply.call(null,cljs.core.hash_map,map__12933):map__12933);var const_count = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t12934 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12934 = (function (pc_count,ic_count,const_count,map__12933,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta12935){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12933 = map__12933;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12935 = meta12935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12934.cljs$lang$type = true;
clustermap.components.map_report.t12934.cljs$lang$ctorStr = "clustermap.components.map-report/t12934";
clustermap.components.map_report.t12934.cljs$lang$ctorPrWriter = ((function (map__12933,map__12933__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t12934");
});})(map__12933,map__12933__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12934.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12934.prototype.om$core$IRender$render$arity$1 = ((function (map__12933,map__12933__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12939 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12939))?sablono.interpreter.attributes.call(null,attrs12939):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12939))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12939),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs12944 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12944))?sablono.interpreter.attributes.call(null,attrs12944):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12944))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12944),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs12949 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12949))?sablono.interpreter.attributes.call(null,attrs12949):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12949))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12950 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12950))?sablono.interpreter.attributes.call(null,attrs12950):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12950))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12950)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12949),(function (){var attrs12951 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12951))?sablono.interpreter.attributes.call(null,attrs12951):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12951))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12951)], null))));
})()], null))));
})(),(function (){var attrs12952 = clustermap.formats.money.fmoney.call(null,(function (){var G__12962 = self__.site_stats;var G__12962__$1 = (((G__12962 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__12962));var G__12962__$2 = (((G__12962__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12962__$1));return G__12962__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12952))?sablono.interpreter.attributes.call(null,attrs12952):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12952))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12952),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12957 = clustermap.formats.number.fnum.call(null,(function (){var G__12963 = self__.site_stats;var G__12963__$1 = (((G__12963 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__12963));var G__12963__$2 = (((G__12963__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12963__$1));return G__12963__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12957))?sablono.interpreter.attributes.call(null,attrs12957):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12957))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12957),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12933,map__12933__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12933,map__12933__$1,const_count,ic_count,pc_count){
return (function (_12936){var self__ = this;
var _12936__$1 = this;return self__.meta12935;
});})(map__12933,map__12933__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12933,map__12933__$1,const_count,ic_count,pc_count){
return (function (_12936,meta12935__$1){var self__ = this;
var _12936__$1 = this;return (new clustermap.components.map_report.t12934(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12933,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12935__$1));
});})(map__12933,map__12933__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12934 = ((function (map__12933,map__12933__$1,const_count,ic_count,pc_count){
return (function __GT_t12934(pc_count__$1,ic_count__$1,const_count__$1,map__12933__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12935){return (new clustermap.components.map_report.t12934(pc_count__$1,ic_count__$1,const_count__$1,map__12933__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12935));
});})(map__12933,map__12933__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12934(pc_count,ic_count,const_count,map__12933__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__12989 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12989__$1 = ((cljs.core.seq_QMARK_.call(null,map__12989))?cljs.core.apply.call(null,cljs.core.hash_map,map__12989):map__12989);var const_count = cljs.core.get.call(null,map__12989__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__12989__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__12989__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t12990 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12990 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__12989,comm,view_path_fn,portfolio_company_report,site_stats,meta12991){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__12989 = map__12989;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta12991 = meta12991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12990.cljs$lang$type = true;
clustermap.components.map_report.t12990.cljs$lang$ctorStr = "clustermap.components.map-report/t12990";
clustermap.components.map_report.t12990.cljs$lang$ctorPrWriter = ((function (map__12989,map__12989__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t12990");
});})(map__12989,map__12989__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12990.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12990.prototype.om$core$IRender$render$arity$1 = ((function (map__12989,map__12989__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs12995 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12995))?sablono.interpreter.attributes.call(null,attrs12995):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12995))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12995)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12996 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12996))?sablono.interpreter.attributes.call(null,attrs12996):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12996))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12997 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12997))?sablono.interpreter.attributes.call(null,attrs12997):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12997))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12997)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12996),(function (){var attrs12998 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12998))?sablono.interpreter.attributes.call(null,attrs12998):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12998))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12998)], null))));
})()], null))));
})(),(function (){var attrs12999 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12999))?sablono.interpreter.attributes.call(null,attrs12999):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12999))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13000 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13000))?sablono.interpreter.attributes.call(null,attrs13000):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13000))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13000)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12999),(function (){var attrs13001 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13001))?sablono.interpreter.attributes.call(null,attrs13001):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13001))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13001)], null))));
})()], null))));
})(),(function (){var attrs13002 = clustermap.formats.money.fmoney.call(null,(function (){var G__13012 = self__.site_stats;var G__13012__$1 = (((G__13012 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13012));var G__13012__$2 = (((G__13012__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13012__$1));return G__13012__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13002))?sablono.interpreter.attributes.call(null,attrs13002):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13002))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13002),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13007 = clustermap.formats.number.fnum.call(null,(function (){var G__13013 = self__.site_stats;var G__13013__$1 = (((G__13013 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13013));var G__13013__$2 = (((G__13013__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13013__$1));return G__13013__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13007))?sablono.interpreter.attributes.call(null,attrs13007):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13007))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13007),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12989,map__12989__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12989,map__12989__$1,const_count,ic_count,pc_count){
return (function (_12992){var self__ = this;
var _12992__$1 = this;return self__.meta12991;
});})(map__12989,map__12989__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12989,map__12989__$1,const_count,ic_count,pc_count){
return (function (_12992,meta12991__$1){var self__ = this;
var _12992__$1 = this;return (new clustermap.components.map_report.t12990(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__12989,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta12991__$1));
});})(map__12989,map__12989__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12990 = ((function (map__12989,map__12989__$1,const_count,ic_count,pc_count){
return (function __GT_t12990(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__12989__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta12991){return (new clustermap.components.map_report.t12990(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__12989__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta12991));
});})(map__12989,map__12989__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12990(pc_count,path_fn,const_count,portfolio_company,ic_count,map__12989__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13039 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13039__$1 = ((cljs.core.seq_QMARK_.call(null,map__13039))?cljs.core.apply.call(null,cljs.core.hash_map,map__13039):map__13039);var const_count = cljs.core.get.call(null,map__13039__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13039__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13039__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13040 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13040 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__13039,site_stats,meta13041){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__13039 = map__13039;
this.site_stats = site_stats;
this.meta13041 = meta13041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13040.cljs$lang$type = true;
clustermap.components.map_report.t13040.cljs$lang$ctorStr = "clustermap.components.map-report/t13040";
clustermap.components.map_report.t13040.cljs$lang$ctorPrWriter = ((function (map__13039,map__13039__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13040");
});})(map__13039,map__13039__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13040.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13040.prototype.om$core$IRender$render$arity$1 = ((function (map__13039,map__13039__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13045 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13045))?sablono.interpreter.attributes.call(null,attrs13045):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13045))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13045)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13046 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13046))?sablono.interpreter.attributes.call(null,attrs13046):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13046))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13047 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13047))?sablono.interpreter.attributes.call(null,attrs13047):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13047))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13047)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13046),(function (){var attrs13048 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13048))?sablono.interpreter.attributes.call(null,attrs13048):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13048))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13048)], null))));
})()], null))));
})(),(function (){var attrs13049 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13049))?sablono.interpreter.attributes.call(null,attrs13049):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13049))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13050 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13050))?sablono.interpreter.attributes.call(null,attrs13050):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13050))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13050)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13049),(function (){var attrs13051 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13051))?sablono.interpreter.attributes.call(null,attrs13051):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13051))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13051)], null))));
})()], null))));
})(),(function (){var attrs13052 = clustermap.formats.money.fmoney.call(null,(function (){var G__13062 = self__.site_stats;var G__13062__$1 = (((G__13062 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13062));var G__13062__$2 = (((G__13062__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13062__$1));return G__13062__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13052))?sablono.interpreter.attributes.call(null,attrs13052):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13052))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13052),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13057 = clustermap.formats.number.fnum.call(null,(function (){var G__13063 = self__.site_stats;var G__13063__$1 = (((G__13063 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13063));var G__13063__$2 = (((G__13063__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13063__$1));return G__13063__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13057))?sablono.interpreter.attributes.call(null,attrs13057):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13057))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13057),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13039,map__13039__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13039,map__13039__$1,const_count,ic_count,pc_count){
return (function (_13042){var self__ = this;
var _13042__$1 = this;return self__.meta13041;
});})(map__13039,map__13039__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13039,map__13039__$1,const_count,ic_count,pc_count){
return (function (_13042,meta13041__$1){var self__ = this;
var _13042__$1 = this;return (new clustermap.components.map_report.t13040(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__13039,self__.site_stats,meta13041__$1));
});})(map__13039,map__13039__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13040 = ((function (map__13039,map__13039__$1,const_count,ic_count,pc_count){
return (function __GT_t13040(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__13039__$2,site_stats__$1,meta13041){return (new clustermap.components.map_report.t13040(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__13039__$2,site_stats__$1,meta13041));
});})(map__13039,map__13039__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13040(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__13039__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13093 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13093__$1 = ((cljs.core.seq_QMARK_.call(null,map__13093))?cljs.core.apply.call(null,cljs.core.hash_map,map__13093):map__13093);var const_count = cljs.core.get.call(null,map__13093__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13093__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13093__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13094 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13094 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,map__13093,meta13095){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.map__13093 = map__13093;
this.meta13095 = meta13095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13094.cljs$lang$type = true;
clustermap.components.map_report.t13094.cljs$lang$ctorStr = "clustermap.components.map-report/t13094";
clustermap.components.map_report.t13094.cljs$lang$ctorPrWriter = ((function (map__13093,map__13093__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13094");
});})(map__13093,map__13093__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13094.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13094.prototype.om$core$IRender$render$arity$1 = ((function (map__13093,map__13093__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13099 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13099))?sablono.interpreter.attributes.call(null,attrs13099):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13099))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13099),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13104 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13104))?sablono.interpreter.attributes.call(null,attrs13104):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13104))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13105 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13105))?sablono.interpreter.attributes.call(null,attrs13105):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13105))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13105)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13104),(function (){var attrs13106 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13106))?sablono.interpreter.attributes.call(null,attrs13106):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13106))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13106)], null))));
})()], null))));
})(),(function (){var attrs13107 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13107))?sablono.interpreter.attributes.call(null,attrs13107):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13107))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13108 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13108))?sablono.interpreter.attributes.call(null,attrs13108):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13108))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13108)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13107),(function (){var attrs13109 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13109))?sablono.interpreter.attributes.call(null,attrs13109):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13109))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13109)], null))));
})()], null))));
})(),(function (){var attrs13110 = clustermap.formats.money.fmoney.call(null,(function (){var G__13120 = self__.site_stats;var G__13120__$1 = (((G__13120 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13120));var G__13120__$2 = (((G__13120__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13120__$1));return G__13120__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13110))?sablono.interpreter.attributes.call(null,attrs13110):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13110))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13110),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13115 = clustermap.formats.number.fnum.call(null,(function (){var G__13121 = self__.site_stats;var G__13121__$1 = (((G__13121 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13121));var G__13121__$2 = (((G__13121__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13121__$1));return G__13121__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13115))?sablono.interpreter.attributes.call(null,attrs13115):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13115))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13115),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13093,map__13093__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13093,map__13093__$1,const_count,ic_count,pc_count){
return (function (_13096){var self__ = this;
var _13096__$1 = this;return self__.meta13095;
});})(map__13093,map__13093__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13093,map__13093__$1,const_count,ic_count,pc_count){
return (function (_13096,meta13095__$1){var self__ = this;
var _13096__$1 = this;return (new clustermap.components.map_report.t13094(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,self__.map__13093,meta13095__$1));
});})(map__13093,map__13093__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13094 = ((function (map__13093,map__13093__$1,const_count,ic_count,pc_count){
return (function __GT_t13094(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,map__13093__$2,meta13095){return (new clustermap.components.map_report.t13094(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,map__13093__$2,meta13095));
});})(map__13093,map__13093__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13094(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,map__13093__$1,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13126 = om.core.get_shared.call(null,owner);var map__13126__$1 = ((cljs.core.seq_QMARK_.call(null,map__13126))?cljs.core.apply.call(null,cljs.core.hash_map,map__13126):map__13126);var view_path_fn = cljs.core.get.call(null,map__13126__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13126__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13126__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13127 = cljs.core._EQ__EQ_;var expr__13128 = type;if(cljs.core.truth_(pred__13127.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13128)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13127.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13128)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13127.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13128)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

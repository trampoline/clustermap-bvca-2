// Compiled by ClojureScript 0.0-2268
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__26582 = site_stats;var G__26582__$1 = (((G__26582 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__26582));return G__26582__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__26583 = site_stats;var G__26583__$1 = (((G__26583 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__26583));return G__26583__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__26584 = site_stats;var G__26584__$1 = (((G__26584 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__26584));return G__26584__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__26616 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26616__$1 = ((cljs.core.seq_QMARK_.call(null,map__26616))?cljs.core.apply.call(null,cljs.core.hash_map,map__26616):map__26616);var const_count = cljs.core.get.call(null,map__26616__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26616__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26616__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26617 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26617 = (function (pc_count,ic_count,const_count,map__26616,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta26618){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__26616 = map__26616;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta26618 = meta26618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26617.cljs$lang$type = true;
clustermap.components.map_report.t26617.cljs$lang$ctorStr = "clustermap.components.map-report/t26617";
clustermap.components.map_report.t26617.cljs$lang$ctorPrWriter = ((function (map__26616,map__26616__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t26617");
});})(map__26616,map__26616__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26617.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26617.prototype.om$core$IRender$render$arity$1 = ((function (map__26616,map__26616__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs26622 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26622))?sablono.interpreter.attributes.call(null,attrs26622):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26622))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26622),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs26627 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26627))?sablono.interpreter.attributes.call(null,attrs26627):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26627))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26627),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs26632 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26632))?sablono.interpreter.attributes.call(null,attrs26632):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26632))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26633 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26633))?sablono.interpreter.attributes.call(null,attrs26633):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26633))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26633)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26632),(function (){var attrs26634 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26634))?sablono.interpreter.attributes.call(null,attrs26634):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26634))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26634)], null))));
})()], null))));
})(),(function (){var attrs26635 = clustermap.formats.money.fmoney.call(null,(function (){var G__26645 = self__.site_stats;var G__26645__$1 = (((G__26645 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26645));var G__26645__$2 = (((G__26645__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26645__$1));return G__26645__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26635))?sablono.interpreter.attributes.call(null,attrs26635):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26635))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26635),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26640 = clustermap.formats.number.fnum.call(null,(function (){var G__26646 = self__.site_stats;var G__26646__$1 = (((G__26646 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26646));var G__26646__$2 = (((G__26646__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26646__$1));return G__26646__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26640))?sablono.interpreter.attributes.call(null,attrs26640):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26640))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26640),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26616,map__26616__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26616,map__26616__$1,const_count,ic_count,pc_count){
return (function (_26619){var self__ = this;
var _26619__$1 = this;return self__.meta26618;
});})(map__26616,map__26616__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26616,map__26616__$1,const_count,ic_count,pc_count){
return (function (_26619,meta26618__$1){var self__ = this;
var _26619__$1 = this;return (new clustermap.components.map_report.t26617(self__.pc_count,self__.ic_count,self__.const_count,self__.map__26616,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta26618__$1));
});})(map__26616,map__26616__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26617 = ((function (map__26616,map__26616__$1,const_count,ic_count,pc_count){
return (function __GT_t26617(pc_count__$1,ic_count__$1,const_count__$1,map__26616__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta26618){return (new clustermap.components.map_report.t26617(pc_count__$1,ic_count__$1,const_count__$1,map__26616__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta26618));
});})(map__26616,map__26616__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26617(pc_count,ic_count,const_count,map__26616__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__26672 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26672__$1 = ((cljs.core.seq_QMARK_.call(null,map__26672))?cljs.core.apply.call(null,cljs.core.hash_map,map__26672):map__26672);var const_count = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26673 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26673 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__26672,portfolio_company_report,site_stats,meta26674){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__26672 = map__26672;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta26674 = meta26674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26673.cljs$lang$type = true;
clustermap.components.map_report.t26673.cljs$lang$ctorStr = "clustermap.components.map-report/t26673";
clustermap.components.map_report.t26673.cljs$lang$ctorPrWriter = ((function (map__26672,map__26672__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t26673");
});})(map__26672,map__26672__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26673.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26673.prototype.om$core$IRender$render$arity$1 = ((function (map__26672,map__26672__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs26678 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs26678))?sablono.interpreter.attributes.call(null,attrs26678):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26678))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26678)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26679 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26679))?sablono.interpreter.attributes.call(null,attrs26679):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26679))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26680 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26680))?sablono.interpreter.attributes.call(null,attrs26680):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26680))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26680)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26679),(function (){var attrs26681 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26681))?sablono.interpreter.attributes.call(null,attrs26681):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26681))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26681)], null))));
})()], null))));
})(),(function (){var attrs26682 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26682))?sablono.interpreter.attributes.call(null,attrs26682):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26682))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26683 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26683))?sablono.interpreter.attributes.call(null,attrs26683):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26683))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26683)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26682),(function (){var attrs26684 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26684))?sablono.interpreter.attributes.call(null,attrs26684):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26684))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26684)], null))));
})()], null))));
})(),(function (){var attrs26685 = clustermap.formats.money.fmoney.call(null,(function (){var G__26695 = self__.site_stats;var G__26695__$1 = (((G__26695 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26695));var G__26695__$2 = (((G__26695__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26695__$1));return G__26695__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26685))?sablono.interpreter.attributes.call(null,attrs26685):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26685))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26685),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26690 = clustermap.formats.number.fnum.call(null,(function (){var G__26696 = self__.site_stats;var G__26696__$1 = (((G__26696 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26696));var G__26696__$2 = (((G__26696__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26696__$1));return G__26696__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26690))?sablono.interpreter.attributes.call(null,attrs26690):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26690))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26690),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26672,map__26672__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26672,map__26672__$1,const_count,ic_count,pc_count){
return (function (_26675){var self__ = this;
var _26675__$1 = this;return self__.meta26674;
});})(map__26672,map__26672__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26672,map__26672__$1,const_count,ic_count,pc_count){
return (function (_26675,meta26674__$1){var self__ = this;
var _26675__$1 = this;return (new clustermap.components.map_report.t26673(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__26672,self__.portfolio_company_report,self__.site_stats,meta26674__$1));
});})(map__26672,map__26672__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26673 = ((function (map__26672,map__26672__$1,const_count,ic_count,pc_count){
return (function __GT_t26673(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__26672__$2,portfolio_company_report__$1,site_stats__$1,meta26674){return (new clustermap.components.map_report.t26673(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__26672__$2,portfolio_company_report__$1,site_stats__$1,meta26674));
});})(map__26672,map__26672__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26673(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__26672__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__26722 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26722__$1 = ((cljs.core.seq_QMARK_.call(null,map__26722))?cljs.core.apply.call(null,cljs.core.hash_map,map__26722):map__26722);var const_count = cljs.core.get.call(null,map__26722__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26722__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26722__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26723 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26723 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__26722,comm,investor_company_report,view_path_fn,site_stats,meta26724){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__26722 = map__26722;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta26724 = meta26724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26723.cljs$lang$type = true;
clustermap.components.map_report.t26723.cljs$lang$ctorStr = "clustermap.components.map-report/t26723";
clustermap.components.map_report.t26723.cljs$lang$ctorPrWriter = ((function (map__26722,map__26722__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t26723");
});})(map__26722,map__26722__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26723.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26723.prototype.om$core$IRender$render$arity$1 = ((function (map__26722,map__26722__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs26728 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs26728))?sablono.interpreter.attributes.call(null,attrs26728):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26728))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26728)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26729 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26729))?sablono.interpreter.attributes.call(null,attrs26729):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26729))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26730 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26730))?sablono.interpreter.attributes.call(null,attrs26730):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26730))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26730)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26729),(function (){var attrs26731 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26731))?sablono.interpreter.attributes.call(null,attrs26731):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26731))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26731)], null))));
})()], null))));
})(),(function (){var attrs26732 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26732))?sablono.interpreter.attributes.call(null,attrs26732):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26732))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26733 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26733))?sablono.interpreter.attributes.call(null,attrs26733):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26733))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26733)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26732),(function (){var attrs26734 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26734))?sablono.interpreter.attributes.call(null,attrs26734):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26734))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26734)], null))));
})()], null))));
})(),(function (){var attrs26735 = clustermap.formats.money.fmoney.call(null,(function (){var G__26745 = self__.site_stats;var G__26745__$1 = (((G__26745 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26745));var G__26745__$2 = (((G__26745__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26745__$1));return G__26745__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26735))?sablono.interpreter.attributes.call(null,attrs26735):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26735))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26735),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26740 = clustermap.formats.number.fnum.call(null,(function (){var G__26746 = self__.site_stats;var G__26746__$1 = (((G__26746 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26746));var G__26746__$2 = (((G__26746__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26746__$1));return G__26746__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26740))?sablono.interpreter.attributes.call(null,attrs26740):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26740))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26740),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26722,map__26722__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26722,map__26722__$1,const_count,ic_count,pc_count){
return (function (_26725){var self__ = this;
var _26725__$1 = this;return self__.meta26724;
});})(map__26722,map__26722__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26722,map__26722__$1,const_count,ic_count,pc_count){
return (function (_26725,meta26724__$1){var self__ = this;
var _26725__$1 = this;return (new clustermap.components.map_report.t26723(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__26722,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta26724__$1));
});})(map__26722,map__26722__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26723 = ((function (map__26722,map__26722__$1,const_count,ic_count,pc_count){
return (function __GT_t26723(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__26722__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta26724){return (new clustermap.components.map_report.t26723(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__26722__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta26724));
});})(map__26722,map__26722__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26723(pc_count,path_fn,const_count,investor_company,ic_count,map__26722__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__26776 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26776__$1 = ((cljs.core.seq_QMARK_.call(null,map__26776))?cljs.core.apply.call(null,cljs.core.hash_map,map__26776):map__26776);var const_count = cljs.core.get.call(null,map__26776__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26776__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26776__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26777 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26777 = (function (pc_count,path_fn,const_count,ic_count,map__26776,constituency_report,comm,constituency,view_path_fn,site_stats,meta26778){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__26776 = map__26776;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta26778 = meta26778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26777.cljs$lang$type = true;
clustermap.components.map_report.t26777.cljs$lang$ctorStr = "clustermap.components.map-report/t26777";
clustermap.components.map_report.t26777.cljs$lang$ctorPrWriter = ((function (map__26776,map__26776__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t26777");
});})(map__26776,map__26776__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26777.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26777.prototype.om$core$IRender$render$arity$1 = ((function (map__26776,map__26776__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs26782 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs26782))?sablono.interpreter.attributes.call(null,attrs26782):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26782))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26782),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26787 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26787))?sablono.interpreter.attributes.call(null,attrs26787):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26787))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26788 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26788))?sablono.interpreter.attributes.call(null,attrs26788):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26788))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26788)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26787),(function (){var attrs26789 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26789))?sablono.interpreter.attributes.call(null,attrs26789):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26789))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26789)], null))));
})()], null))));
})(),(function (){var attrs26790 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26790))?sablono.interpreter.attributes.call(null,attrs26790):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26790))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26791 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26791))?sablono.interpreter.attributes.call(null,attrs26791):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26791))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26791)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26790),(function (){var attrs26792 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26792))?sablono.interpreter.attributes.call(null,attrs26792):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26792))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26792)], null))));
})()], null))));
})(),(function (){var attrs26793 = clustermap.formats.money.fmoney.call(null,(function (){var G__26803 = self__.site_stats;var G__26803__$1 = (((G__26803 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26803));var G__26803__$2 = (((G__26803__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26803__$1));return G__26803__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26793))?sablono.interpreter.attributes.call(null,attrs26793):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26793))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26793),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26798 = clustermap.formats.number.fnum.call(null,(function (){var G__26804 = self__.site_stats;var G__26804__$1 = (((G__26804 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26804));var G__26804__$2 = (((G__26804__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26804__$1));return G__26804__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26798))?sablono.interpreter.attributes.call(null,attrs26798):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26798))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26798),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26776,map__26776__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26776,map__26776__$1,const_count,ic_count,pc_count){
return (function (_26779){var self__ = this;
var _26779__$1 = this;return self__.meta26778;
});})(map__26776,map__26776__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26776,map__26776__$1,const_count,ic_count,pc_count){
return (function (_26779,meta26778__$1){var self__ = this;
var _26779__$1 = this;return (new clustermap.components.map_report.t26777(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__26776,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta26778__$1));
});})(map__26776,map__26776__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26777 = ((function (map__26776,map__26776__$1,const_count,ic_count,pc_count){
return (function __GT_t26777(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__26776__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta26778){return (new clustermap.components.map_report.t26777(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__26776__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta26778));
});})(map__26776,map__26776__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26777(pc_count,path_fn,const_count,ic_count,map__26776__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__26809 = om.core.get_shared.call(null,owner);var map__26809__$1 = ((cljs.core.seq_QMARK_.call(null,map__26809))?cljs.core.apply.call(null,cljs.core.hash_map,map__26809):map__26809);var view_path_fn = cljs.core.get.call(null,map__26809__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__26809__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__26809__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__26810 = cljs.core._EQ__EQ_;var expr__26811 = type;if(cljs.core.truth_(pred__26810.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__26811)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__26810.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__26811)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__26810.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__26811)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

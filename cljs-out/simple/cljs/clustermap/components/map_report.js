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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__25796 = site_stats;var G__25796__$1 = (((G__25796 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__25796));return G__25796__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__25797 = site_stats;var G__25797__$1 = (((G__25797 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__25797));return G__25797__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__25798 = site_stats;var G__25798__$1 = (((G__25798 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__25798));return G__25798__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__25830 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25830__$1 = ((cljs.core.seq_QMARK_.call(null,map__25830))?cljs.core.apply.call(null,cljs.core.hash_map,map__25830):map__25830);var const_count = cljs.core.get.call(null,map__25830__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25830__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25830__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25831 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25831 = (function (pc_count,ic_count,const_count,map__25830,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta25832){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__25830 = map__25830;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta25832 = meta25832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25831.cljs$lang$type = true;
clustermap.components.map_report.t25831.cljs$lang$ctorStr = "clustermap.components.map-report/t25831";
clustermap.components.map_report.t25831.cljs$lang$ctorPrWriter = ((function (map__25830,map__25830__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25831");
});})(map__25830,map__25830__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25831.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25831.prototype.om$core$IRender$render$arity$1 = ((function (map__25830,map__25830__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs25836 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25836))?sablono.interpreter.attributes.call(null,attrs25836):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25836))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25836),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs25841 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25841))?sablono.interpreter.attributes.call(null,attrs25841):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25841))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25841),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs25846 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25846))?sablono.interpreter.attributes.call(null,attrs25846):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25846))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25847 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25847))?sablono.interpreter.attributes.call(null,attrs25847):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25847))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25847)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25846),(function (){var attrs25848 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25848))?sablono.interpreter.attributes.call(null,attrs25848):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25848))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25848)], null))));
})()], null))));
})(),(function (){var attrs25849 = clustermap.formats.money.fmoney.call(null,(function (){var G__25859 = self__.site_stats;var G__25859__$1 = (((G__25859 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25859));var G__25859__$2 = (((G__25859__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25859__$1));return G__25859__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25849))?sablono.interpreter.attributes.call(null,attrs25849):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25849))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25849),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25854 = clustermap.formats.number.fnum.call(null,(function (){var G__25860 = self__.site_stats;var G__25860__$1 = (((G__25860 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25860));var G__25860__$2 = (((G__25860__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25860__$1));return G__25860__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25854))?sablono.interpreter.attributes.call(null,attrs25854):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25854))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25854),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25830,map__25830__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25830,map__25830__$1,const_count,ic_count,pc_count){
return (function (_25833){var self__ = this;
var _25833__$1 = this;return self__.meta25832;
});})(map__25830,map__25830__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25830,map__25830__$1,const_count,ic_count,pc_count){
return (function (_25833,meta25832__$1){var self__ = this;
var _25833__$1 = this;return (new clustermap.components.map_report.t25831(self__.pc_count,self__.ic_count,self__.const_count,self__.map__25830,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta25832__$1));
});})(map__25830,map__25830__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25831 = ((function (map__25830,map__25830__$1,const_count,ic_count,pc_count){
return (function __GT_t25831(pc_count__$1,ic_count__$1,const_count__$1,map__25830__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25832){return (new clustermap.components.map_report.t25831(pc_count__$1,ic_count__$1,const_count__$1,map__25830__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25832));
});})(map__25830,map__25830__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25831(pc_count,ic_count,const_count,map__25830__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__25886 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25886__$1 = ((cljs.core.seq_QMARK_.call(null,map__25886))?cljs.core.apply.call(null,cljs.core.hash_map,map__25886):map__25886);var const_count = cljs.core.get.call(null,map__25886__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25886__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25886__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25887 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25887 = (function (map__25886,pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,meta25888){
this.map__25886 = map__25886;
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta25888 = meta25888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25887.cljs$lang$type = true;
clustermap.components.map_report.t25887.cljs$lang$ctorStr = "clustermap.components.map-report/t25887";
clustermap.components.map_report.t25887.cljs$lang$ctorPrWriter = ((function (map__25886,map__25886__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25887");
});})(map__25886,map__25886__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25887.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25887.prototype.om$core$IRender$render$arity$1 = ((function (map__25886,map__25886__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs25892 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25892))?sablono.interpreter.attributes.call(null,attrs25892):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25892))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25892)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25893 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25893))?sablono.interpreter.attributes.call(null,attrs25893):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25893))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25894 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25894))?sablono.interpreter.attributes.call(null,attrs25894):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25894))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25894)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25893),(function (){var attrs25895 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25895))?sablono.interpreter.attributes.call(null,attrs25895):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25895))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25895)], null))));
})()], null))));
})(),(function (){var attrs25896 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25896))?sablono.interpreter.attributes.call(null,attrs25896):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25896))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25897 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25897))?sablono.interpreter.attributes.call(null,attrs25897):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25897))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25897)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25896),(function (){var attrs25898 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25898))?sablono.interpreter.attributes.call(null,attrs25898):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25898))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25898)], null))));
})()], null))));
})(),(function (){var attrs25899 = clustermap.formats.money.fmoney.call(null,(function (){var G__25909 = self__.site_stats;var G__25909__$1 = (((G__25909 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25909));var G__25909__$2 = (((G__25909__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25909__$1));return G__25909__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25899))?sablono.interpreter.attributes.call(null,attrs25899):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25899))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25899),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25904 = clustermap.formats.number.fnum.call(null,(function (){var G__25910 = self__.site_stats;var G__25910__$1 = (((G__25910 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25910));var G__25910__$2 = (((G__25910__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25910__$1));return G__25910__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25904))?sablono.interpreter.attributes.call(null,attrs25904):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25904))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25904),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25886,map__25886__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25886,map__25886__$1,const_count,ic_count,pc_count){
return (function (_25889){var self__ = this;
var _25889__$1 = this;return self__.meta25888;
});})(map__25886,map__25886__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25886,map__25886__$1,const_count,ic_count,pc_count){
return (function (_25889,meta25888__$1){var self__ = this;
var _25889__$1 = this;return (new clustermap.components.map_report.t25887(self__.map__25886,self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta25888__$1));
});})(map__25886,map__25886__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25887 = ((function (map__25886,map__25886__$1,const_count,ic_count,pc_count){
return (function __GT_t25887(map__25886__$2,pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta25888){return (new clustermap.components.map_report.t25887(map__25886__$2,pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta25888));
});})(map__25886,map__25886__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25887(map__25886__$1,pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__25936 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25936__$1 = ((cljs.core.seq_QMARK_.call(null,map__25936))?cljs.core.apply.call(null,cljs.core.hash_map,map__25936):map__25936);var const_count = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25937 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25937 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,map__25936,investor_company_report,view_path_fn,site_stats,meta25938){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.map__25936 = map__25936;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta25938 = meta25938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25937.cljs$lang$type = true;
clustermap.components.map_report.t25937.cljs$lang$ctorStr = "clustermap.components.map-report/t25937";
clustermap.components.map_report.t25937.cljs$lang$ctorPrWriter = ((function (map__25936,map__25936__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25937");
});})(map__25936,map__25936__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25937.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25937.prototype.om$core$IRender$render$arity$1 = ((function (map__25936,map__25936__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs25942 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25942))?sablono.interpreter.attributes.call(null,attrs25942):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25942))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25942)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25943 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25943))?sablono.interpreter.attributes.call(null,attrs25943):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25943))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25944 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25944))?sablono.interpreter.attributes.call(null,attrs25944):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25944))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25944)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25943),(function (){var attrs25945 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25945))?sablono.interpreter.attributes.call(null,attrs25945):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25945))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25945)], null))));
})()], null))));
})(),(function (){var attrs25946 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25946))?sablono.interpreter.attributes.call(null,attrs25946):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25946))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25947 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25947))?sablono.interpreter.attributes.call(null,attrs25947):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25947))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25947)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25946),(function (){var attrs25948 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25948))?sablono.interpreter.attributes.call(null,attrs25948):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25948))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25948)], null))));
})()], null))));
})(),(function (){var attrs25949 = clustermap.formats.money.fmoney.call(null,(function (){var G__25959 = self__.site_stats;var G__25959__$1 = (((G__25959 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25959));var G__25959__$2 = (((G__25959__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25959__$1));return G__25959__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25949))?sablono.interpreter.attributes.call(null,attrs25949):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25949))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25949),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25954 = clustermap.formats.number.fnum.call(null,(function (){var G__25960 = self__.site_stats;var G__25960__$1 = (((G__25960 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25960));var G__25960__$2 = (((G__25960__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25960__$1));return G__25960__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25954))?sablono.interpreter.attributes.call(null,attrs25954):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25954))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25954),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25936,map__25936__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25936,map__25936__$1,const_count,ic_count,pc_count){
return (function (_25939){var self__ = this;
var _25939__$1 = this;return self__.meta25938;
});})(map__25936,map__25936__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25936,map__25936__$1,const_count,ic_count,pc_count){
return (function (_25939,meta25938__$1){var self__ = this;
var _25939__$1 = this;return (new clustermap.components.map_report.t25937(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.map__25936,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta25938__$1));
});})(map__25936,map__25936__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25937 = ((function (map__25936,map__25936__$1,const_count,ic_count,pc_count){
return (function __GT_t25937(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,map__25936__$2,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta25938){return (new clustermap.components.map_report.t25937(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,map__25936__$2,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta25938));
});})(map__25936,map__25936__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25937(pc_count,path_fn,const_count,investor_company,ic_count,comm,map__25936__$1,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__25990 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25990__$1 = ((cljs.core.seq_QMARK_.call(null,map__25990))?cljs.core.apply.call(null,cljs.core.hash_map,map__25990):map__25990);var const_count = cljs.core.get.call(null,map__25990__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25990__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25990__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25991 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25991 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__25990,site_stats,meta25992){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__25990 = map__25990;
this.site_stats = site_stats;
this.meta25992 = meta25992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25991.cljs$lang$type = true;
clustermap.components.map_report.t25991.cljs$lang$ctorStr = "clustermap.components.map-report/t25991";
clustermap.components.map_report.t25991.cljs$lang$ctorPrWriter = ((function (map__25990,map__25990__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25991");
});})(map__25990,map__25990__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25991.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25991.prototype.om$core$IRender$render$arity$1 = ((function (map__25990,map__25990__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs25996 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25996))?sablono.interpreter.attributes.call(null,attrs25996):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25996))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25996),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26001 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26001))?sablono.interpreter.attributes.call(null,attrs26001):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26001))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26002 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26002))?sablono.interpreter.attributes.call(null,attrs26002):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26002))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26002)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26001),(function (){var attrs26003 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26003))?sablono.interpreter.attributes.call(null,attrs26003):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26003))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26003)], null))));
})()], null))));
})(),(function (){var attrs26004 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26004))?sablono.interpreter.attributes.call(null,attrs26004):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26004))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26005 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26005))?sablono.interpreter.attributes.call(null,attrs26005):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26005))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26005)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26004),(function (){var attrs26006 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26006))?sablono.interpreter.attributes.call(null,attrs26006):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26006))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26006)], null))));
})()], null))));
})(),(function (){var attrs26007 = clustermap.formats.money.fmoney.call(null,(function (){var G__26017 = self__.site_stats;var G__26017__$1 = (((G__26017 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26017));var G__26017__$2 = (((G__26017__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26017__$1));return G__26017__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26007))?sablono.interpreter.attributes.call(null,attrs26007):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26007))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26007),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26012 = clustermap.formats.number.fnum.call(null,(function (){var G__26018 = self__.site_stats;var G__26018__$1 = (((G__26018 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26018));var G__26018__$2 = (((G__26018__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26018__$1));return G__26018__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26012))?sablono.interpreter.attributes.call(null,attrs26012):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26012))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26012),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25990,map__25990__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25991.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25990,map__25990__$1,const_count,ic_count,pc_count){
return (function (_25993){var self__ = this;
var _25993__$1 = this;return self__.meta25992;
});})(map__25990,map__25990__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25990,map__25990__$1,const_count,ic_count,pc_count){
return (function (_25993,meta25992__$1){var self__ = this;
var _25993__$1 = this;return (new clustermap.components.map_report.t25991(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__25990,self__.site_stats,meta25992__$1));
});})(map__25990,map__25990__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25991 = ((function (map__25990,map__25990__$1,const_count,ic_count,pc_count){
return (function __GT_t25991(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__25990__$2,site_stats__$1,meta25992){return (new clustermap.components.map_report.t25991(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__25990__$2,site_stats__$1,meta25992));
});})(map__25990,map__25990__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25991(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__25990__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__26023 = om.core.get_shared.call(null,owner);var map__26023__$1 = ((cljs.core.seq_QMARK_.call(null,map__26023))?cljs.core.apply.call(null,cljs.core.hash_map,map__26023):map__26023);var view_path_fn = cljs.core.get.call(null,map__26023__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__26023__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__26023__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__26024 = cljs.core._EQ__EQ_;var expr__26025 = type;if(cljs.core.truth_(pred__26024.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__26025)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__26024.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__26025)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__26024.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__26025)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

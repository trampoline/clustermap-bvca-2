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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__25728 = site_stats;var G__25728__$1 = (((G__25728 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__25728));return G__25728__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__25729 = site_stats;var G__25729__$1 = (((G__25729 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__25729));return G__25729__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__25730 = site_stats;var G__25730__$1 = (((G__25730 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__25730));return G__25730__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__25762 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25762__$1 = ((cljs.core.seq_QMARK_.call(null,map__25762))?cljs.core.apply.call(null,cljs.core.hash_map,map__25762):map__25762);var const_count = cljs.core.get.call(null,map__25762__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25762__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25762__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25763 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25763 = (function (pc_count,ic_count,const_count,map__25762,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta25764){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__25762 = map__25762;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta25764 = meta25764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25763.cljs$lang$type = true;
clustermap.components.map_report.t25763.cljs$lang$ctorStr = "clustermap.components.map-report/t25763";
clustermap.components.map_report.t25763.cljs$lang$ctorPrWriter = ((function (map__25762,map__25762__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25763");
});})(map__25762,map__25762__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25763.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25763.prototype.om$core$IRender$render$arity$1 = ((function (map__25762,map__25762__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs25768 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25768))?sablono.interpreter.attributes.call(null,attrs25768):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25768))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25768),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs25773 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25773))?sablono.interpreter.attributes.call(null,attrs25773):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25773))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25773),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs25778 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25778))?sablono.interpreter.attributes.call(null,attrs25778):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25778))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25779 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25779))?sablono.interpreter.attributes.call(null,attrs25779):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25779))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25779)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25778),(function (){var attrs25780 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25780))?sablono.interpreter.attributes.call(null,attrs25780):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25780))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25780)], null))));
})()], null))));
})(),(function (){var attrs25781 = clustermap.formats.money.fmoney.call(null,(function (){var G__25791 = self__.site_stats;var G__25791__$1 = (((G__25791 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25791));var G__25791__$2 = (((G__25791__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25791__$1));return G__25791__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25781))?sablono.interpreter.attributes.call(null,attrs25781):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25781))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25781),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25786 = clustermap.formats.number.fnum.call(null,(function (){var G__25792 = self__.site_stats;var G__25792__$1 = (((G__25792 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25792));var G__25792__$2 = (((G__25792__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25792__$1));return G__25792__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25786))?sablono.interpreter.attributes.call(null,attrs25786):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25786))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25786),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25762,map__25762__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25762,map__25762__$1,const_count,ic_count,pc_count){
return (function (_25765){var self__ = this;
var _25765__$1 = this;return self__.meta25764;
});})(map__25762,map__25762__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25762,map__25762__$1,const_count,ic_count,pc_count){
return (function (_25765,meta25764__$1){var self__ = this;
var _25765__$1 = this;return (new clustermap.components.map_report.t25763(self__.pc_count,self__.ic_count,self__.const_count,self__.map__25762,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta25764__$1));
});})(map__25762,map__25762__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25763 = ((function (map__25762,map__25762__$1,const_count,ic_count,pc_count){
return (function __GT_t25763(pc_count__$1,ic_count__$1,const_count__$1,map__25762__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25764){return (new clustermap.components.map_report.t25763(pc_count__$1,ic_count__$1,const_count__$1,map__25762__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25764));
});})(map__25762,map__25762__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25763(pc_count,ic_count,const_count,map__25762__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__25818 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25818__$1 = ((cljs.core.seq_QMARK_.call(null,map__25818))?cljs.core.apply.call(null,cljs.core.hash_map,map__25818):map__25818);var const_count = cljs.core.get.call(null,map__25818__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25818__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25818__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25819 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25819 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__25818,portfolio_company_report,site_stats,meta25820){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__25818 = map__25818;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta25820 = meta25820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25819.cljs$lang$type = true;
clustermap.components.map_report.t25819.cljs$lang$ctorStr = "clustermap.components.map-report/t25819";
clustermap.components.map_report.t25819.cljs$lang$ctorPrWriter = ((function (map__25818,map__25818__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25819");
});})(map__25818,map__25818__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25819.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25819.prototype.om$core$IRender$render$arity$1 = ((function (map__25818,map__25818__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs25824 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25824))?sablono.interpreter.attributes.call(null,attrs25824):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25824))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25824)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25825 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25825))?sablono.interpreter.attributes.call(null,attrs25825):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25825))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25826 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25826))?sablono.interpreter.attributes.call(null,attrs25826):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25826))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25826)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25825),(function (){var attrs25827 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25827))?sablono.interpreter.attributes.call(null,attrs25827):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25827))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25827)], null))));
})()], null))));
})(),(function (){var attrs25828 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25828))?sablono.interpreter.attributes.call(null,attrs25828):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25828))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25829 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25829))?sablono.interpreter.attributes.call(null,attrs25829):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25829))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25829)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25828),(function (){var attrs25830 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25830))?sablono.interpreter.attributes.call(null,attrs25830):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25830))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25830)], null))));
})()], null))));
})(),(function (){var attrs25831 = clustermap.formats.money.fmoney.call(null,(function (){var G__25841 = self__.site_stats;var G__25841__$1 = (((G__25841 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25841));var G__25841__$2 = (((G__25841__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25841__$1));return G__25841__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25831))?sablono.interpreter.attributes.call(null,attrs25831):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25831))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25831),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25836 = clustermap.formats.number.fnum.call(null,(function (){var G__25842 = self__.site_stats;var G__25842__$1 = (((G__25842 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25842));var G__25842__$2 = (((G__25842__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25842__$1));return G__25842__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25836))?sablono.interpreter.attributes.call(null,attrs25836):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25836))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25836),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25818,map__25818__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25818,map__25818__$1,const_count,ic_count,pc_count){
return (function (_25821){var self__ = this;
var _25821__$1 = this;return self__.meta25820;
});})(map__25818,map__25818__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25818,map__25818__$1,const_count,ic_count,pc_count){
return (function (_25821,meta25820__$1){var self__ = this;
var _25821__$1 = this;return (new clustermap.components.map_report.t25819(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__25818,self__.portfolio_company_report,self__.site_stats,meta25820__$1));
});})(map__25818,map__25818__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25819 = ((function (map__25818,map__25818__$1,const_count,ic_count,pc_count){
return (function __GT_t25819(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__25818__$2,portfolio_company_report__$1,site_stats__$1,meta25820){return (new clustermap.components.map_report.t25819(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__25818__$2,portfolio_company_report__$1,site_stats__$1,meta25820));
});})(map__25818,map__25818__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25819(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__25818__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__25868 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25868__$1 = ((cljs.core.seq_QMARK_.call(null,map__25868))?cljs.core.apply.call(null,cljs.core.hash_map,map__25868):map__25868);var const_count = cljs.core.get.call(null,map__25868__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25868__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25868__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25869 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25869 = (function (pc_count,path_fn,const_count,map__25868,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta25870){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.map__25868 = map__25868;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta25870 = meta25870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25869.cljs$lang$type = true;
clustermap.components.map_report.t25869.cljs$lang$ctorStr = "clustermap.components.map-report/t25869";
clustermap.components.map_report.t25869.cljs$lang$ctorPrWriter = ((function (map__25868,map__25868__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25869");
});})(map__25868,map__25868__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25869.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25869.prototype.om$core$IRender$render$arity$1 = ((function (map__25868,map__25868__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs25874 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25874))?sablono.interpreter.attributes.call(null,attrs25874):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25874))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25874)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25875 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25875))?sablono.interpreter.attributes.call(null,attrs25875):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25875))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25876 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25876))?sablono.interpreter.attributes.call(null,attrs25876):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25876))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25876)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25875),(function (){var attrs25877 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25877))?sablono.interpreter.attributes.call(null,attrs25877):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25877))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25877)], null))));
})()], null))));
})(),(function (){var attrs25878 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25878))?sablono.interpreter.attributes.call(null,attrs25878):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25878))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25879 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25879))?sablono.interpreter.attributes.call(null,attrs25879):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25879))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25879)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25878),(function (){var attrs25880 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25880))?sablono.interpreter.attributes.call(null,attrs25880):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25880))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25880)], null))));
})()], null))));
})(),(function (){var attrs25881 = clustermap.formats.money.fmoney.call(null,(function (){var G__25891 = self__.site_stats;var G__25891__$1 = (((G__25891 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25891));var G__25891__$2 = (((G__25891__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25891__$1));return G__25891__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25881))?sablono.interpreter.attributes.call(null,attrs25881):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25881))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25881),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25886 = clustermap.formats.number.fnum.call(null,(function (){var G__25892 = self__.site_stats;var G__25892__$1 = (((G__25892 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25892));var G__25892__$2 = (((G__25892__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25892__$1));return G__25892__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25886))?sablono.interpreter.attributes.call(null,attrs25886):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25886))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25886),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25868,map__25868__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25868,map__25868__$1,const_count,ic_count,pc_count){
return (function (_25871){var self__ = this;
var _25871__$1 = this;return self__.meta25870;
});})(map__25868,map__25868__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25868,map__25868__$1,const_count,ic_count,pc_count){
return (function (_25871,meta25870__$1){var self__ = this;
var _25871__$1 = this;return (new clustermap.components.map_report.t25869(self__.pc_count,self__.path_fn,self__.const_count,self__.map__25868,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta25870__$1));
});})(map__25868,map__25868__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25869 = ((function (map__25868,map__25868__$1,const_count,ic_count,pc_count){
return (function __GT_t25869(pc_count__$1,path_fn__$1,const_count__$1,map__25868__$2,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta25870){return (new clustermap.components.map_report.t25869(pc_count__$1,path_fn__$1,const_count__$1,map__25868__$2,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta25870));
});})(map__25868,map__25868__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25869(pc_count,path_fn,const_count,map__25868__$1,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__25922 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25922__$1 = ((cljs.core.seq_QMARK_.call(null,map__25922))?cljs.core.apply.call(null,cljs.core.hash_map,map__25922):map__25922);var const_count = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25923 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25923 = (function (map__25922,pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta25924){
this.map__25922 = map__25922;
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta25924 = meta25924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25923.cljs$lang$type = true;
clustermap.components.map_report.t25923.cljs$lang$ctorStr = "clustermap.components.map-report/t25923";
clustermap.components.map_report.t25923.cljs$lang$ctorPrWriter = ((function (map__25922,map__25922__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25923");
});})(map__25922,map__25922__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25923.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25923.prototype.om$core$IRender$render$arity$1 = ((function (map__25922,map__25922__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs25928 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25928))?sablono.interpreter.attributes.call(null,attrs25928):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25928))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25928),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25933 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25933))?sablono.interpreter.attributes.call(null,attrs25933):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25933))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25934 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25934))?sablono.interpreter.attributes.call(null,attrs25934):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25934))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25934)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25933),(function (){var attrs25935 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25935))?sablono.interpreter.attributes.call(null,attrs25935):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25935))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25935)], null))));
})()], null))));
})(),(function (){var attrs25936 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25936))?sablono.interpreter.attributes.call(null,attrs25936):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25936))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25937 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25937))?sablono.interpreter.attributes.call(null,attrs25937):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25937))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25937)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25936),(function (){var attrs25938 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25938))?sablono.interpreter.attributes.call(null,attrs25938):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25938))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25938)], null))));
})()], null))));
})(),(function (){var attrs25939 = clustermap.formats.money.fmoney.call(null,(function (){var G__25949 = self__.site_stats;var G__25949__$1 = (((G__25949 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25949));var G__25949__$2 = (((G__25949__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25949__$1));return G__25949__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25939))?sablono.interpreter.attributes.call(null,attrs25939):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25939))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25939),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25944 = clustermap.formats.number.fnum.call(null,(function (){var G__25950 = self__.site_stats;var G__25950__$1 = (((G__25950 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25950));var G__25950__$2 = (((G__25950__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25950__$1));return G__25950__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25944))?sablono.interpreter.attributes.call(null,attrs25944):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25944))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25944),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25922,map__25922__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25922,map__25922__$1,const_count,ic_count,pc_count){
return (function (_25925){var self__ = this;
var _25925__$1 = this;return self__.meta25924;
});})(map__25922,map__25922__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25922,map__25922__$1,const_count,ic_count,pc_count){
return (function (_25925,meta25924__$1){var self__ = this;
var _25925__$1 = this;return (new clustermap.components.map_report.t25923(self__.map__25922,self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta25924__$1));
});})(map__25922,map__25922__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25923 = ((function (map__25922,map__25922__$1,const_count,ic_count,pc_count){
return (function __GT_t25923(map__25922__$2,pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta25924){return (new clustermap.components.map_report.t25923(map__25922__$2,pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta25924));
});})(map__25922,map__25922__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25923(map__25922__$1,pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__25955 = om.core.get_shared.call(null,owner);var map__25955__$1 = ((cljs.core.seq_QMARK_.call(null,map__25955))?cljs.core.apply.call(null,cljs.core.hash_map,map__25955):map__25955);var view_path_fn = cljs.core.get.call(null,map__25955__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__25955__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__25955__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__25956 = cljs.core._EQ__EQ_;var expr__25957 = type;if(cljs.core.truth_(pred__25956.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__25957)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__25956.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__25957)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__25956.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__25957)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

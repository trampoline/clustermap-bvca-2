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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13575 = site_stats;var G__13575__$1 = (((G__13575 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13575));return G__13575__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13576 = site_stats;var G__13576__$1 = (((G__13576 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13576));return G__13576__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13577 = site_stats;var G__13577__$1 = (((G__13577 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13577));return G__13577__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__13609 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13609__$1 = ((cljs.core.seq_QMARK_.call(null,map__13609))?cljs.core.apply.call(null,cljs.core.hash_map,map__13609):map__13609);var const_count = cljs.core.get.call(null,map__13609__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13609__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13609__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13610 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13610 = (function (pc_count,ic_count,const_count,map__13609,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta13611){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__13609 = map__13609;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta13611 = meta13611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13610.cljs$lang$type = true;
clustermap.components.map_report.t13610.cljs$lang$ctorStr = "clustermap.components.map-report/t13610";
clustermap.components.map_report.t13610.cljs$lang$ctorPrWriter = ((function (map__13609,map__13609__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13610");
});})(map__13609,map__13609__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13610.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13610.prototype.om$core$IRender$render$arity$1 = ((function (map__13609,map__13609__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs13615 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13615))?sablono.interpreter.attributes.call(null,attrs13615):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13615))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13615),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs13620 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13620))?sablono.interpreter.attributes.call(null,attrs13620):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13620))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13620),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs13625 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13625))?sablono.interpreter.attributes.call(null,attrs13625):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13625))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13626 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13626))?sablono.interpreter.attributes.call(null,attrs13626):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13626))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13626)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13625),(function (){var attrs13627 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13627))?sablono.interpreter.attributes.call(null,attrs13627):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13627))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13627)], null))));
})()], null))));
})(),(function (){var attrs13628 = clustermap.formats.money.fmoney.call(null,(function (){var G__13638 = self__.site_stats;var G__13638__$1 = (((G__13638 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13638));var G__13638__$2 = (((G__13638__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13638__$1));return G__13638__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13628))?sablono.interpreter.attributes.call(null,attrs13628):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13628))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13628),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13633 = clustermap.formats.number.fnum.call(null,(function (){var G__13639 = self__.site_stats;var G__13639__$1 = (((G__13639 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13639));var G__13639__$2 = (((G__13639__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13639__$1));return G__13639__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13633))?sablono.interpreter.attributes.call(null,attrs13633):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13633))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13633),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13609,map__13609__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13609,map__13609__$1,const_count,ic_count,pc_count){
return (function (_13612){var self__ = this;
var _13612__$1 = this;return self__.meta13611;
});})(map__13609,map__13609__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13609,map__13609__$1,const_count,ic_count,pc_count){
return (function (_13612,meta13611__$1){var self__ = this;
var _13612__$1 = this;return (new clustermap.components.map_report.t13610(self__.pc_count,self__.ic_count,self__.const_count,self__.map__13609,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta13611__$1));
});})(map__13609,map__13609__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13610 = ((function (map__13609,map__13609__$1,const_count,ic_count,pc_count){
return (function __GT_t13610(pc_count__$1,ic_count__$1,const_count__$1,map__13609__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13611){return (new clustermap.components.map_report.t13610(pc_count__$1,ic_count__$1,const_count__$1,map__13609__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13611));
});})(map__13609,map__13609__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13610(pc_count,ic_count,const_count,map__13609__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__13665 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13665__$1 = ((cljs.core.seq_QMARK_.call(null,map__13665))?cljs.core.apply.call(null,cljs.core.hash_map,map__13665):map__13665);var const_count = cljs.core.get.call(null,map__13665__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13665__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13665__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13666 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13666 = (function (pc_count,map__13665,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,meta13667){
this.pc_count = pc_count;
this.map__13665 = map__13665;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta13667 = meta13667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13666.cljs$lang$type = true;
clustermap.components.map_report.t13666.cljs$lang$ctorStr = "clustermap.components.map-report/t13666";
clustermap.components.map_report.t13666.cljs$lang$ctorPrWriter = ((function (map__13665,map__13665__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13666");
});})(map__13665,map__13665__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13666.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13666.prototype.om$core$IRender$render$arity$1 = ((function (map__13665,map__13665__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs13671 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13671))?sablono.interpreter.attributes.call(null,attrs13671):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13671))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13671)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13672 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13672))?sablono.interpreter.attributes.call(null,attrs13672):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13672))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13673 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13673))?sablono.interpreter.attributes.call(null,attrs13673):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13673))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13673)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13672),(function (){var attrs13674 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13674))?sablono.interpreter.attributes.call(null,attrs13674):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13674))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13674)], null))));
})()], null))));
})(),(function (){var attrs13675 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13675))?sablono.interpreter.attributes.call(null,attrs13675):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13675))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13676 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13676))?sablono.interpreter.attributes.call(null,attrs13676):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13676))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13676)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13675),(function (){var attrs13677 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13677))?sablono.interpreter.attributes.call(null,attrs13677):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13677))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13677)], null))));
})()], null))));
})(),(function (){var attrs13678 = clustermap.formats.money.fmoney.call(null,(function (){var G__13688 = self__.site_stats;var G__13688__$1 = (((G__13688 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13688));var G__13688__$2 = (((G__13688__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13688__$1));return G__13688__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13678))?sablono.interpreter.attributes.call(null,attrs13678):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13678))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13678),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13683 = clustermap.formats.number.fnum.call(null,(function (){var G__13689 = self__.site_stats;var G__13689__$1 = (((G__13689 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13689));var G__13689__$2 = (((G__13689__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13689__$1));return G__13689__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13683))?sablono.interpreter.attributes.call(null,attrs13683):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13683))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13683),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13665,map__13665__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13665,map__13665__$1,const_count,ic_count,pc_count){
return (function (_13668){var self__ = this;
var _13668__$1 = this;return self__.meta13667;
});})(map__13665,map__13665__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13665,map__13665__$1,const_count,ic_count,pc_count){
return (function (_13668,meta13667__$1){var self__ = this;
var _13668__$1 = this;return (new clustermap.components.map_report.t13666(self__.pc_count,self__.map__13665,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta13667__$1));
});})(map__13665,map__13665__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13666 = ((function (map__13665,map__13665__$1,const_count,ic_count,pc_count){
return (function __GT_t13666(pc_count__$1,map__13665__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13667){return (new clustermap.components.map_report.t13666(pc_count__$1,map__13665__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13667));
});})(map__13665,map__13665__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13666(pc_count,map__13665__$1,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13715 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13715__$1 = ((cljs.core.seq_QMARK_.call(null,map__13715))?cljs.core.apply.call(null,cljs.core.hash_map,map__13715):map__13715);var const_count = cljs.core.get.call(null,map__13715__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13715__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13715__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13716 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13716 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__13715,comm,investor_company_report,view_path_fn,site_stats,meta13717){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__13715 = map__13715;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13717 = meta13717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13716.cljs$lang$type = true;
clustermap.components.map_report.t13716.cljs$lang$ctorStr = "clustermap.components.map-report/t13716";
clustermap.components.map_report.t13716.cljs$lang$ctorPrWriter = ((function (map__13715,map__13715__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13716");
});})(map__13715,map__13715__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13716.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13716.prototype.om$core$IRender$render$arity$1 = ((function (map__13715,map__13715__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13721 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13721))?sablono.interpreter.attributes.call(null,attrs13721):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13721))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13721)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13722 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13722))?sablono.interpreter.attributes.call(null,attrs13722):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13722))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13723 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13723))?sablono.interpreter.attributes.call(null,attrs13723):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13723))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13723)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13722),(function (){var attrs13724 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13724))?sablono.interpreter.attributes.call(null,attrs13724):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13724))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13724)], null))));
})()], null))));
})(),(function (){var attrs13725 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13725))?sablono.interpreter.attributes.call(null,attrs13725):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13725))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13726 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13726))?sablono.interpreter.attributes.call(null,attrs13726):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13726))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13726)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13725),(function (){var attrs13727 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13727))?sablono.interpreter.attributes.call(null,attrs13727):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13727))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13727)], null))));
})()], null))));
})(),(function (){var attrs13728 = clustermap.formats.money.fmoney.call(null,(function (){var G__13738 = self__.site_stats;var G__13738__$1 = (((G__13738 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13738));var G__13738__$2 = (((G__13738__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13738__$1));return G__13738__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13728))?sablono.interpreter.attributes.call(null,attrs13728):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13728))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13728),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13733 = clustermap.formats.number.fnum.call(null,(function (){var G__13739 = self__.site_stats;var G__13739__$1 = (((G__13739 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13739));var G__13739__$2 = (((G__13739__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13739__$1));return G__13739__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13733))?sablono.interpreter.attributes.call(null,attrs13733):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13733))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13733),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13715,map__13715__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13715,map__13715__$1,const_count,ic_count,pc_count){
return (function (_13718){var self__ = this;
var _13718__$1 = this;return self__.meta13717;
});})(map__13715,map__13715__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13715,map__13715__$1,const_count,ic_count,pc_count){
return (function (_13718,meta13717__$1){var self__ = this;
var _13718__$1 = this;return (new clustermap.components.map_report.t13716(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__13715,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta13717__$1));
});})(map__13715,map__13715__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13716 = ((function (map__13715,map__13715__$1,const_count,ic_count,pc_count){
return (function __GT_t13716(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__13715__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13717){return (new clustermap.components.map_report.t13716(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__13715__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13717));
});})(map__13715,map__13715__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13716(pc_count,path_fn,const_count,investor_company,ic_count,map__13715__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13769 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13769__$1 = ((cljs.core.seq_QMARK_.call(null,map__13769))?cljs.core.apply.call(null,cljs.core.hash_map,map__13769):map__13769);var const_count = cljs.core.get.call(null,map__13769__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13769__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13769__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13770 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13770 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__13769,site_stats,meta13771){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__13769 = map__13769;
this.site_stats = site_stats;
this.meta13771 = meta13771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13770.cljs$lang$type = true;
clustermap.components.map_report.t13770.cljs$lang$ctorStr = "clustermap.components.map-report/t13770";
clustermap.components.map_report.t13770.cljs$lang$ctorPrWriter = ((function (map__13769,map__13769__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13770");
});})(map__13769,map__13769__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13770.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13770.prototype.om$core$IRender$render$arity$1 = ((function (map__13769,map__13769__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13775 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13775))?sablono.interpreter.attributes.call(null,attrs13775):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13775))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13775),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13780 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13780))?sablono.interpreter.attributes.call(null,attrs13780):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13780))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13781 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13781))?sablono.interpreter.attributes.call(null,attrs13781):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13781))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13781)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13780),(function (){var attrs13782 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13782))?sablono.interpreter.attributes.call(null,attrs13782):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13782))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13782)], null))));
})()], null))));
})(),(function (){var attrs13783 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13783))?sablono.interpreter.attributes.call(null,attrs13783):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13783))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13784 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13784))?sablono.interpreter.attributes.call(null,attrs13784):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13784))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13784)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13783),(function (){var attrs13785 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13785))?sablono.interpreter.attributes.call(null,attrs13785):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13785))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13785)], null))));
})()], null))));
})(),(function (){var attrs13786 = clustermap.formats.money.fmoney.call(null,(function (){var G__13796 = self__.site_stats;var G__13796__$1 = (((G__13796 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13796));var G__13796__$2 = (((G__13796__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13796__$1));return G__13796__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13786))?sablono.interpreter.attributes.call(null,attrs13786):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13786))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13786),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13791 = clustermap.formats.number.fnum.call(null,(function (){var G__13797 = self__.site_stats;var G__13797__$1 = (((G__13797 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13797));var G__13797__$2 = (((G__13797__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13797__$1));return G__13797__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13791))?sablono.interpreter.attributes.call(null,attrs13791):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13791))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13791),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13769,map__13769__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13769,map__13769__$1,const_count,ic_count,pc_count){
return (function (_13772){var self__ = this;
var _13772__$1 = this;return self__.meta13771;
});})(map__13769,map__13769__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13769,map__13769__$1,const_count,ic_count,pc_count){
return (function (_13772,meta13771__$1){var self__ = this;
var _13772__$1 = this;return (new clustermap.components.map_report.t13770(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__13769,self__.site_stats,meta13771__$1));
});})(map__13769,map__13769__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13770 = ((function (map__13769,map__13769__$1,const_count,ic_count,pc_count){
return (function __GT_t13770(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__13769__$2,site_stats__$1,meta13771){return (new clustermap.components.map_report.t13770(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__13769__$2,site_stats__$1,meta13771));
});})(map__13769,map__13769__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13770(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__13769__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13802 = om.core.get_shared.call(null,owner);var map__13802__$1 = ((cljs.core.seq_QMARK_.call(null,map__13802))?cljs.core.apply.call(null,cljs.core.hash_map,map__13802):map__13802);var view_path_fn = cljs.core.get.call(null,map__13802__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13802__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13802__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13803 = cljs.core._EQ__EQ_;var expr__13804 = type;if(cljs.core.truth_(pred__13803.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13804)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13803.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13804)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13803.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13804)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

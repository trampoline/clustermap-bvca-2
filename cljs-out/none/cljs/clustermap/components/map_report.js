// Compiled by ClojureScript 0.0-2227
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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",1116886791))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__46012 = site_stats;var G__46012__$1 = (((G__46012 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__46012));return G__46012__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__46013 = site_stats;var G__46013__$1 = (((G__46013 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__46013));return G__46013__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__46014 = site_stats;var G__46014__$1 = (((G__46014 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__46014));return G__46014__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__46046 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46046__$1 = ((cljs.core.seq_QMARK_.call(null,map__46046))?cljs.core.apply.call(null,cljs.core.hash_map,map__46046):map__46046);var const_count = cljs.core.get.call(null,map__46046__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46046__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46046__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46047 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46047 = (function (pc_count,ic_count,const_count,map__46046,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta46048){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__46046 = map__46046;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta46048 = meta46048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46047.cljs$lang$type = true;
clustermap.components.map_report.t46047.cljs$lang$ctorStr = "clustermap.components.map-report/t46047";
clustermap.components.map_report.t46047.cljs$lang$ctorPrWriter = ((function (map__46046,map__46046__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t46047");
});})(map__46046,map__46046__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46047.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46047.prototype.om$core$IRender$render$arity$1 = ((function (map__46046,map__46046__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs46052 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46052))?sablono.interpreter.attributes.call(null,attrs46052):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46052))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46052),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs46057 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46057))?sablono.interpreter.attributes.call(null,attrs46057):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46057))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46057),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs46062 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46062))?sablono.interpreter.attributes.call(null,attrs46062):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46062))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46063 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46063))?sablono.interpreter.attributes.call(null,attrs46063):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46063))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46063)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46062),(function (){var attrs46064 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46064))?sablono.interpreter.attributes.call(null,attrs46064):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46064))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46064)], null))));
})()], null))));
})(),(function (){var attrs46065 = clustermap.formats.money.fmoney.call(null,(function (){var G__46075 = self__.site_stats;var G__46075__$1 = (((G__46075 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46075));var G__46075__$2 = (((G__46075__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46075__$1));return G__46075__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46065))?sablono.interpreter.attributes.call(null,attrs46065):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46065))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46065),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46070 = clustermap.formats.number.fnum.call(null,(function (){var G__46076 = self__.site_stats;var G__46076__$1 = (((G__46076 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46076));var G__46076__$2 = (((G__46076__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46076__$1));return G__46076__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46070))?sablono.interpreter.attributes.call(null,attrs46070):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46070))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46070),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__46046,map__46046__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46046,map__46046__$1,const_count,ic_count,pc_count){
return (function (_46049){var self__ = this;
var _46049__$1 = this;return self__.meta46048;
});})(map__46046,map__46046__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46046,map__46046__$1,const_count,ic_count,pc_count){
return (function (_46049,meta46048__$1){var self__ = this;
var _46049__$1 = this;return (new clustermap.components.map_report.t46047(self__.pc_count,self__.ic_count,self__.const_count,self__.map__46046,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta46048__$1));
});})(map__46046,map__46046__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46047 = ((function (map__46046,map__46046__$1,const_count,ic_count,pc_count){
return (function __GT_t46047(pc_count__$1,ic_count__$1,const_count__$1,map__46046__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta46048){return (new clustermap.components.map_report.t46047(pc_count__$1,ic_count__$1,const_count__$1,map__46046__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta46048));
});})(map__46046,map__46046__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46047(pc_count,ic_count,const_count,map__46046__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__46102 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46102__$1 = ((cljs.core.seq_QMARK_.call(null,map__46102))?cljs.core.apply.call(null,cljs.core.hash_map,map__46102):map__46102);var const_count = cljs.core.get.call(null,map__46102__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46102__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46102__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46103 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46103 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,map__46102,site_stats,meta46104){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.map__46102 = map__46102;
this.site_stats = site_stats;
this.meta46104 = meta46104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46103.cljs$lang$type = true;
clustermap.components.map_report.t46103.cljs$lang$ctorStr = "clustermap.components.map-report/t46103";
clustermap.components.map_report.t46103.cljs$lang$ctorPrWriter = ((function (map__46102,map__46102__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t46103");
});})(map__46102,map__46102__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46103.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46103.prototype.om$core$IRender$render$arity$1 = ((function (map__46102,map__46102__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs46108 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46108))?sablono.interpreter.attributes.call(null,attrs46108):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46108))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46108)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs46109 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46109))?sablono.interpreter.attributes.call(null,attrs46109):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46109))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46110 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46110))?sablono.interpreter.attributes.call(null,attrs46110):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46110))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46110)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46109),(function (){var attrs46111 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46111))?sablono.interpreter.attributes.call(null,attrs46111):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46111))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46111)], null))));
})()], null))));
})(),(function (){var attrs46112 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46112))?sablono.interpreter.attributes.call(null,attrs46112):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46112))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46113 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46113))?sablono.interpreter.attributes.call(null,attrs46113):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46113))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46113)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46112),(function (){var attrs46114 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46114))?sablono.interpreter.attributes.call(null,attrs46114):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46114))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46114)], null))));
})()], null))));
})(),(function (){var attrs46115 = clustermap.formats.money.fmoney.call(null,(function (){var G__46125 = self__.site_stats;var G__46125__$1 = (((G__46125 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46125));var G__46125__$2 = (((G__46125__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46125__$1));return G__46125__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46115))?sablono.interpreter.attributes.call(null,attrs46115):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46115))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46115),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46120 = clustermap.formats.number.fnum.call(null,(function (){var G__46126 = self__.site_stats;var G__46126__$1 = (((G__46126 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46126));var G__46126__$2 = (((G__46126__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46126__$1));return G__46126__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46120))?sablono.interpreter.attributes.call(null,attrs46120):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46120))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46120),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__46102,map__46102__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46102,map__46102__$1,const_count,ic_count,pc_count){
return (function (_46105){var self__ = this;
var _46105__$1 = this;return self__.meta46104;
});})(map__46102,map__46102__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46102,map__46102__$1,const_count,ic_count,pc_count){
return (function (_46105,meta46104__$1){var self__ = this;
var _46105__$1 = this;return (new clustermap.components.map_report.t46103(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.map__46102,self__.site_stats,meta46104__$1));
});})(map__46102,map__46102__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46103 = ((function (map__46102,map__46102__$1,const_count,ic_count,pc_count){
return (function __GT_t46103(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,map__46102__$2,site_stats__$1,meta46104){return (new clustermap.components.map_report.t46103(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,map__46102__$2,site_stats__$1,meta46104));
});})(map__46102,map__46102__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46103(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,map__46102__$1,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__46152 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46152__$1 = ((cljs.core.seq_QMARK_.call(null,map__46152))?cljs.core.apply.call(null,cljs.core.hash_map,map__46152):map__46152);var const_count = cljs.core.get.call(null,map__46152__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46152__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46152__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46153 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46153 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__46152,comm,investor_company_report,view_path_fn,site_stats,meta46154){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__46152 = map__46152;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta46154 = meta46154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46153.cljs$lang$type = true;
clustermap.components.map_report.t46153.cljs$lang$ctorStr = "clustermap.components.map-report/t46153";
clustermap.components.map_report.t46153.cljs$lang$ctorPrWriter = ((function (map__46152,map__46152__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t46153");
});})(map__46152,map__46152__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46153.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46153.prototype.om$core$IRender$render$arity$1 = ((function (map__46152,map__46152__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs46158 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46158))?sablono.interpreter.attributes.call(null,attrs46158):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46158))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46158)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs46159 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46159))?sablono.interpreter.attributes.call(null,attrs46159):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46159))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46160 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46160))?sablono.interpreter.attributes.call(null,attrs46160):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46160)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46159),(function (){var attrs46161 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46161))?sablono.interpreter.attributes.call(null,attrs46161):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46161))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46161)], null))));
})()], null))));
})(),(function (){var attrs46162 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46162))?sablono.interpreter.attributes.call(null,attrs46162):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46162))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46163 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46163))?sablono.interpreter.attributes.call(null,attrs46163):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46163))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46163)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46162),(function (){var attrs46164 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46164))?sablono.interpreter.attributes.call(null,attrs46164):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46164))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46164)], null))));
})()], null))));
})(),(function (){var attrs46165 = clustermap.formats.money.fmoney.call(null,(function (){var G__46175 = self__.site_stats;var G__46175__$1 = (((G__46175 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46175));var G__46175__$2 = (((G__46175__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46175__$1));return G__46175__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46165))?sablono.interpreter.attributes.call(null,attrs46165):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46165))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46165),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46170 = clustermap.formats.number.fnum.call(null,(function (){var G__46176 = self__.site_stats;var G__46176__$1 = (((G__46176 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46176));var G__46176__$2 = (((G__46176__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46176__$1));return G__46176__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46170))?sablono.interpreter.attributes.call(null,attrs46170):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46170))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46170),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__46152,map__46152__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46152,map__46152__$1,const_count,ic_count,pc_count){
return (function (_46155){var self__ = this;
var _46155__$1 = this;return self__.meta46154;
});})(map__46152,map__46152__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46152,map__46152__$1,const_count,ic_count,pc_count){
return (function (_46155,meta46154__$1){var self__ = this;
var _46155__$1 = this;return (new clustermap.components.map_report.t46153(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__46152,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta46154__$1));
});})(map__46152,map__46152__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46153 = ((function (map__46152,map__46152__$1,const_count,ic_count,pc_count){
return (function __GT_t46153(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__46152__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta46154){return (new clustermap.components.map_report.t46153(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__46152__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta46154));
});})(map__46152,map__46152__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46153(pc_count,path_fn,const_count,investor_company,ic_count,map__46152__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__46206 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46206__$1 = ((cljs.core.seq_QMARK_.call(null,map__46206))?cljs.core.apply.call(null,cljs.core.hash_map,map__46206):map__46206);var const_count = cljs.core.get.call(null,map__46206__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46206__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46206__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46207 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46207 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,map__46206,comm,constituency,view_path_fn,site_stats,meta46208){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.map__46206 = map__46206;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta46208 = meta46208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46207.cljs$lang$type = true;
clustermap.components.map_report.t46207.cljs$lang$ctorStr = "clustermap.components.map-report/t46207";
clustermap.components.map_report.t46207.cljs$lang$ctorPrWriter = ((function (map__46206,map__46206__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t46207");
});})(map__46206,map__46206__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46207.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46207.prototype.om$core$IRender$render$arity$1 = ((function (map__46206,map__46206__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs46212 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46212))?sablono.interpreter.attributes.call(null,attrs46212):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46212))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46212),React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs46217 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46217))?sablono.interpreter.attributes.call(null,attrs46217):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46217))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46218 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46218))?sablono.interpreter.attributes.call(null,attrs46218):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46218))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46218)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46217),(function (){var attrs46219 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46219))?sablono.interpreter.attributes.call(null,attrs46219):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46219))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46219)], null))));
})()], null))));
})(),(function (){var attrs46220 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46220))?sablono.interpreter.attributes.call(null,attrs46220):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46220))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46221 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46221))?sablono.interpreter.attributes.call(null,attrs46221):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46221))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46221)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46220),(function (){var attrs46222 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46222))?sablono.interpreter.attributes.call(null,attrs46222):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46222))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46222)], null))));
})()], null))));
})(),(function (){var attrs46223 = clustermap.formats.money.fmoney.call(null,(function (){var G__46233 = self__.site_stats;var G__46233__$1 = (((G__46233 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46233));var G__46233__$2 = (((G__46233__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46233__$1));return G__46233__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46223))?sablono.interpreter.attributes.call(null,attrs46223):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46223))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46223),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46228 = clustermap.formats.number.fnum.call(null,(function (){var G__46234 = self__.site_stats;var G__46234__$1 = (((G__46234 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46234));var G__46234__$2 = (((G__46234__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46234__$1));return G__46234__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46228))?sablono.interpreter.attributes.call(null,attrs46228):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46228))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46228),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__46206,map__46206__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46206,map__46206__$1,const_count,ic_count,pc_count){
return (function (_46209){var self__ = this;
var _46209__$1 = this;return self__.meta46208;
});})(map__46206,map__46206__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46206,map__46206__$1,const_count,ic_count,pc_count){
return (function (_46209,meta46208__$1){var self__ = this;
var _46209__$1 = this;return (new clustermap.components.map_report.t46207(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.map__46206,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta46208__$1));
});})(map__46206,map__46206__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46207 = ((function (map__46206,map__46206__$1,const_count,ic_count,pc_count){
return (function __GT_t46207(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,map__46206__$2,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta46208){return (new clustermap.components.map_report.t46207(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,map__46206__$2,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta46208));
});})(map__46206,map__46206__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46207(pc_count,path_fn,const_count,ic_count,constituency_report,map__46206__$1,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__46239 = om.core.get_shared.call(null,owner);var map__46239__$1 = ((cljs.core.seq_QMARK_.call(null,map__46239))?cljs.core.apply.call(null,cljs.core.hash_map,map__46239):map__46239);var view_path_fn = cljs.core.get.call(null,map__46239__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",978272186));var path_fn = cljs.core.get.call(null,map__46239__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__46239__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__46240 = cljs.core._EQ__EQ_;var expr__46241 = type;if(cljs.core.truth_(pred__46240.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__46241)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__46240.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__46241)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__46240.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__46241)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map
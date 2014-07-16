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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__49011 = site_stats;var G__49011__$1 = (((G__49011 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__49011));return G__49011__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__49012 = site_stats;var G__49012__$1 = (((G__49012 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__49012));return G__49012__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__49013 = site_stats;var G__49013__$1 = (((G__49013 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__49013));return G__49013__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__49045 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__49045__$1 = ((cljs.core.seq_QMARK_.call(null,map__49045))?cljs.core.apply.call(null,cljs.core.hash_map,map__49045):map__49045);var const_count = cljs.core.get.call(null,map__49045__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__49045__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__49045__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t49046 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t49046 = (function (pc_count,ic_count,const_count,map__49045,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta49047){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__49045 = map__49045;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta49047 = meta49047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t49046.cljs$lang$type = true;
clustermap.components.map_report.t49046.cljs$lang$ctorStr = "clustermap.components.map-report/t49046";
clustermap.components.map_report.t49046.cljs$lang$ctorPrWriter = ((function (map__49045,map__49045__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t49046");
});})(map__49045,map__49045__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49046.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t49046.prototype.om$core$IRender$render$arity$1 = ((function (map__49045,map__49045__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs49051 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49051))?sablono.interpreter.attributes.call(null,attrs49051):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49051))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49051),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs49056 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49056))?sablono.interpreter.attributes.call(null,attrs49056):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49056))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49056),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs49061 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49061))?sablono.interpreter.attributes.call(null,attrs49061):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49061))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49062 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49062))?sablono.interpreter.attributes.call(null,attrs49062):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49062))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49062)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49061),(function (){var attrs49063 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49063))?sablono.interpreter.attributes.call(null,attrs49063):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49063))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49063)], null))));
})()], null))));
})(),(function (){var attrs49064 = clustermap.formats.money.fmoney.call(null,(function (){var G__49074 = self__.site_stats;var G__49074__$1 = (((G__49074 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__49074));var G__49074__$2 = (((G__49074__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49074__$1));return G__49074__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49064))?sablono.interpreter.attributes.call(null,attrs49064):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49064))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49064),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs49069 = clustermap.formats.number.fnum.call(null,(function (){var G__49075 = self__.site_stats;var G__49075__$1 = (((G__49075 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__49075));var G__49075__$2 = (((G__49075__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49075__$1));return G__49075__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49069))?sablono.interpreter.attributes.call(null,attrs49069):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49069))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49069),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__49045,map__49045__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49045,map__49045__$1,const_count,ic_count,pc_count){
return (function (_49048){var self__ = this;
var _49048__$1 = this;return self__.meta49047;
});})(map__49045,map__49045__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49045,map__49045__$1,const_count,ic_count,pc_count){
return (function (_49048,meta49047__$1){var self__ = this;
var _49048__$1 = this;return (new clustermap.components.map_report.t49046(self__.pc_count,self__.ic_count,self__.const_count,self__.map__49045,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta49047__$1));
});})(map__49045,map__49045__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t49046 = ((function (map__49045,map__49045__$1,const_count,ic_count,pc_count){
return (function __GT_t49046(pc_count__$1,ic_count__$1,const_count__$1,map__49045__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta49047){return (new clustermap.components.map_report.t49046(pc_count__$1,ic_count__$1,const_count__$1,map__49045__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta49047));
});})(map__49045,map__49045__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t49046(pc_count,ic_count,const_count,map__49045__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__49101 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__49101__$1 = ((cljs.core.seq_QMARK_.call(null,map__49101))?cljs.core.apply.call(null,cljs.core.hash_map,map__49101):map__49101);var const_count = cljs.core.get.call(null,map__49101__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__49101__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__49101__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t49102 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t49102 = (function (pc_count,map__49101,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,meta49103){
this.pc_count = pc_count;
this.map__49101 = map__49101;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta49103 = meta49103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t49102.cljs$lang$type = true;
clustermap.components.map_report.t49102.cljs$lang$ctorStr = "clustermap.components.map-report/t49102";
clustermap.components.map_report.t49102.cljs$lang$ctorPrWriter = ((function (map__49101,map__49101__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t49102");
});})(map__49101,map__49101__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49102.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t49102.prototype.om$core$IRender$render$arity$1 = ((function (map__49101,map__49101__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs49107 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs49107))?sablono.interpreter.attributes.call(null,attrs49107):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49107))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49107)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs49108 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49108))?sablono.interpreter.attributes.call(null,attrs49108):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49108))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49109 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49109))?sablono.interpreter.attributes.call(null,attrs49109):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49109))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49109)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49108),(function (){var attrs49110 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49110))?sablono.interpreter.attributes.call(null,attrs49110):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49110))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49110)], null))));
})()], null))));
})(),(function (){var attrs49111 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49111))?sablono.interpreter.attributes.call(null,attrs49111):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49111))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49112 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49112))?sablono.interpreter.attributes.call(null,attrs49112):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49112))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49112)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49111),(function (){var attrs49113 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49113))?sablono.interpreter.attributes.call(null,attrs49113):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49113))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49113)], null))));
})()], null))));
})(),(function (){var attrs49114 = clustermap.formats.money.fmoney.call(null,(function (){var G__49124 = self__.site_stats;var G__49124__$1 = (((G__49124 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__49124));var G__49124__$2 = (((G__49124__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49124__$1));return G__49124__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49114))?sablono.interpreter.attributes.call(null,attrs49114):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49114))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49114),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs49119 = clustermap.formats.number.fnum.call(null,(function (){var G__49125 = self__.site_stats;var G__49125__$1 = (((G__49125 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__49125));var G__49125__$2 = (((G__49125__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49125__$1));return G__49125__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49119))?sablono.interpreter.attributes.call(null,attrs49119):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49119))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49119),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__49101,map__49101__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49101,map__49101__$1,const_count,ic_count,pc_count){
return (function (_49104){var self__ = this;
var _49104__$1 = this;return self__.meta49103;
});})(map__49101,map__49101__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49101,map__49101__$1,const_count,ic_count,pc_count){
return (function (_49104,meta49103__$1){var self__ = this;
var _49104__$1 = this;return (new clustermap.components.map_report.t49102(self__.pc_count,self__.map__49101,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta49103__$1));
});})(map__49101,map__49101__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t49102 = ((function (map__49101,map__49101__$1,const_count,ic_count,pc_count){
return (function __GT_t49102(pc_count__$1,map__49101__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta49103){return (new clustermap.components.map_report.t49102(pc_count__$1,map__49101__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta49103));
});})(map__49101,map__49101__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t49102(pc_count,map__49101__$1,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__49151 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__49151__$1 = ((cljs.core.seq_QMARK_.call(null,map__49151))?cljs.core.apply.call(null,cljs.core.hash_map,map__49151):map__49151);var const_count = cljs.core.get.call(null,map__49151__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__49151__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__49151__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t49152 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t49152 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__49151,comm,investor_company_report,view_path_fn,site_stats,meta49153){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__49151 = map__49151;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta49153 = meta49153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t49152.cljs$lang$type = true;
clustermap.components.map_report.t49152.cljs$lang$ctorStr = "clustermap.components.map-report/t49152";
clustermap.components.map_report.t49152.cljs$lang$ctorPrWriter = ((function (map__49151,map__49151__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t49152");
});})(map__49151,map__49151__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49152.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t49152.prototype.om$core$IRender$render$arity$1 = ((function (map__49151,map__49151__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs49157 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs49157))?sablono.interpreter.attributes.call(null,attrs49157):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49157))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49157)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs49158 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49158))?sablono.interpreter.attributes.call(null,attrs49158):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49158))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49159 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49159))?sablono.interpreter.attributes.call(null,attrs49159):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49159))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49159)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49158),(function (){var attrs49160 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49160))?sablono.interpreter.attributes.call(null,attrs49160):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49160)], null))));
})()], null))));
})(),(function (){var attrs49161 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49161))?sablono.interpreter.attributes.call(null,attrs49161):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49161))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49162 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49162))?sablono.interpreter.attributes.call(null,attrs49162):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49162))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49162)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49161),(function (){var attrs49163 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49163))?sablono.interpreter.attributes.call(null,attrs49163):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49163))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49163)], null))));
})()], null))));
})(),(function (){var attrs49164 = clustermap.formats.money.fmoney.call(null,(function (){var G__49174 = self__.site_stats;var G__49174__$1 = (((G__49174 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__49174));var G__49174__$2 = (((G__49174__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49174__$1));return G__49174__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49164))?sablono.interpreter.attributes.call(null,attrs49164):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49164))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49164),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs49169 = clustermap.formats.number.fnum.call(null,(function (){var G__49175 = self__.site_stats;var G__49175__$1 = (((G__49175 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__49175));var G__49175__$2 = (((G__49175__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49175__$1));return G__49175__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49169))?sablono.interpreter.attributes.call(null,attrs49169):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49169))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49169),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__49151,map__49151__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49151,map__49151__$1,const_count,ic_count,pc_count){
return (function (_49154){var self__ = this;
var _49154__$1 = this;return self__.meta49153;
});})(map__49151,map__49151__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49151,map__49151__$1,const_count,ic_count,pc_count){
return (function (_49154,meta49153__$1){var self__ = this;
var _49154__$1 = this;return (new clustermap.components.map_report.t49152(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__49151,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta49153__$1));
});})(map__49151,map__49151__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t49152 = ((function (map__49151,map__49151__$1,const_count,ic_count,pc_count){
return (function __GT_t49152(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__49151__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta49153){return (new clustermap.components.map_report.t49152(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__49151__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta49153));
});})(map__49151,map__49151__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t49152(pc_count,path_fn,const_count,investor_company,ic_count,map__49151__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__49205 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__49205__$1 = ((cljs.core.seq_QMARK_.call(null,map__49205))?cljs.core.apply.call(null,cljs.core.hash_map,map__49205):map__49205);var const_count = cljs.core.get.call(null,map__49205__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__49205__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__49205__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t49206 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t49206 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,map__49205,comm,constituency,view_path_fn,site_stats,meta49207){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.map__49205 = map__49205;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta49207 = meta49207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t49206.cljs$lang$type = true;
clustermap.components.map_report.t49206.cljs$lang$ctorStr = "clustermap.components.map-report/t49206";
clustermap.components.map_report.t49206.cljs$lang$ctorPrWriter = ((function (map__49205,map__49205__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t49206");
});})(map__49205,map__49205__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49206.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t49206.prototype.om$core$IRender$render$arity$1 = ((function (map__49205,map__49205__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs49211 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs49211))?sablono.interpreter.attributes.call(null,attrs49211):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49211))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49211),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs49216 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49216))?sablono.interpreter.attributes.call(null,attrs49216):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49216))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49217 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49217))?sablono.interpreter.attributes.call(null,attrs49217):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49217))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49217)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49216),(function (){var attrs49218 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49218))?sablono.interpreter.attributes.call(null,attrs49218):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49218))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49218)], null))));
})()], null))));
})(),(function (){var attrs49219 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49219))?sablono.interpreter.attributes.call(null,attrs49219):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49219))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49220 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49220))?sablono.interpreter.attributes.call(null,attrs49220):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49220))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49220)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49219),(function (){var attrs49221 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49221))?sablono.interpreter.attributes.call(null,attrs49221):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49221))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49221)], null))));
})()], null))));
})(),(function (){var attrs49222 = clustermap.formats.money.fmoney.call(null,(function (){var G__49232 = self__.site_stats;var G__49232__$1 = (((G__49232 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__49232));var G__49232__$2 = (((G__49232__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49232__$1));return G__49232__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49222))?sablono.interpreter.attributes.call(null,attrs49222):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49222))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49222),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs49227 = clustermap.formats.number.fnum.call(null,(function (){var G__49233 = self__.site_stats;var G__49233__$1 = (((G__49233 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__49233));var G__49233__$2 = (((G__49233__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49233__$1));return G__49233__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49227))?sablono.interpreter.attributes.call(null,attrs49227):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49227))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49227),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__49205,map__49205__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49205,map__49205__$1,const_count,ic_count,pc_count){
return (function (_49208){var self__ = this;
var _49208__$1 = this;return self__.meta49207;
});})(map__49205,map__49205__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49205,map__49205__$1,const_count,ic_count,pc_count){
return (function (_49208,meta49207__$1){var self__ = this;
var _49208__$1 = this;return (new clustermap.components.map_report.t49206(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.map__49205,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta49207__$1));
});})(map__49205,map__49205__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t49206 = ((function (map__49205,map__49205__$1,const_count,ic_count,pc_count){
return (function __GT_t49206(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,map__49205__$2,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta49207){return (new clustermap.components.map_report.t49206(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,map__49205__$2,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta49207));
});})(map__49205,map__49205__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t49206(pc_count,path_fn,const_count,ic_count,constituency_report,map__49205__$1,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__49238 = om.core.get_shared.call(null,owner);var map__49238__$1 = ((cljs.core.seq_QMARK_.call(null,map__49238))?cljs.core.apply.call(null,cljs.core.hash_map,map__49238):map__49238);var view_path_fn = cljs.core.get.call(null,map__49238__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__49238__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__49238__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__49239 = cljs.core._EQ__EQ_;var expr__49240 = type;if(cljs.core.truth_(pred__49239.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__49240)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__49239.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__49240)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__49239.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__49240)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map
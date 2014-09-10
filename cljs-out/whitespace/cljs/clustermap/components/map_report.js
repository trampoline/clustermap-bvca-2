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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13680 = site_stats;var G__13680__$1 = (((G__13680 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13680));return G__13680__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13681 = site_stats;var G__13681__$1 = (((G__13681 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13681));return G__13681__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13682 = site_stats;var G__13682__$1 = (((G__13682 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13682));return G__13682__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__13714 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13714__$1 = ((cljs.core.seq_QMARK_.call(null,map__13714))?cljs.core.apply.call(null,cljs.core.hash_map,map__13714):map__13714);var const_count = cljs.core.get.call(null,map__13714__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13714__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13714__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13715 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13715 = (function (pc_count,ic_count,const_count,map__13714,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta13716){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__13714 = map__13714;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta13716 = meta13716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13715.cljs$lang$type = true;
clustermap.components.map_report.t13715.cljs$lang$ctorStr = "clustermap.components.map-report/t13715";
clustermap.components.map_report.t13715.cljs$lang$ctorPrWriter = ((function (map__13714,map__13714__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t13715");
});})(map__13714,map__13714__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13715.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13715.prototype.om$core$IRender$render$arity$1 = ((function (map__13714,map__13714__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs13720 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13720))?sablono.interpreter.attributes.call(null,attrs13720):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13720))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13720),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs13725 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13725))?sablono.interpreter.attributes.call(null,attrs13725):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13725))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13725),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs13730 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13730))?sablono.interpreter.attributes.call(null,attrs13730):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13730))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13731 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13731))?sablono.interpreter.attributes.call(null,attrs13731):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13731))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13731)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13730),(function (){var attrs13732 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13732))?sablono.interpreter.attributes.call(null,attrs13732):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13732))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13732)], null))));
})()], null))));
})(),(function (){var attrs13733 = clustermap.formats.money.fmoney.call(null,(function (){var G__13743 = self__.site_stats;var G__13743__$1 = (((G__13743 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13743));var G__13743__$2 = (((G__13743__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13743__$1));return G__13743__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13733))?sablono.interpreter.attributes.call(null,attrs13733):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13733))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13733),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13738 = clustermap.formats.number.fnum.call(null,(function (){var G__13744 = self__.site_stats;var G__13744__$1 = (((G__13744 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13744));var G__13744__$2 = (((G__13744__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13744__$1));return G__13744__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13738))?sablono.interpreter.attributes.call(null,attrs13738):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13738))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13738),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13714,map__13714__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13714,map__13714__$1,const_count,ic_count,pc_count){
return (function (_13717){var self__ = this;
var _13717__$1 = this;return self__.meta13716;
});})(map__13714,map__13714__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13714,map__13714__$1,const_count,ic_count,pc_count){
return (function (_13717,meta13716__$1){var self__ = this;
var _13717__$1 = this;return (new clustermap.components.map_report.t13715(self__.pc_count,self__.ic_count,self__.const_count,self__.map__13714,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta13716__$1));
});})(map__13714,map__13714__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13715 = ((function (map__13714,map__13714__$1,const_count,ic_count,pc_count){
return (function __GT_t13715(pc_count__$1,ic_count__$1,const_count__$1,map__13714__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13716){return (new clustermap.components.map_report.t13715(pc_count__$1,ic_count__$1,const_count__$1,map__13714__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13716));
});})(map__13714,map__13714__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13715(pc_count,ic_count,const_count,map__13714__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__13770 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13770__$1 = ((cljs.core.seq_QMARK_.call(null,map__13770))?cljs.core.apply.call(null,cljs.core.hash_map,map__13770):map__13770);var const_count = cljs.core.get.call(null,map__13770__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13770__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13770__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13771 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13771 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__13770,portfolio_company_report,site_stats,meta13772){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__13770 = map__13770;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta13772 = meta13772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13771.cljs$lang$type = true;
clustermap.components.map_report.t13771.cljs$lang$ctorStr = "clustermap.components.map-report/t13771";
clustermap.components.map_report.t13771.cljs$lang$ctorPrWriter = ((function (map__13770,map__13770__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t13771");
});})(map__13770,map__13770__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13771.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13771.prototype.om$core$IRender$render$arity$1 = ((function (map__13770,map__13770__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs13776 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13776))?sablono.interpreter.attributes.call(null,attrs13776):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13776))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13776)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13777 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13777))?sablono.interpreter.attributes.call(null,attrs13777):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13777))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13778 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13778))?sablono.interpreter.attributes.call(null,attrs13778):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13778))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13778)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13777),(function (){var attrs13779 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13779))?sablono.interpreter.attributes.call(null,attrs13779):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13779))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13779)], null))));
})()], null))));
})(),(function (){var attrs13780 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13780))?sablono.interpreter.attributes.call(null,attrs13780):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13780))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13781 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13781))?sablono.interpreter.attributes.call(null,attrs13781):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13781))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13781)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13780),(function (){var attrs13782 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13782))?sablono.interpreter.attributes.call(null,attrs13782):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13782))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13782)], null))));
})()], null))));
})(),(function (){var attrs13783 = clustermap.formats.money.fmoney.call(null,(function (){var G__13793 = self__.site_stats;var G__13793__$1 = (((G__13793 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13793));var G__13793__$2 = (((G__13793__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13793__$1));return G__13793__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13783))?sablono.interpreter.attributes.call(null,attrs13783):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13783))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13783),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13788 = clustermap.formats.number.fnum.call(null,(function (){var G__13794 = self__.site_stats;var G__13794__$1 = (((G__13794 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13794));var G__13794__$2 = (((G__13794__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13794__$1));return G__13794__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13788))?sablono.interpreter.attributes.call(null,attrs13788):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13788))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13788),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13770,map__13770__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13770,map__13770__$1,const_count,ic_count,pc_count){
return (function (_13773){var self__ = this;
var _13773__$1 = this;return self__.meta13772;
});})(map__13770,map__13770__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13770,map__13770__$1,const_count,ic_count,pc_count){
return (function (_13773,meta13772__$1){var self__ = this;
var _13773__$1 = this;return (new clustermap.components.map_report.t13771(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__13770,self__.portfolio_company_report,self__.site_stats,meta13772__$1));
});})(map__13770,map__13770__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13771 = ((function (map__13770,map__13770__$1,const_count,ic_count,pc_count){
return (function __GT_t13771(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__13770__$2,portfolio_company_report__$1,site_stats__$1,meta13772){return (new clustermap.components.map_report.t13771(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__13770__$2,portfolio_company_report__$1,site_stats__$1,meta13772));
});})(map__13770,map__13770__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13771(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__13770__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13820 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13820__$1 = ((cljs.core.seq_QMARK_.call(null,map__13820))?cljs.core.apply.call(null,cljs.core.hash_map,map__13820):map__13820);var const_count = cljs.core.get.call(null,map__13820__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13820__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13820__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13821 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13821 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__13820,comm,investor_company_report,view_path_fn,site_stats,meta13822){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__13820 = map__13820;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13822 = meta13822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13821.cljs$lang$type = true;
clustermap.components.map_report.t13821.cljs$lang$ctorStr = "clustermap.components.map-report/t13821";
clustermap.components.map_report.t13821.cljs$lang$ctorPrWriter = ((function (map__13820,map__13820__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t13821");
});})(map__13820,map__13820__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13821.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13821.prototype.om$core$IRender$render$arity$1 = ((function (map__13820,map__13820__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13826 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13826))?sablono.interpreter.attributes.call(null,attrs13826):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13826))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13826)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13827 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13827))?sablono.interpreter.attributes.call(null,attrs13827):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13827))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13828 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13828))?sablono.interpreter.attributes.call(null,attrs13828):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13828))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13828)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13827),(function (){var attrs13829 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13829))?sablono.interpreter.attributes.call(null,attrs13829):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13829))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13829)], null))));
})()], null))));
})(),(function (){var attrs13830 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13830))?sablono.interpreter.attributes.call(null,attrs13830):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13830))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13831 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13831))?sablono.interpreter.attributes.call(null,attrs13831):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13831))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13831)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13830),(function (){var attrs13832 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13832))?sablono.interpreter.attributes.call(null,attrs13832):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13832))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13832)], null))));
})()], null))));
})(),(function (){var attrs13833 = clustermap.formats.money.fmoney.call(null,(function (){var G__13843 = self__.site_stats;var G__13843__$1 = (((G__13843 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13843));var G__13843__$2 = (((G__13843__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13843__$1));return G__13843__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13833))?sablono.interpreter.attributes.call(null,attrs13833):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13833))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13833),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13838 = clustermap.formats.number.fnum.call(null,(function (){var G__13844 = self__.site_stats;var G__13844__$1 = (((G__13844 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13844));var G__13844__$2 = (((G__13844__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13844__$1));return G__13844__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13838))?sablono.interpreter.attributes.call(null,attrs13838):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13838))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13838),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13820,map__13820__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13820,map__13820__$1,const_count,ic_count,pc_count){
return (function (_13823){var self__ = this;
var _13823__$1 = this;return self__.meta13822;
});})(map__13820,map__13820__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13820,map__13820__$1,const_count,ic_count,pc_count){
return (function (_13823,meta13822__$1){var self__ = this;
var _13823__$1 = this;return (new clustermap.components.map_report.t13821(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__13820,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta13822__$1));
});})(map__13820,map__13820__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13821 = ((function (map__13820,map__13820__$1,const_count,ic_count,pc_count){
return (function __GT_t13821(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__13820__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13822){return (new clustermap.components.map_report.t13821(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__13820__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13822));
});})(map__13820,map__13820__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13821(pc_count,path_fn,const_count,investor_company,ic_count,map__13820__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13874 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13874__$1 = ((cljs.core.seq_QMARK_.call(null,map__13874))?cljs.core.apply.call(null,cljs.core.hash_map,map__13874):map__13874);var const_count = cljs.core.get.call(null,map__13874__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13874__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13874__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13875 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13875 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,map__13874,meta13876){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.map__13874 = map__13874;
this.meta13876 = meta13876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13875.cljs$lang$type = true;
clustermap.components.map_report.t13875.cljs$lang$ctorStr = "clustermap.components.map-report/t13875";
clustermap.components.map_report.t13875.cljs$lang$ctorPrWriter = ((function (map__13874,map__13874__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t13875");
});})(map__13874,map__13874__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13875.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13875.prototype.om$core$IRender$render$arity$1 = ((function (map__13874,map__13874__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13880 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13880))?sablono.interpreter.attributes.call(null,attrs13880):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13880))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13880),React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13885 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13885))?sablono.interpreter.attributes.call(null,attrs13885):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13885))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13886 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13886))?sablono.interpreter.attributes.call(null,attrs13886):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13886))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13886)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13885),(function (){var attrs13887 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13887))?sablono.interpreter.attributes.call(null,attrs13887):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13887))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13887)], null))));
})()], null))));
})(),(function (){var attrs13888 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13888))?sablono.interpreter.attributes.call(null,attrs13888):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13888))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13889 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13889))?sablono.interpreter.attributes.call(null,attrs13889):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13889))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13889)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13888),(function (){var attrs13890 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13890))?sablono.interpreter.attributes.call(null,attrs13890):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13890))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13890)], null))));
})()], null))));
})(),(function (){var attrs13891 = clustermap.formats.money.fmoney.call(null,(function (){var G__13901 = self__.site_stats;var G__13901__$1 = (((G__13901 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13901));var G__13901__$2 = (((G__13901__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13901__$1));return G__13901__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13891))?sablono.interpreter.attributes.call(null,attrs13891):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13891))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13891),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13896 = clustermap.formats.number.fnum.call(null,(function (){var G__13902 = self__.site_stats;var G__13902__$1 = (((G__13902 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13902));var G__13902__$2 = (((G__13902__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13902__$1));return G__13902__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13896))?sablono.interpreter.attributes.call(null,attrs13896):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13896))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13896),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13874,map__13874__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13874,map__13874__$1,const_count,ic_count,pc_count){
return (function (_13877){var self__ = this;
var _13877__$1 = this;return self__.meta13876;
});})(map__13874,map__13874__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13874,map__13874__$1,const_count,ic_count,pc_count){
return (function (_13877,meta13876__$1){var self__ = this;
var _13877__$1 = this;return (new clustermap.components.map_report.t13875(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,self__.map__13874,meta13876__$1));
});})(map__13874,map__13874__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13875 = ((function (map__13874,map__13874__$1,const_count,ic_count,pc_count){
return (function __GT_t13875(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,map__13874__$2,meta13876){return (new clustermap.components.map_report.t13875(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,map__13874__$2,meta13876));
});})(map__13874,map__13874__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13875(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,map__13874__$1,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13907 = om.core.get_shared.call(null,owner);var map__13907__$1 = ((cljs.core.seq_QMARK_.call(null,map__13907))?cljs.core.apply.call(null,cljs.core.hash_map,map__13907):map__13907);var view_path_fn = cljs.core.get.call(null,map__13907__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13907__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13907__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13908 = cljs.core._EQ__EQ_;var expr__13909 = type;if(cljs.core.truth_(pred__13908.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13909)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13908.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13909)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13908.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13909)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

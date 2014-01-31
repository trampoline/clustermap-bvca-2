// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.overview');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.portfolio_company_sites');
goog.require('clustermap.components.full_report.details');
goog.require('om.core');
goog.require('clustermap.components.full_report.details');
goog.require('om.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.portfolio_company_sites');
goog.require('jayq.core');
clustermap.components.full_report.full_report_component = (function full_report_component(p__11527,owner){var map__11533 = p__11527;var map__11533__$1 = ((cljs.core.seq_QMARK_.call(null,map__11533))?cljs.core.apply.call(null,cljs.core.hash_map,map__11533):map__11533);var data = map__11533__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__11533__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__11533__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.t11534 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t11534 = (function (comm,selection,all_portfolio_companies_summary,data,map__11533,owner,p__11527,full_report_component,meta11535){
this.comm = comm;
this.selection = selection;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.data = data;
this.map__11533 = map__11533;
this.owner = owner;
this.p__11527 = p__11527;
this.full_report_component = full_report_component;
this.meta11535 = meta11535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t11534.cljs$lang$type = true;
clustermap.components.full_report.t11534.cljs$lang$ctorStr = "clustermap.components.full-report/t11534";
clustermap.components.full_report.t11534.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t11534");
});
clustermap.components.full_report.t11534.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t11534.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t11534.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t11534.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs11537 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null));if(cljs.core.map_QMARK_.call(null,attrs11537))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11537),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null)):null)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11537),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null)):null)));
}
});
clustermap.components.full_report.t11534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11536){var self__ = this;
var _11536__$1 = this;return self__.meta11535;
});
clustermap.components.full_report.t11534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11536,meta11535__$1){var self__ = this;
var _11536__$1 = this;return (new clustermap.components.full_report.t11534(self__.comm,self__.selection,self__.all_portfolio_companies_summary,self__.data,self__.map__11533,self__.owner,self__.p__11527,self__.full_report_component,meta11535__$1));
});
clustermap.components.full_report.__GT_t11534 = (function __GT_t11534(comm__$1,selection__$1,all_portfolio_companies_summary__$1,data__$1,map__11533__$2,owner__$1,p__11527__$1,full_report_component__$1,meta11535){return (new clustermap.components.full_report.t11534(comm__$1,selection__$1,all_portfolio_companies_summary__$1,data__$1,map__11533__$2,owner__$1,p__11527__$1,full_report_component__$1,meta11535));
});
}
return (new clustermap.components.full_report.t11534(comm,selection,all_portfolio_companies_summary,data,map__11533__$1,owner,p__11527,full_report_component,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});

//# sourceMappingURL=full_report.js.map
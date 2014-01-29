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
clustermap.components.full_report.full_report_component = (function full_report_component(p__31439,owner){var map__31445 = p__31439;var map__31445__$1 = ((cljs.core.seq_QMARK_.call(null,map__31445))?cljs.core.apply.call(null,cljs.core.hash_map,map__31445):map__31445);var data = map__31445__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__31445__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__31445__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.t31446 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t31446 = (function (comm,selection,all_portfolio_companies_summary,data,map__31445,owner,p__31439,full_report_component,meta31447){
this.comm = comm;
this.selection = selection;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.data = data;
this.map__31445 = map__31445;
this.owner = owner;
this.p__31439 = p__31439;
this.full_report_component = full_report_component;
this.meta31447 = meta31447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t31446.cljs$lang$type = true;
clustermap.components.full_report.t31446.cljs$lang$ctorStr = "clustermap.components.full-report/t31446";
clustermap.components.full_report.t31446.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t31446");
});
clustermap.components.full_report.t31446.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t31446.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t31446.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t31446.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs31449 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null));if(cljs.core.map_QMARK_.call(null,attrs31449))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs31449),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null)):null)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs31449),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null)], null)):null)));
}
});
clustermap.components.full_report.t31446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31448){var self__ = this;
var _31448__$1 = this;return self__.meta31447;
});
clustermap.components.full_report.t31446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31448,meta31447__$1){var self__ = this;
var _31448__$1 = this;return (new clustermap.components.full_report.t31446(self__.comm,self__.selection,self__.all_portfolio_companies_summary,self__.data,self__.map__31445,self__.owner,self__.p__31439,self__.full_report_component,meta31447__$1));
});
clustermap.components.full_report.__GT_t31446 = (function __GT_t31446(comm__$1,selection__$1,all_portfolio_companies_summary__$1,data__$1,map__31445__$2,owner__$1,p__31439__$1,full_report_component__$1,meta31447){return (new clustermap.components.full_report.t31446(comm__$1,selection__$1,all_portfolio_companies_summary__$1,data__$1,map__31445__$2,owner__$1,p__31439__$1,full_report_component__$1,meta31447));
});
}
return (new clustermap.components.full_report.t31446(comm,selection,all_portfolio_companies_summary,data,map__31445__$1,owner,p__31439,full_report_component,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});

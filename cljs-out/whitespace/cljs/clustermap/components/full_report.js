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
clustermap.components.full_report.full_report_component = (function full_report_component(p__31065,owner){var map__31071 = p__31065;var map__31071__$1 = ((cljs.core.seq_QMARK_.call(null,map__31071))?cljs.core.apply.call(null,cljs.core.hash_map,map__31071):map__31071);var data = map__31071__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.t31072 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t31072 = (function (selection,all_portfolio_companies_summary,data,map__31071,owner,p__31065,full_report_component,meta31073){
this.selection = selection;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.data = data;
this.map__31071 = map__31071;
this.owner = owner;
this.p__31065 = p__31065;
this.full_report_component = full_report_component;
this.meta31073 = meta31073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t31072.cljs$lang$type = true;
clustermap.components.full_report.t31072.cljs$lang$ctorStr = "clustermap.components.full-report/t31072";
clustermap.components.full_report.t31072.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t31072");
});
clustermap.components.full_report.t31072.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t31072.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t31072.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t31072.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs31075 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data);if(cljs.core.map_QMARK_.call(null,attrs31075))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs31075),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data)):null)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs31075),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data)):null)));
}
});
clustermap.components.full_report.t31072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31074){var self__ = this;
var _31074__$1 = this;return self__.meta31073;
});
clustermap.components.full_report.t31072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31074,meta31073__$1){var self__ = this;
var _31074__$1 = this;return (new clustermap.components.full_report.t31072(self__.selection,self__.all_portfolio_companies_summary,self__.data,self__.map__31071,self__.owner,self__.p__31065,self__.full_report_component,meta31073__$1));
});
clustermap.components.full_report.__GT_t31072 = (function __GT_t31072(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__31071__$2,owner__$1,p__31065__$1,full_report_component__$1,meta31073){return (new clustermap.components.full_report.t31072(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__31071__$2,owner__$1,p__31065__$1,full_report_component__$1,meta31073));
});
}
return (new clustermap.components.full_report.t31072(selection,all_portfolio_companies_summary,data,map__31071__$1,owner,p__31065,full_report_component,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});

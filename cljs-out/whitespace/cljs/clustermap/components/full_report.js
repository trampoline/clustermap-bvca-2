// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.full_report.overview');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.portfolio_company_sites');
goog.require('clustermap.components.full_report.details');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.full_report.details');
goog.require('om.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.portfolio_company_sites');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
clustermap.components.full_report.full_report_component = (function full_report_component(p__11182,owner){var map__11188 = p__11182;var map__11188__$1 = ((cljs.core.seq_QMARK_.call(null,map__11188))?cljs.core.apply.call(null,cljs.core.hash_map,map__11188):map__11188);var data = map__11188__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__11188__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__11188__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.t11189 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t11189 = (function (selection,all_portfolio_companies_summary,data,map__11188,owner,p__11182,full_report_component,meta11190){
this.selection = selection;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.data = data;
this.map__11188 = map__11188;
this.owner = owner;
this.p__11182 = p__11182;
this.full_report_component = full_report_component;
this.meta11190 = meta11190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t11189.cljs$lang$type = true;
clustermap.components.full_report.t11189.cljs$lang$ctorStr = "clustermap.components.full-report/t11189";
clustermap.components.full_report.t11189.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t11189");
});
clustermap.components.full_report.t11189.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t11189.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t11189.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t11189.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs11192 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data);if(cljs.core.map_QMARK_.call(null,attrs11192))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11192),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11192),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data)));
}
});
clustermap.components.full_report.t11189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11191){var self__ = this;
var _11191__$1 = this;return self__.meta11190;
});
clustermap.components.full_report.t11189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11191,meta11190__$1){var self__ = this;
var _11191__$1 = this;return (new clustermap.components.full_report.t11189(self__.selection,self__.all_portfolio_companies_summary,self__.data,self__.map__11188,self__.owner,self__.p__11182,self__.full_report_component,meta11190__$1));
});
clustermap.components.full_report.__GT_t11189 = (function __GT_t11189(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__11188__$2,owner__$1,p__11182__$1,full_report_component__$1,meta11190){return (new clustermap.components.full_report.t11189(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__11188__$2,owner__$1,p__11182__$1,full_report_component__$1,meta11190));
});
}
return (new clustermap.components.full_report.t11189(selection,all_portfolio_companies_summary,data,map__11188__$1,owner,p__11182,full_report_component,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});

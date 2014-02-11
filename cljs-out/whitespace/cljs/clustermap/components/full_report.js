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
clustermap.components.full_report.full_report_component = (function full_report_component(p__31876,owner){var map__31883 = p__31876;var map__31883__$1 = ((cljs.core.seq_QMARK_.call(null,map__31883))?cljs.core.apply.call(null,cljs.core.hash_map,map__31883):map__31883);var data = map__31883__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__31883__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__31883__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__31884 = om.core.get_shared.call(null,owner);var map__31884__$1 = ((cljs.core.seq_QMARK_.call(null,map__31884))?cljs.core.apply.call(null,cljs.core.hash_map,map__31884):map__31884);var link_fn = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var path_fn = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.t31885 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t31885 = (function (full_report_component,path_fn,data,p__31876,all_portfolio_companies_summary,link_fn,selection,comm,map__31884,owner,map__31883,meta31886){
this.full_report_component = full_report_component;
this.path_fn = path_fn;
this.data = data;
this.p__31876 = p__31876;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.link_fn = link_fn;
this.selection = selection;
this.comm = comm;
this.map__31884 = map__31884;
this.owner = owner;
this.map__31883 = map__31883;
this.meta31886 = meta31886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t31885.cljs$lang$type = true;
clustermap.components.full_report.t31885.cljs$lang$ctorStr = "clustermap.components.full-report/t31885";
clustermap.components.full_report.t31885.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t31885");
});
clustermap.components.full_report.t31885.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t31885.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t31885.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t31885.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs31888 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"overview"], null));if(cljs.core.map_QMARK_.call(null,attrs31888))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs31888),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-portfolio-companies"], null)):null)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs31888),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-portfolio-companies"], null)):null)));
}
});
clustermap.components.full_report.t31885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31887){var self__ = this;
var _31887__$1 = this;return self__.meta31886;
});
clustermap.components.full_report.t31885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31887,meta31886__$1){var self__ = this;
var _31887__$1 = this;return (new clustermap.components.full_report.t31885(self__.full_report_component,self__.path_fn,self__.data,self__.p__31876,self__.all_portfolio_companies_summary,self__.link_fn,self__.selection,self__.comm,self__.map__31884,self__.owner,self__.map__31883,meta31886__$1));
});
clustermap.components.full_report.__GT_t31885 = (function __GT_t31885(full_report_component__$1,path_fn__$1,data__$1,p__31876__$1,all_portfolio_companies_summary__$1,link_fn__$1,selection__$1,comm__$1,map__31884__$2,owner__$1,map__31883__$2,meta31886){return (new clustermap.components.full_report.t31885(full_report_component__$1,path_fn__$1,data__$1,p__31876__$1,all_portfolio_companies_summary__$1,link_fn__$1,selection__$1,comm__$1,map__31884__$2,owner__$1,map__31883__$2,meta31886));
});
}
return (new clustermap.components.full_report.t31885(full_report_component,path_fn,data,p__31876,all_portfolio_companies_summary,link_fn,selection,comm,map__31884__$1,owner,map__31883__$1,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});

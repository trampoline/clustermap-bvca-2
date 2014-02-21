// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.overview');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.charts');
goog.require('clustermap.components.full_report.charts');
goog.require('jayq.core');
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.call(null,1,cljs.core.count.call(null,selector))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),(function (){var G__33202 = selector;var G__33202__$1 = (((G__33202 == null))?null:cljs.core.keys.call(null,G__33202));var G__33202__$2 = (((G__33202__$1 == null))?null:cljs.core.first.call(null,G__33202__$1));return G__33202__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__33203,owner){var map__33210 = p__33203;var map__33210__$1 = ((cljs.core.seq_QMARK_.call(null,map__33210))?cljs.core.apply.call(null,cljs.core.hash_map,map__33210):map__33210);var data = map__33210__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__33210__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__33210__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var selector = cljs.core.get.call(null,map__33210__$1,new cljs.core.Keyword(null,"selector","selector",2205476689));var map__33211 = om.core.get_shared.call(null,owner);var map__33211__$1 = ((cljs.core.seq_QMARK_.call(null,map__33211))?cljs.core.apply.call(null,cljs.core.hash_map,map__33211):map__33211);var link_fn = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var path_fn = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.t33212 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t33212 = (function (full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,selector,selection,map__33211,comm,map__33210,owner,p__33203,meta33213){
this.full_report_component = full_report_component;
this.path_fn = path_fn;
this.data = data;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.link_fn = link_fn;
this.selector = selector;
this.selection = selection;
this.map__33211 = map__33211;
this.comm = comm;
this.map__33210 = map__33210;
this.owner = owner;
this.p__33203 = p__33203;
this.meta33213 = meta33213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t33212.cljs$lang$type = true;
clustermap.components.full_report.t33212.cljs$lang$ctorStr = "clustermap.components.full-report/t33212";
clustermap.components.full_report.t33212.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t33212");
});
clustermap.components.full_report.t33212.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t33212.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t33212.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t33212.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs33215 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"overview"], null));if(cljs.core.map_QMARK_.call(null,attrs33215))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs33215),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-portfolio-company-sites"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-portfolio-company-sites"], null)):null))));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs33215),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-portfolio-company-sites"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-portfolio-company-sites"], null)):null))));
}
});
clustermap.components.full_report.t33212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33214){var self__ = this;
var _33214__$1 = this;return self__.meta33213;
});
clustermap.components.full_report.t33212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33214,meta33213__$1){var self__ = this;
var _33214__$1 = this;return (new clustermap.components.full_report.t33212(self__.full_report_component,self__.path_fn,self__.data,self__.all_portfolio_companies_summary,self__.link_fn,self__.selector,self__.selection,self__.map__33211,self__.comm,self__.map__33210,self__.owner,self__.p__33203,meta33213__$1));
});
clustermap.components.full_report.__GT_t33212 = (function __GT_t33212(full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,map__33211__$2,comm__$1,map__33210__$2,owner__$1,p__33203__$1,meta33213){return (new clustermap.components.full_report.t33212(full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,map__33211__$2,comm__$1,map__33210__$2,owner__$1,p__33203__$1,meta33213));
});
}
return (new clustermap.components.full_report.t33212(full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,selector,selection,map__33211__$1,comm,map__33210__$1,owner,p__33203,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});

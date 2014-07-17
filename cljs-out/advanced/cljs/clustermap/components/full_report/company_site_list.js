// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.full_report.company_site_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__36916){var map__36925 = p__36916;var map__36925__$1 = ((cljs.core.seq_QMARK_(map__36925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36925):map__36925);var opts = map__36925__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925__$1,cljs.core.constant$keyword$884);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925__$1,cljs.core.constant$keyword$885);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$886,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$886,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t36926 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t36926 = (function (company_path,link_fn,path_fn,opts,map__36925,p__36916,owner,investment,meta36927){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__36925 = map__36925;
this.p__36916 = p__36916;
this.owner = owner;
this.investment = investment;
this.meta36927 = meta36927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t36926.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t36926.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t36926";
clustermap.components.full_report.company_site_list.t36926.cljs$lang$ctorPrWriter = ((function (company_path,map__36925,map__36925__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t36926");
});})(company_path,map__36925,map__36925__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t36926.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t36926.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__36925,map__36925__$1,opts,path_fn,link_fn){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs36929 = cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36929))?sablono.interpreter.attributes(attrs36929):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36929))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36929)], null))));
})(),(function (){var attrs36930 = cljs.core.constant$keyword$899.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36930))?sablono.interpreter.attributes(attrs36930):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36930))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36930)], null))));
})(),(function (){var attrs36931 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$887,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$900,cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$831,cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$887,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$900,cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$831,cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36931))?sablono.interpreter.attributes(attrs36931):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36931))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36931)], null))));
})(),(function (){var attrs36932 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$889,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$804,cljs.core.constant$keyword$804.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$805,cljs.core.constant$keyword$902.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$889,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$804,cljs.core.constant$keyword$804.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$805,cljs.core.constant$keyword$902.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36932))?sablono.interpreter.attributes(attrs36932):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36932))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36932)], null))));
})());
});})(company_path,map__36925,map__36925__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t36926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__36925,map__36925__$1,opts,path_fn,link_fn){
return (function (_36928){var self__ = this;
var _36928__$1 = this;return self__.meta36927;
});})(company_path,map__36925,map__36925__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t36926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__36925,map__36925__$1,opts,path_fn,link_fn){
return (function (_36928,meta36927__$1){var self__ = this;
var _36928__$1 = this;return (new clustermap.components.full_report.company_site_list.t36926(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__36925,self__.p__36916,self__.owner,self__.investment,meta36927__$1));
});})(company_path,map__36925,map__36925__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t36926 = ((function (company_path,map__36925,map__36925__$1,opts,path_fn,link_fn){
return (function __GT_t36926(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36925__$2,p__36916__$1,owner__$1,investment__$2,meta36927){return (new clustermap.components.full_report.company_site_list.t36926(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36925__$2,p__36916__$1,owner__$1,investment__$2,meta36927));
});})(company_path,map__36925,map__36925__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t36926(company_path,link_fn,path_fn,opts,map__36925__$1,p__36916,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$894);if(typeof clustermap.components.full_report.company_site_list.t36947 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t36947 = (function (comm,opts,owner,investments,company_site_list,meta36948){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta36948 = meta36948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t36947.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t36947.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t36947";
clustermap.components.full_report.company_site_list.t36947.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t36947");
});})(comm))
;
clustermap.components.full_report.company_site_list.t36947.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t36947.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;var attrs36950 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$903);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs36950))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$814,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs36950], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36950))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36951 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$903,"Investor-backed Company",cljs.core.constant$keyword$904);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36951))?sablono.interpreter.attributes(attrs36951):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36951))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36951)], null))));
})(),(function (){var attrs36952 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$903,"Postcode",cljs.core.constant$keyword$905);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36952))?sablono.interpreter.attributes(attrs36952):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36952))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36952)], null))));
})(),(function (){var attrs36953 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$903,"Investor",cljs.core.constant$keyword$795);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36953))?sablono.interpreter.attributes(attrs36953):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36953))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36953)], null))));
})(),(function (){var attrs36954 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$903,"Constituency",cljs.core.constant$keyword$794);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36954))?sablono.interpreter.attributes(attrs36954):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36954))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36954)], null))));
})())),(function (){var attrs36955 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$874,cljs.core.constant$keyword$906,cljs.core.constant$keyword$877,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36955))?sablono.interpreter.attributes(attrs36955):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36955))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36955)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$903))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36950),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36956 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$903,"Investor-backed Company",cljs.core.constant$keyword$904);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36956))?sablono.interpreter.attributes(attrs36956):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36956))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36956)], null))));
})(),(function (){var attrs36957 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$903,"Postcode",cljs.core.constant$keyword$905);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36957))?sablono.interpreter.attributes(attrs36957):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36957))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36957)], null))));
})(),(function (){var attrs36958 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$903,"Investor",cljs.core.constant$keyword$795);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36958))?sablono.interpreter.attributes(attrs36958):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36958))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36958)], null))));
})(),(function (){var attrs36959 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$903,"Constituency",cljs.core.constant$keyword$794);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36959))?sablono.interpreter.attributes(attrs36959):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36959))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36959)], null))));
})())),(function (){var attrs36960 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$874,cljs.core.constant$keyword$906,cljs.core.constant$keyword$877,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36960))?sablono.interpreter.attributes(attrs36960):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36960))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36960)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$903))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t36947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_36949){var self__ = this;
var _36949__$1 = this;return self__.meta36948;
});})(comm))
;
clustermap.components.full_report.company_site_list.t36947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_36949,meta36948__$1){var self__ = this;
var _36949__$1 = this;return (new clustermap.components.full_report.company_site_list.t36947(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta36948__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t36947 = ((function (comm){
return (function __GT_t36947(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta36948){return (new clustermap.components.full_report.company_site_list.t36947(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta36948));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t36947(comm,opts,owner,investments,company_site_list,null));
});

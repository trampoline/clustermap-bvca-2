// Compiled by ClojureScript 0.0-2227
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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__34584){var map__34593 = p__34584;var map__34593__$1 = ((cljs.core.seq_QMARK_(map__34593))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34593):map__34593);var opts = map__34593__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,cljs.core.constant$keyword$698);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,cljs.core.constant$keyword$699);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$700,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t34594 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t34594 = (function (company_path,link_fn,path_fn,opts,map__34593,p__34584,owner,investment,meta34595){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__34593 = map__34593;
this.p__34584 = p__34584;
this.owner = owner;
this.investment = investment;
this.meta34595 = meta34595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t34594.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t34594.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t34594";
clustermap.components.full_report.company_site_list.t34594.cljs$lang$ctorPrWriter = ((function (company_path,map__34593,map__34593__$1,opts,path_fn,link_fn){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.full-report.company-site-list/t34594");
});})(company_path,map__34593,map__34593__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t34594.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t34594.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__34593,map__34593__$1,opts,path_fn,link_fn){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs34597 = cljs.core.constant$keyword$713.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34597))?sablono.interpreter.attributes(attrs34597):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34597))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34597)], null))));
})(),(function (){var attrs34598 = cljs.core.constant$keyword$714.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34598))?sablono.interpreter.attributes(attrs34598):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34598))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34598)], null))));
})(),(function (){var attrs34599 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$715,cljs.core.constant$keyword$715.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$645,cljs.core.constant$keyword$716.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$701,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$715,cljs.core.constant$keyword$715.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$645,cljs.core.constant$keyword$716.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34599))?sablono.interpreter.attributes(attrs34599):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34599))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34599)], null))));
})(),(function (){var attrs34600 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$703,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,cljs.core.constant$keyword$617.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$618,cljs.core.constant$keyword$717.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$703,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,cljs.core.constant$keyword$617.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$618,cljs.core.constant$keyword$717.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34600))?sablono.interpreter.attributes(attrs34600):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34600))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34600)], null))));
})());
});})(company_path,map__34593,map__34593__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t34594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__34593,map__34593__$1,opts,path_fn,link_fn){
return (function (_34596){var self__ = this;
var _34596__$1 = this;return self__.meta34595;
});})(company_path,map__34593,map__34593__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t34594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__34593,map__34593__$1,opts,path_fn,link_fn){
return (function (_34596,meta34595__$1){var self__ = this;
var _34596__$1 = this;return (new clustermap.components.full_report.company_site_list.t34594(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__34593,self__.p__34584,self__.owner,self__.investment,meta34595__$1));
});})(company_path,map__34593,map__34593__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t34594 = ((function (company_path,map__34593,map__34593__$1,opts,path_fn,link_fn){
return (function __GT_t34594(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34593__$2,p__34584__$1,owner__$1,investment__$2,meta34595){return (new clustermap.components.full_report.company_site_list.t34594(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34593__$2,p__34584__$1,owner__$1,investment__$2,meta34595));
});})(company_path,map__34593,map__34593__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t34594(company_path,link_fn,path_fn,opts,map__34593__$1,p__34584,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$709);if(typeof clustermap.components.full_report.company_site_list.t34615 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t34615 = (function (comm,opts,owner,investments,company_site_list,meta34616){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta34616 = meta34616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t34615.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t34615.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t34615";
clustermap.components.full_report.company_site_list.t34615.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.full-report.company-site-list/t34615");
});})(comm))
;
clustermap.components.full_report.company_site_list.t34615.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t34615.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;var attrs34618 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$718);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34618))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs34618], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34618))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34619 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$718,"Investor-backed Company",cljs.core.constant$keyword$719);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34619))?sablono.interpreter.attributes(attrs34619):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34619))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34619)], null))));
})(),(function (){var attrs34620 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$718,"Postcode",cljs.core.constant$keyword$720);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34620))?sablono.interpreter.attributes(attrs34620):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34620))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34620)], null))));
})(),(function (){var attrs34621 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$718,"Investor",cljs.core.constant$keyword$612);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34621))?sablono.interpreter.attributes(attrs34621):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34621))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34621)], null))));
})(),(function (){var attrs34622 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$718,"Constituency",cljs.core.constant$keyword$611);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34622))?sablono.interpreter.attributes(attrs34622):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34622))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34622)], null))));
})())),(function (){var attrs34623 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$711.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$688,cljs.core.constant$keyword$721,cljs.core.constant$keyword$691,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34623))?sablono.interpreter.attributes(attrs34623):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34623))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34623)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$718))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34618),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34624 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$718,"Investor-backed Company",cljs.core.constant$keyword$719);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34624))?sablono.interpreter.attributes(attrs34624):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34624))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34624)], null))));
})(),(function (){var attrs34625 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$718,"Postcode",cljs.core.constant$keyword$720);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34625))?sablono.interpreter.attributes(attrs34625):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34625))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34625)], null))));
})(),(function (){var attrs34626 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$718,"Investor",cljs.core.constant$keyword$612);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34626))?sablono.interpreter.attributes(attrs34626):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34626))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34626)], null))));
})(),(function (){var attrs34627 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$718,"Constituency",cljs.core.constant$keyword$611);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34627))?sablono.interpreter.attributes(attrs34627):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34627))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34627)], null))));
})())),(function (){var attrs34628 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$711.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$688,cljs.core.constant$keyword$721,cljs.core.constant$keyword$691,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34628))?sablono.interpreter.attributes(attrs34628):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34628))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34628)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$718))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t34615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_34617){var self__ = this;
var _34617__$1 = this;return self__.meta34616;
});})(comm))
;
clustermap.components.full_report.company_site_list.t34615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_34617,meta34616__$1){var self__ = this;
var _34617__$1 = this;return (new clustermap.components.full_report.company_site_list.t34615(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta34616__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t34615 = ((function (comm){
return (function __GT_t34615(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta34616){return (new clustermap.components.full_report.company_site_list.t34615(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta34616));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t34615(comm,opts,owner,investments,company_site_list,null));
});

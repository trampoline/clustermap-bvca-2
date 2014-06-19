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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__34602){var map__34611 = p__34602;var map__34611__$1 = ((cljs.core.seq_QMARK_(map__34611))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34611):map__34611);var opts = map__34611__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34611__$1,cljs.core.constant$keyword$696);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34611__$1,cljs.core.constant$keyword$697);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$698,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$698,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t34612 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t34612 = (function (company_path,link_fn,path_fn,opts,map__34611,p__34602,owner,investment,meta34613){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__34611 = map__34611;
this.p__34602 = p__34602;
this.owner = owner;
this.investment = investment;
this.meta34613 = meta34613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t34612.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t34612.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t34612";
clustermap.components.full_report.company_site_list.t34612.cljs$lang$ctorPrWriter = ((function (company_path,map__34611,map__34611__$1,opts,path_fn,link_fn){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.full-report.company-site-list/t34612");
});})(company_path,map__34611,map__34611__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t34612.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t34612.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__34611,map__34611__$1,opts,path_fn,link_fn){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs34615 = cljs.core.constant$keyword$711.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34615))?sablono.interpreter.attributes(attrs34615):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34615))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34615)], null))));
})(),(function (){var attrs34616 = cljs.core.constant$keyword$712.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34616))?sablono.interpreter.attributes(attrs34616):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34616))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34616)], null))));
})(),(function (){var attrs34617 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$699,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$713,cljs.core.constant$keyword$713.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$643,cljs.core.constant$keyword$714.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$699,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$713,cljs.core.constant$keyword$713.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$643,cljs.core.constant$keyword$714.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34617))?sablono.interpreter.attributes(attrs34617):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34617))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34617)], null))));
})(),(function (){var attrs34618 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$615,cljs.core.constant$keyword$615.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$616,cljs.core.constant$keyword$715.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$701,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$615,cljs.core.constant$keyword$615.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$616,cljs.core.constant$keyword$715.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34618))?sablono.interpreter.attributes(attrs34618):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34618))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34618)], null))));
})());
});})(company_path,map__34611,map__34611__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t34612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__34611,map__34611__$1,opts,path_fn,link_fn){
return (function (_34614){var self__ = this;
var _34614__$1 = this;return self__.meta34613;
});})(company_path,map__34611,map__34611__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t34612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__34611,map__34611__$1,opts,path_fn,link_fn){
return (function (_34614,meta34613__$1){var self__ = this;
var _34614__$1 = this;return (new clustermap.components.full_report.company_site_list.t34612(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__34611,self__.p__34602,self__.owner,self__.investment,meta34613__$1));
});})(company_path,map__34611,map__34611__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t34612 = ((function (company_path,map__34611,map__34611__$1,opts,path_fn,link_fn){
return (function __GT_t34612(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34611__$2,p__34602__$1,owner__$1,investment__$2,meta34613){return (new clustermap.components.full_report.company_site_list.t34612(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34611__$2,p__34602__$1,owner__$1,investment__$2,meta34613));
});})(company_path,map__34611,map__34611__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t34612(company_path,link_fn,path_fn,opts,map__34611__$1,p__34602,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$707);if(typeof clustermap.components.full_report.company_site_list.t34633 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t34633 = (function (comm,opts,owner,investments,company_site_list,meta34634){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta34634 = meta34634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t34633.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t34633.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t34633";
clustermap.components.full_report.company_site_list.t34633.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.full-report.company-site-list/t34633");
});})(comm))
;
clustermap.components.full_report.company_site_list.t34633.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t34633.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;var attrs34636 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$716);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34636))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$625,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs34636], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34636))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34637 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$716,"Investor-backed Company",cljs.core.constant$keyword$717);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34637))?sablono.interpreter.attributes(attrs34637):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34637))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34637)], null))));
})(),(function (){var attrs34638 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$716,"Postcode",cljs.core.constant$keyword$718);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34638))?sablono.interpreter.attributes(attrs34638):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34638))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34638)], null))));
})(),(function (){var attrs34639 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$716,"Investor",cljs.core.constant$keyword$610);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34639))?sablono.interpreter.attributes(attrs34639):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34639))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34639)], null))));
})(),(function (){var attrs34640 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$716,"Constituency",cljs.core.constant$keyword$609);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34640))?sablono.interpreter.attributes(attrs34640):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34640))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34640)], null))));
})())),(function (){var attrs34641 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$709.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$686,cljs.core.constant$keyword$719,cljs.core.constant$keyword$689,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34641))?sablono.interpreter.attributes(attrs34641):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34641))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34641)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$716))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34636),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34642 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$716,"Investor-backed Company",cljs.core.constant$keyword$717);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34642))?sablono.interpreter.attributes(attrs34642):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34642))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34642)], null))));
})(),(function (){var attrs34643 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$716,"Postcode",cljs.core.constant$keyword$718);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34643))?sablono.interpreter.attributes(attrs34643):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34643))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34643)], null))));
})(),(function (){var attrs34644 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$716,"Investor",cljs.core.constant$keyword$610);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34644))?sablono.interpreter.attributes(attrs34644):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34644))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34644)], null))));
})(),(function (){var attrs34645 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$716,"Constituency",cljs.core.constant$keyword$609);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34645))?sablono.interpreter.attributes(attrs34645):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34645))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34645)], null))));
})())),(function (){var attrs34646 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$709.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$686,cljs.core.constant$keyword$719,cljs.core.constant$keyword$689,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34646))?sablono.interpreter.attributes(attrs34646):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34646))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34646)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$716))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t34633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_34635){var self__ = this;
var _34635__$1 = this;return self__.meta34634;
});})(comm))
;
clustermap.components.full_report.company_site_list.t34633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_34635,meta34634__$1){var self__ = this;
var _34635__$1 = this;return (new clustermap.components.full_report.company_site_list.t34633(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta34634__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t34633 = ((function (comm){
return (function __GT_t34633(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta34634){return (new clustermap.components.full_report.company_site_list.t34633(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta34634));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t34633(comm,opts,owner,investments,company_site_list,null));
});
